FROM node:21 AS build
WORKDIR /app
COPY package.json .
COPY package-lock.json ./
RUN npm install 
COPY . ./
EXPOSE 5000
CMD ["node", "./index.js"]