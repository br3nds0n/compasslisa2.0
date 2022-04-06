FROM node:16.14.0
RUN mkdir /backend/
WORKDIR /backend/
COPY . /backend/
RUN yarn install
RUN yarn build
CMD [ "yarn", "start" ]