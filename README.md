# Phosformer: An Explainable Transformer Model for Protein Kinase-Specific Phosphorylation Prediction

## Description

Phosformer, developed at [Kannan Lab](http://esbg.bmb.uga.edu/), is a cutting-edge tool designed for highly accurate and kinase-specific prediction of protein phosphorylation sites. This innovative method employs transformer neural networks and incorporates explainability features to enhance the understanding of phosphorylation events. 

**Key Features:**

* **High Accuracy:** Phosformer outperforms other methods in kinase-specific phosphorylation prediction.
* **Explainability:** The model provides insights into the decision-making process, highlighting the crucial residues and kinase-substrate relationships that drive phosphorylation.
* **User-Friendly Interface:** The accompanying web server offers an intuitive platform for easy access and utilization of Phosformer's capabilities.

## Using Phosformer

You can access and utilize Phosformer in two ways:

### Using Web Server (Recommended) 

Visit the Phosformer web server at [http://esbg.bmb.uga.edu/phosformer](http://esbg.bmb.uga.edu/phosformer) for direct access to the tool's functionalities.

### Local Installation

#### On Backend Server
   * **Prerequisites:**
     * Ensure you have `conda` installed. You can download it from [https://docs.conda.io/en/latest/miniconda.html](https://docs.conda.io/en/latest/miniconda.html)
     * Install `npm`: [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

   * **Clone the repository:**
     ```bash
     git clone https://github.com/noghte/phosformer2.git
     ```
   * **Navigate to the project directory:**
     ```bash
     cd phosformer2 
     ```

   * **Set up the environment and install dependencies:**
     * Create a conda environment:
       ```bash
       conda create -n phosformer python=3.8
       ```
     * Activate the environment:
       ```bash
       conda activate phosformer
       ```
     * Install Python dependencies:
       ```bash
       cd backend-flask
       pip install -r requirements.txt
       cd ..
       ```

   * **Run the application:**
     ```bash
     ./run.sh
     ```
- Running Phosformer a service in background

Create the following files:

1. Systemd service file for Gunicorn
```
# /etc/systemd/system/phosformer.service
[Unit]
Description=Gunicorn instance to serve Phosformer Flask application
After=network.target

[Service]
User=delf
Group=delf
WorkingDirectory=/var/www/phosformer
Environment="PATH=/home/delf/miniconda3/envs/phosformer/bin"
ExecStart=/home/delf/miniconda3/envs/phosformer/bin/gunicorn --workers 3 --bind 0.0.0.0:5200 wsgi:app

[Install]
WantedBy=multi-user.target
```

2. Nginx configuration
```
# /etc/nginx/sites-available/phosformer
server {
    listen 80;
    server_name <SERVER_IP_ADDRESS>;

    location / {
        proxy_pass http://127.0.0.1:5200;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

3. WSGI entry point
```
# /var/www/phosformer/wsgi.py
from app import app

if __name__ == "__main__":
    app.run()
```


Run:
```
sudo systemctl enable phosformer
sudo systemctl start phosformer
```

To test:
```bash
curl -X POST http://<IP>:5200/api/predict -H "Content-Type: application/json" -d '{"kinase":"HLEDIATERATRHRYNAVTGEWLDDEVLIKMASQPFGRGAMRECFRTKKLSNFLHAQQWKGASNYVAKRYIEPVDRDVYFEDVRLQMEAKLWGEEYNRHKPPKQVDIMQMCIIELKDRPGKPLFHLEHYIEGKYIKYNSNSGFVRDDNIRLTPQAFSHFTFERSGHQLIVVDIQGVGDLYTDPQIHTETGTDFGDGNLGVRGMALFFYSHACNRIC","substrates":["DIATERATRHRYNAV","RHRYNAVTGEWLDDE","EVLIKMASQPFGRGA","AMRECFRTKKLSNFL","CFRTKKLSNFLHAQQ","AQQWKGASNYVAKRY"]}'
```

#### On Frontend Server

- Install `nvm`
- `nvm install 18.12.1`
- `sudo npm install pm2 -g`
- `sudo nano /etc/nginx/sites-available/phosformer_frontend`:
```
server {
    listen 80;
    server_name your_domain.com;  # Or your server's IP address

    location / {
        root /var/www/phosformer_frontend;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```
- Set permissions
```bash
sudo chown -R WEB_USER:WEB_USER /var/www/phosformer_frontend
sudo chmod -R 755 /var/www/phosformer_frontend
```

- `sudo ln -s /etc/nginx/sites-available/phosformer_frontend /etc/nginx/sites-enabled/`
- Test configurations: `sudo nginx -t`
- `sudo systemctl reload nginx`
- Run `publish.sh` (or copy `build` contents and `ecosystem.config.cjs` to `/var/www/phosformer_frontend`)
- In `/var/www/phosformer_frontend`, run `pm2 start ecosystem.config.cjs`

NOTE: If the UI does not load correctly (static files not loading), move static files to correct location:
```bash
mv client/* .
rm -r client/
```

## Publication

For a detailed description of the Phosformer methodology and performance, please refer to our publication:

Zhou, Z., Yeung, W., Gravel, N., Salcedo, M., Soleymani, S., Li, S., & Kannan, N. (2023). Phosformer: An explainable transformer model for protein kinase-specific phosphorylation prediction. *Bioinformatics*, 39(2), btad046. [https://doi.org/10.1093/bioinformatics/btad046](https://doi.org/10.1093/bioinformatics/btad046)


### BibTeX for Citation

```bibtex
@article{zhou2023phosformer,
  title={Phosformer: an explainable transformer model for protein kinase-specific phosphorylation prediction},
  author={Zhou, Zhongliang and Yeung, Wayland and Gravel, Nathan and Salcedo, Mariah and Soleymani, Saber and Li, Sheng and Kannan, Natarajan},
  journal={Bioinformatics},
  volume={39},
  number={2},
  pages={btad046},
  year={2023},
  publisher={Oxford University Press}
}
