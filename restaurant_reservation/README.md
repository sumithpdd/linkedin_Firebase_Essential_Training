This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### install firebase

to setup
npm install
npm i firebase

run npm start

### Install Firebase CLI tools

npm install -g firebase-tools
or mac
curl -sL https://firebase.tools | bash

then run
> firebase login

check the list of projects firebase project
> firebase projects:list

### Populate Firestore with development data

node .\src\test\populateFirestore.js

### Add Cloud Functions to a project

> firebase init

select Functions: Configure and deploy Cloud Functions
then Use an existing project
cd .\functions\
to support modern java script syntax
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install regenerator-runtime

cd..
npm install --save-de nodemon concurrently
cd .\functions\
npm run build

firebase deploy --only functions
