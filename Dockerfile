FROM node:6
ADD . /app
WORKDIR /app
RUN npm install
RUN npm run install
CMD [ "npm run start" ]
