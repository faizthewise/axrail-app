import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBbhGIwUdTKBIr4cZjG83-TCy_1bioE7UM",
  authDomain: "phonebook-fee49.firebaseapp.com",
  databaseURL: "https://phonebook-fee49.firebaseio.com",
  projectId: "phonebook-fee49",
  storageBucket: "phonebook-fee49.appspot.com",
  messagingSenderId: "685681299217",
  appId: "1:685681299217:web:22a184785d1440ea29c6b0",
  measurementId: "G-NZ2Q6J6759"
};
firebase.initializeApp(firebaseConfig);



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
