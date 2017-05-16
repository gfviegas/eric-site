FROM node:alpine

RUN mkdir -p /var/www/eric-site
WORKDIR /var/www/eric-site

COPY package.json /var/www/eric-site
RUN npm i --silent --no-progress

COPY . /var/www/eric-site

EXPOSE 8080
CMD ["npm", "run", "dev"]
