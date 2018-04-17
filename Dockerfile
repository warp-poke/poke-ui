FROM node:6
ADD . /app
RUN ls /app
WORKDIR /app
RUN npm install
CMD [ "TODO" ]