#!/bin/bash
npm run build
cp _redirects ./build/
netlify deploy #https://phosformer.netlify.app