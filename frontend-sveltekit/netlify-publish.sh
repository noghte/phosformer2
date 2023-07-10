#!/bin/bash
npm run build
#cp _redirects ./build/
netlify env:import .env
netlify deploy --debug #https://phosformer.netlify.app
