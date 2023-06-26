from flask import Flask, request, jsonify
from flask_cors import CORS
import logging
import torch
from tokenization_esm import EsmTokenizer
from modeling_esm import EsmForSequenceClassificationMHACustom
import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app) 

logging.basicConfig(filename='app.log', level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
model_dir = 'backend-flask/model'


# TODO: make the model local
# from transformers import AutoTokenizer, EsmForProteinFolding
# tokenizer = AutoTokenizer.from_pretrained("facebook/esmfold_v1")
# model = EsmForProteinFolding.from_pretrained("facebook/esmfold_v1", low_cpu_mem_usage=True)

tokenizer = EsmTokenizer.from_pretrained(model_dir)
model = EsmForSequenceClassificationMHACustom.from_pretrained(model_dir, num_labels=2)

def run_model(peptides, kinases, model=model, tokenizer=tokenizer, device='cuda:1', batch_size=50, output_hidden_states=True, output_attentions=True):
    torch.cuda.empty_cache()
    
    model.eval()
    model = model.to(device)

    ids = tokenizer(peptides, kinases, padding=True, return_tensors='pt')
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
#         peptides = data.get('subtrade')
        
#         # For development purposes, return a dummy response
#         output = {
#             'result': 'dummy prediction',
#             'confidence': 0.99
#         }
        
#         app.logger.info(f'Received prediction request: {data}')
#         app.logger.info(f'Output: {output}')

#         return jsonify(output)

@app.route('/api/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        data = request.get_json()
        kinases = data.get('kinase')
        peptides = data.get('subtrade')
        logging.info(f'Received prediction request: {data}')
        output = run_model(peptides, kinases, 
            model=model, 
            tokenizer=tokenizer, 
            output_hidden_states=False,
            output_attentions=False,
            batch_size=1, 
            )
        logging.info(f'Output: {output}')   
        return jsonify(output)

if __name__ == '__main__':
    app.run(debug=False, port=5200)
