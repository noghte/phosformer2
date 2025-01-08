# Phosformer: An Explainable Transformer Model for Protein Kinase-Specific Phosphorylation Prediction

## Description

Phosformer, developed at [Kannan Lab](http://esbg.bmb.uga.edu/), is a cutting-edge tool designed for highly accurate and kinase-specific prediction of protein phosphorylation sites. This innovative method employs transformer neural networks and incorporates explainability features to enhance the understanding of phosphorylation events. 

**Key Features:**

* **High Accuracy:** Phosformer outperforms other methods in kinase-specific phosphorylation prediction.
* **Explainability:** The model provides insights into the decision-making process, highlighting the crucial residues and kinase-substrate relationships that drive phosphorylation.
* **User-Friendly Interface:** The accompanying web server offers an intuitive platform for easy access and utilization of Phosformer's capabilities.

## Using Phosformer

You can access and utilize Phosformer in two ways:

1. **Web Server:** Visit the Phosformer web server at [http://esbg.bmb.uga.edu/phosformer](http://esbg.bmb.uga.edu/phosformer) for direct access to the tool's functionalities.

2. **Local Installation:**

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
       conda create -n phosformer python=3.9 
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
     * Install Node.js dependencies:
       ```bash
       cd frontend-sveltekit
       npm install
       cd ..
       ```

   * **Run the application:**
     ```bash
     ./run.sh
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
