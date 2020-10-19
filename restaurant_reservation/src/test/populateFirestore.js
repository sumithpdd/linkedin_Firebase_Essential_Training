const firebase = require('firebase');
require('firebase/firestore');

const { reservations, restaurants, dateAvailabilities, reviews } = require('./testData');

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

const db = firebase.firestore();

function populateCollection(collectionName, items) {
    return Promise.all(items.map(item => {
        const { id, ...data } = item;
        return db.collection(collectionName)
            .doc(id)
            .set(data);
    }));
}

Promise.all([
        populateCollection('reservations', reservations),
        populateCollection('reviews', reviews),
        populateCollection('restaurants', restaurants),
        populateCollection('dateAvailabilities', dateAvailabilities),
    ])
    .then(() => {
        console.log('Done!');
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
    });