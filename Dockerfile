FROM node:12 as build

WORKDIR /app
COPY ./package.json ./dist/bin/* ./
RUN npm install --production
COPY ./src/html/ ./www/
COPY ./dist/vfs/ ./www/
COPY ./node_modules/@libero/texture/dist/ ./www/
COPY ./reference-manuscripts/manuscripts ./www/manuscripts

FROM node:12-alpine
COPY --from=build /app /
EXPOSE 8080

CMD ["node", "index.js"]