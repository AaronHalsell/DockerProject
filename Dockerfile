FROM node:19.4.0

LABEL maintainer="Aaron Halsell" description="A super simple hello world page" cohort="15" animal="I think it was a whale?"

WORKDIR /app

COPY . .

RUN yarn install --production

CMD ["node", "server.js"]

EXPOSE 8080


