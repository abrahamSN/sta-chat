FROM node:18

WORKDIR .

COPY package.json .

RUN npm install -g pnpm
RUN pnpm install

COPY . .

CMD ["pnpm", "start"]