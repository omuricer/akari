#!/bin/bash

rm -rdf docs app/dist
cp -r docs-for-github-pages docs
cd app
npx webpack --mode production
mv dist/* ../docs
exit