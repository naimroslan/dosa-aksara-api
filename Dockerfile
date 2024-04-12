FROM --platform=linux/amd64 node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm config set legacy-peer-deps true
RUN npm install

COPY . .

EXPOSE 1337

CMD ["npm", "run", "dev"]