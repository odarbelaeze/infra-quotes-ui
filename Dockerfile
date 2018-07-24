FROM node:carbon-alpine as builder
ADD . /src
WORKDIR /src
RUN npm install && npm run build

FROM nginx:alpine
COPY config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /src/build /code/
EXPOSE 80
