"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = require("firebase");
const firebaseConfig = {
    apiKey: 'AIzaSyAXkLUZdvbrQlK0mxGgW4VM_f3Rxuw08tg',
    authDomain: 'alphago-adffd.firebaseapp.com',
    databaseURL: 'https://alphago-adffd.firebaseio.com',
    projectId: 'alphago-adffd',
    storageBucket: 'alphago-adffd.appspot.com',
    messagingSenderId: '860192363251',
    appId: '1:860192363251:web:42aeba41674fbd38011d86',
    measurementId: 'G-XVS42ZH78H'
};
const FBClient = firebase.initializeApp(firebaseConfig);
exports.default = FBClient;
exports.db = FBClient.firestore();
//# sourceMappingURL=client.js.map