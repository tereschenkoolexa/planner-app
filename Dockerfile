FROM node:latest

MAINTAINER alexandrtereschenko1337

COPY . /var/www
WORKDIR /var/www

RUN npm instal
RUN npm instal -g @angular/cli

ENTRYPOINT [ "ng", "serve", "--host", "0.0.0.0" ]
