FROM node:16.16.0
WORKDIR /app
ARG NODE_ENV
COPY package.json .
RUN npm install
COPY . .
ENV PORT 8002
EXPOSE 8002
CMD NODE_ENV=$NODE_ENV PORT=8002 npm install && npm run dev