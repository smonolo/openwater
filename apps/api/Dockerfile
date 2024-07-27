FROM node:20-alpine

WORKDIR /app

COPY package.json .
RUN npm install

RUN npm install -g prisma@latest turbo@latest

COPY schema.prisma .
RUN prisma generate

COPY . .
RUN turbo build

CMD ["node", "dist/index.js"]