FROM node:14-alpine
RUN mkdir -p /code/d_carlo
WORKDIR /code/d_carlo
COPY . .
RUN npm install
CMD npm start
EXPOSE 3000