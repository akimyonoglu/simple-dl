from mhart/alpine-node:4

ADD . /var/www
RUN cd /var/www; npm install

CMD ["/usr/bin/node", "/var/www/bin/www"]
