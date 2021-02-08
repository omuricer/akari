#!/bin/bash

rm -rdf docs app/dist
cp -rd docs-for-github-pages docs
cd app
npm install
npx webpack --mode production
# TODO: webpackでバンドルする!
cp -rd src/image/fukushimabonchi dist/image
cd ../
cp -rd docs/ogp app/dist/image
mv app/dist/* docs
exit