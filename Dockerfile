FROM node:7.5

RUN mkdir /var/www
RUN mkdir /var/www/app

COPY . /var/www/app

WORKDIR /var/www/app
RUN npm install

EXPOSE 8080
CMD ["npm", "run", "dev"]
