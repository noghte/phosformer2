# Phosformer version 2

Project description ...

## Questions

- Coral data
    - Should we use kinase_data.json? The nodes that are not in the kinase_data.json should be removed from the tree.
    - Which branches to disable? If there is no node at the end of the branch, remove the branch.
- Kinase domain validation rules?
    - Check the kinase domain to be in the list of amino acids.
- Kinase domain input types?
    - TreeView
    - AutoComplete search
- Server-side code for prediction?
- Embedding map
    - HTML file
- Hover data over kinase

## Meeting 2 (6/19/2023)

- ❓ How to find the weblogo in Embedding? Currently, it reads data from `routes/embedding/proteins.js`
    - One solution could be having an updated `genesNfamily.js`.
    - Another solution could be having uniprot id in the `proteins.js` file.

## Meeting 1

### Saber
- Substrate 
    - ✅ Should be all characters. 
    - 🔲 It should be one of 20 types of amino acids.
        - Each letter should be one the 20 letters.
        - Users can enter multiple substrates by adding textboxes.
    - ✅ Make it possible to input multiple substrates.
        - ❓ What about the UI?

- Kinase input
    - ✅ Users can choose a uniprot from kinase_domain.json
    - ✅ If users edit the kinase domain, it should show it is not related to the selected uniprot.

- Coral on the left
    - ❓ When clicking on the tree, it should show weblogos.
- 🔲 Add contents to the paper:
    - https://www.overleaf.com/1485332243jwrpvyhxsxhn
    - Section 3.6
- Weblogos
    - Will be shown when user clicks on the tree.
    - Users should be able to download the weblogo.


### Zhongliang
    - weblogo address or uniprot id in one of the json files that Saber emailed.
    - ✅ the list of amino acids.
        - 
        ```
        ```
    - ✅ adding gene name to kinase_data.json
    - ✅ paper draft
    - ✅ html file
    - ✅ weblogos
    - ✅ server-side code

---

## Backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```


## Frontend

### Running the app

- After cloning the repo, run `npm install` to install dependencies.
- Run `npm run dev` to start the development server. 
    - It will run on port `5177` by default.
    - You can run the app on a different port by modifying `"dev": "vite dev --port 5177"` in the `package.json` file.

```bash
cd frontend
npm install
npm run dev
```

### Deploying the app

#### Netlify
Look at the [Netlify docs](https://docs.netlify.com/integrations/frameworks/sveltekit/#deployment) for deploying SvelteKit apps on Netlify.

In a nutshell, the `@sveltejs/adapter-netlify` is already configured in the `svelte.config.js` file, and the configuration for Netlify is in the `netlify.toml` file.

> NOTE: if server-side rendering is not needed, use a custom server. See below.

#### Custom servers (e.g., a VM)
- Copy the contents of the `build` folder, package.json, and package-lock.json to the server. All in the same folder.
- Run `npm install --omit=dev` on the server.
- Change contents of `ecosystem.config.cjs` to your needs.
    - PORT number should match the port you are using in nginx or any other reverse proxy.
- On ther server, install pm2 or any other process manager to run the app. For example, `pm2 start ecosystem.config.cjs` to start the app.

