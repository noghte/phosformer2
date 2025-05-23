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

Visit the Phosformer web server at [https://esbg.bmb.uga.edu/phosformer/](https://esbg.bmb.uga.edu/phosformer) for direct access to the tool's functionalities.

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
    server_name SERVER_ADDRESS_or_URL;

    # Enable detailed error logging for debugging
    error_log /var/log/nginx/error.log debug;

    # Serve static index.html at root
    location / {
        root /path/static;  # Directory with your static website files
        index index.html;
        autoindex off;  # Disable directory listing
        try_files $uri $uri/ =404;  # Ensure requests are routed correctly
    }

    # Proxy requests to the app at /phosformer
    location /phosformer {
        try_files $uri @proxy_to_app;
    }

    location @proxy_to_app {
        proxy_pass http://localhost:8085;  # Backend application (PM2)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Handle static files under /phosformer/_app/
    location /phosformer/_app/ {
        alias /var/www/phosformer_frontend/_app/;  # Directory for app static files
        try_files $uri =404;
        add_header Cache-Control "public, max-age=31536000, immutable";  # Cache control for static files
    }

    # Handle other static assets under /phosformer
    location /phosformer/ {
        # Only proxy to the backend for /phosformer requests
        try_files $uri @proxy_to_app;
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

- Enable SSL:
- `sudo apt-get install certbot python3-certbot-nginx`
- `sudo certbot --nginx -d <SERVER_ADDRESS>`

#### Setting up a Frontend Server

On the server:
- Create a directory for frontend files (e.g., `/var/www/phosformer_frontend`)
- Set permissions
```bash
sudo chown -R WEB_USER:WEB_USER /var/www/phosformer_frontend
sudo chmod -R 755 /var/www/phosformer_frontend
```

From local computer:
```bash
npm run build
scp -r ./build/*  package.json ecosystem.config.cjs WEB-USER@SERVER-ADDRESS:/var/www/phosformer_frontend/
```

On the server:
- Install `nvm`
- `nvm install 18.12.1`
- `sudo npm install pm2 -g`
- `sudo nano /etc/nginx/sites-available/phosformer_frontend`:
```
server {
    listen 80;
    server_name your_domain.com;  # Or your server's IP address

    location /phosformer/ {
        proxy_pass http://localhost:8085/;  # Backend application (PM2)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade; 
    }
}
```

- `sudo ln -s /etc/nginx/sites-available/phosformer_frontend /etc/nginx/sites-enabled/`
- Test configurations: `sudo nginx -t`
- `sudo systemctl reload nginx`
- In `/var/www/phosformer_frontend`, run `pm2 start ecosystem.config.cjs`


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
