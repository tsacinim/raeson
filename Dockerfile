# FROM node:8
FROM mhart/alpine-node:10 as base

# Create app directory
# WORKDIR /usr/src/app
WORKDIR /usr/src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./
COPY package.json yarn.lock /usr/src/

# RUN npm install
RUN yarn --production

# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

# Run test + generate test coverage
RUN yarn test

# EXPOSE 8080


FROM mhart/alpine-node:base-10
WORKDIR /usr/src
ENV NODE_ENV="production"
COPY --from=base /usr/src .
# CMD [ "npm", "start" ]
CMD ["node", "server.js"]