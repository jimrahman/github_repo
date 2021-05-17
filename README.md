#GitHub Repo Searcher

This repository houses the application code for GitHub Repo Search mobile client.
This application is written using [React Native](https://facebook.github.io/react-native/).

## Dev Environment Setup

#### node
Recommend node version for react native we are using is [Node 10+](https://nodejs.org/en/download/)

#### yarn
Yarn is used as dependency manager for this app.

 - [Install yarn](https://yarnpkg.com/en/docs/install)
 
After installing yarn run this command to download all the dependencies

    yarn install

***note: Did not use npm

#### prerequisite
  - Docker must be installed and running in the working system
  - Provided Dorcker Server must stay ON while the app is running

#### configuration
Docker server can be started with the following command in terminal,

    docker run -p 8080:8080 gcr.io/hiring-278615/reposerver:v1.1

#### And Voila!
 - Start the application's development server using the command

        yarn start

#### Running your React Native application
Install the [Expo](https://expo.io/) client app on your iOS or Android phone and
connect to the same wireless network as your computer.
On Android, use the Expo app to scan the QR code from your terminal
to open your project. On iOS, follow on-screen instructions to get a link.

## Tests

To execute the unit tests manually:

    yarn jest
