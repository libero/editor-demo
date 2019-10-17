FROM node:10 as build

WORKDIR /app
COPY ./package.json ./dist/bin/* ./
RUN npm install --production
COPY ./node_modules/substance-texture/dist ./www

FROM node:10-alpine
COPY --from=build /app /
EXPOSE 8080

CMD ["node", "index.js"]