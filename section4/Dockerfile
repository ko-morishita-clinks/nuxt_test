FROM node:14

WORKDIR /app

RUN npm install -g npm@8.0.0
RUN npm install -g firebase-tools@11

ENV PATH=$PATH:/usr/local/bin

EXPOSE 3000

CMD ["npm", "run", "dev"]
