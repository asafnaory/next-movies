FROM node

WORKDIR  /app

# copy pacage json into workdir 
COPY package.json .

RUN npm install

#copy remaining code into workdir
COPY . .

EXPOSE 8080

CMD ["npm" , "start"]