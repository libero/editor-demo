#!/bin/bash
mkdir -p ./debug/www
cp -f ./dist/bin/* ./debug
cp -rf ./dist/vfs/* ./src/html/demo.js ./debug/www
cp ./src/html/index-webpack.html ./debug/www/index.html
ln -s ../../reference-manuscripts/manuscripts ./debug/www/manuscripts

cd ./debug
node index.js
