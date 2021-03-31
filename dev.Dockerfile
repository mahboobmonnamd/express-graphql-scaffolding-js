FROM node:14 as builder
CMD [ "make remove_postgres"]
RUN mkdir /app
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm i
COPY ./src ./src
EXPOSE 5000 
CMD ["npm", "run", "dev"]
