import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

import './index.css';
import { App, serviceWorker } from './app';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

var firebaseConfig = {
  apiKey: "AIzaSyB1PLYTzXSPTCz9vq2_ykk9270y_p8eFLI",
    authDomain: "todo-flutter-8a80f.firebaseapp.com",
    databaseURL: "https://todo-flutter-8a80f.firebaseio.com",
    projectId: "todo-flutter-8a80f",
    storageBucket: "todo-flutter-8a80f.appspot.com",
    messagingSenderId: "965292851106",
    appId: "1:965292851106:web:4887dd37f3c40df16dfcfb",
    measurementId: "G-CTVJH3FPBX"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// This is where the magic happens. React renders our App component
// inside the div with the id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
