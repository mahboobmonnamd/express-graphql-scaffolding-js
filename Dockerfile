FROM node:14 as builder
RUN mkdir /app
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm i
COPY ./src ./src
COPY ./config ./config
EXPOSE 5000 
CMD ["npm", "run", "dev"]
