FROM node:18

WORKDIR /room.us

copy . .

RUN "npm install"
RUN "npm run install-client"

CMD ["executable", "npm run start", "npm run client"]

EXPOSE 5000

