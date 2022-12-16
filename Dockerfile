FROM node:14-alpine AS builder

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY ./package.json ./yarn.lock* ./

RUN yarn install

ARG NEXT_PUBLIC_REACT_APP_BACKENDURL
ENV NEXT_PUBLIC_REACT_APP_BACKENDURL=${NEXT_PUBLIC_REACT_APP_BACKENDURL}

COPY . .
RUN yarn build

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "start"]
