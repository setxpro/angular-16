FROM node:16.13.0-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

RUN npm install

COPY . .

RUN npx nx build my-app --prod

FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
  
COPY --from=builder /app/dist/apps/my-app ./

RUN sed -i '10i \\ttry_files $uri $uri/ /index.html;' /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
