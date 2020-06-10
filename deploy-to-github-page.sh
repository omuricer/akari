#!/bin/bash

rm -rdf docs app/dist
cp -r docs-for-github-pages docs
cd app
npm install
npx webpack --mode production
mv dist/* ../docs
exit