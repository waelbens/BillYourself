FROM node:10.0.0
RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY package.json /opt/app

RUN npm i npm@latest -g
RUN npm install

COPY . /opt/app
EXPOSE 4200
CMD ["npm", "start"]
