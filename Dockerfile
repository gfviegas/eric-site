FROM node:alpine

WORKDIR /tmp
COPY package.json /tmp/
RUN yarn install --pure-lockfile

WORKDIR /var/www/eric-site
RUN cp -a /tmp/node_modules /var/www/eric-site/

EXPOSE 8080
CMD ["yarn", "run", "dev"]
