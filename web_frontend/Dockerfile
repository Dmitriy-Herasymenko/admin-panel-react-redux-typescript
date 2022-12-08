FROM node:16

WORKDIR /app

RUN npm i -g npm 

COPY package.json ./
COPY src ./src
COPY public ./public
COPY tsconfig.json ./

RUN npm install

CMD ["npm", "start"]