FROM node:10-alpine

COPY package.json yarn.lock ./
RUN yarn --no-progress --frozen-lockfile --production
COPY . .

CMD yarn micro
