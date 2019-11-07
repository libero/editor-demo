FROM node:12 as build

WORKDIR /app
COPY ./package.json ./dist/bin/* ./
RUN npm install --production
COPY ./html/ ./www/
COPY ./node_modules/@libero/texture/dist/ ./www/

FROM node:12-alpine
COPY --from=build /app /
EXPOSE 8080

CMD ["node", "index.js"]