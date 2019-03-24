FROM node:dubnium-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production --verbose
COPY . ./

EXPOSE 3001
ENTRYPOINT ["npm","start"];