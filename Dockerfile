FROM node:alpine

RUN mkdir -p /var/www/sremg
WORKDIR /var/www/sremg

COPY package.json /var/www/sremg
RUN npm i --silent --no-progress

COPY . /var/www/sremg

EXPOSE 8080
CMD ["npm", "run", "dev"]
