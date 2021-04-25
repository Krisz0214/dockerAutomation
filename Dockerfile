FROM node:14.15.0-buster

ENV NODE_ENV=production

WORKDIR /src

COPY package.json package-lock.json /src/

RUN npm install --production --silent && mkdir /src/app

COPY ./app/* /src/app/

EXPOSE 3000

CMD ["node", "/src/app/index.js"]
