#!/bin/bash
mkdir -p ./debug/www
cp -f ./dist/bin/* ./debug
cp -rf ./dist/vfs/* ./src/html/* ./node_modules/@libero/texture/dist/* ./debug/www
if [ ! -e ./debug/www/manuscripts ];
then
  ln -s ../../reference-manuscripts/manuscripts ./debug/www/manuscripts
fi

cd ./debug
node index.js
