# Project Title

The implementation of A Quien Voto Backend application, written in 
* Javascript
* Typescript
* Mongoose 
* Express

## Getting Started

For this application to work you need NodeJS, please use NVM!


### Prerequisites

You can run this application in any OS, it just need NodeJS and MongoDB to start.

### Installing

Fist install NodeJS (version 10 or above), preferably use NVM, download then from here:

* [Windows](https://github.com/coreybutler/nvm-windows) - Download NVM for Windows

* [Linux](https://github.com/creationix/nvm) - Download NVM for Linux

After installing NVM, install node:

```
nvm install 10
```

Then install typescript and node support globally

```
npm install -g ts-node typescript

```

After that install all the dependencies
...
npm install
...

And finally you can run the application with

...
npm run dev
...

## Running the tests

To be defined

### Break down into end to end tests

To be defined

### Coding style

To develop this application we are using [AirBnB Coding style] (https://github.com/airbnb/javascript) 

## Deployment

To deploy this application, we use docker to build or image:

...
docker image build
...

And run the image with

...
docker run -p 3000:3000 aquien-voto-backend
...

## Built With

* [NodeJS](http://nodejs.org/) - As our main platform
* [Express](https://expressjs.com/) - Our route / api middleware to handle request
* [TypeScript](https://www.typescriptlang.org/) - A supercharged tool to use with Javascript
* [MongoDB](https://www.mongodb.com/) - A NoSQL database to store our data
* [Mongoose](https://mongoosejs.com/) - An Object Document Mapper (ODM) for MongoDB

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 