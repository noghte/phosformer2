from flask import Flask, request, jsonify, abort
from flask_cors import CORS
import logging
import torch
from tokenization_esm import EsmTokenizer
from modeling_esm import EsmForSequenceClassificationMHACustom
import numpy as np
import pandas as pd
import json
import os

app = Flask(__name__)

env = os.environ['FLASK_ENV'] if 'FLASK_ENV' in os.environ else "production"
print(env)

# in production CORS is handled by nginx
if env == 'development': 
    print("CORS enabled by flask")
    CORS(app, resources={r"/api/*": {"origins": "*", "allow_headers": ["Content-Type"]}})


#development
#model_dir = 'backend-flask/model'
#production
model_dir = 'model'

logging.basicConfig(filename='app.log', level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


tokenizer = EsmTokenizer.from_pretrained(model_dir)
model = EsmForSequenceClassificationMHACustom.from_pretrained(model_dir, num_labels=2)

def run_model(substrate, kinases, model=model, tokenizer=tokenizer, device='cuda:1', batch_size=50, output_hidden_states=True, output_attentions=True):
    torch.cuda.empty_cache()
    
    model.eval()
    model = model.to(device)
    print("s=",type(substrate))
    print("k=",type(kinases))

    ids = tokenizer(substrate, kinases, padding=True, return_tensors='pt')
    ids = ids.to(device)
    output = dict()
    with torch.no_grad():
        results, classifier_attn_outputs, classifier_attn_output_weights = model(ids['input_ids'], 
                        attention_mask=ids['attention_mask'], 
                        output_hidden_states=output_hidden_states, 
                        output_attentions=output_attentions)

        attention_mask = ids['attention_mask'].cpu().type(torch.bool)

        output['probability'] = results['logits'].softmax(1)[:,1].cpu().numpy()

        if output_hidden_states:
            last_embeddings = results['hidden_states'][-1].cpu().numpy()
            output['embedding'] = [i[m] for i, m in zip(last_embeddings, attention_mask)]

        if output_attentions:
            last_attentions = results['attentions'][-1].cpu().numpy()
            output['attention'] = [i[:,m,:][:,:,m] for i, m in zip(last_attentions, attention_mask)]

        classifier_attn_outputs = classifier_attn_outputs.cpu()
        output['classifier_attn_outputs'] = classifier_attn_outputs

        classifier_attn_output_weights = classifier_attn_output_weights.cpu()
        output['classifier_attn_output_weights'] = [i[:,m[16:]] for i, m in zip(classifier_attn_output_weights, attention_mask)]

    return output

# @app.route('/api/predict', methods=['POST'])
# def predict():
#     if request.method == 'POST':
#         data = request.get_json()
#         kinases = data.get('kinase')
#         peptides = data.get('substrate')
#         # For development purposes, return a dummy response
#         output = {
#             'result': 'dummy prediction',
#             'probability': 0.99
#         }
        
#         app.logger.info(f'Received prediction request: {data}')
#         app.logger.info(f'Output: {output}')

#         return jsonify(output)

@app.route('/api/')
def test():
    return 'Server is running!'


@app.route('/api/predict', methods=['POST'])
def predict():
    # origin = request.headers.get('Origin')
    # print("Origin=", origin)
    # if origin != 'https://phosformer.netlify.app':
    #     abort(403)  # Forbidden

    print("pre-post")
    if request.method == 'POST':
        res = []
        data = request.get_json()
        kinases = data.get('kinase')
        substrates = data.get('substrates')
        logging.info(f'Received prediction request: {data}')
        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        print("Device=",device)
        substrates = substrates[:100]
        for substrate in substrates:
            output = run_model(substrate, kinases, 
                model=model, 
                device=device,
                tokenizer=tokenizer, 
                output_hidden_states=False,
                output_attentions=False,
                batch_size=1, 
                )

            op = output["probability"].tolist()
            result = op[0] > 0.5
            res.append({"substrate":substrate, "probability":op, "result": result})
        print("Response=", res)
        return jsonify(res)
        # j = json.dump(output["probability"].tolist())  
        # return j#jsonify(output["probability"][0])

if __name__ == '__main__':
    app.run(debug=False, host="0.0.0.0", port=5200)
    # tmux new-session -s phos
    # detach: Ctrl+b and then d.
    # tmux attach-session -t phos
    # Run with python app.py