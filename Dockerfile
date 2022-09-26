FROM node:16-alpine

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY . .

RUN npm ci

RUN chown -R node:node .

USER node

EXPOSE 3000

CMD [ "node", "index.js" ]