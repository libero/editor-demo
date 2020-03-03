#!/bin/bash
mkdir -p ./debug/www
cp -f ./dist/bin/* ./debug
cp -rf ./dist/vfs/* ./src/html/* ./node_modules/@libero/texture/dist/* ./debug/www
ln -s ../../reference-manuscripts/manuscripts ./debug/www/manuscripts
cd ./debug
node index.js
