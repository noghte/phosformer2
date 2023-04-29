# Phosformer version 2

Project description ...

## Running the app

- After cloning the repo, run `npm install` to install dependencies.
- Run `npm run dev` to start the development server. 
    - It will run on port `5177` by default.
    - You can run the app on a different port by modifying `"dev": "vite dev --port 5177"` in the `package.json` file.

## Deploying the app

### Netlify
Look at the [Netlify docs](https://docs.netlify.com/integrations/frameworks/sveltekit/#deployment) for deploying SvelteKit apps on Netlify.

In a nutshell, the `@sveltejs/adapter-netlify` is already configured in the `svelte.config.js` file, and the configuration for Netlify is in the `netlify.toml` file.

> NOTE: if server-side rendering is not needed, use a custom server. See below.

### Custom servers (e.g., a VM)
- Copy the contents of the `build` folder, package.json, and package-lock.json to the server. All in the same folder.
- Run `npm install --omit=dev` on the server.
- Change contents of `ecosystem.config.cjs` to your needs.
    - PORT number should match the port you are using in nginx or any other reverse proxy.
- On ther server, install pm2 or any other process manager to run the app. For example, `pm2 start ecosystem.config.cjs` to start the app.