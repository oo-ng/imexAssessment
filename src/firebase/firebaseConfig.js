/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCew37IjjW-3o2x-17G3JFPOfU15sJViOc",
  authDomain: "imexsample.firebaseapp.com",
  projectId: "imexsample",
  storageBucket: "imexsample.appspot.com",
  messagingSenderId: "177739717667",
  appId: "1:177739717667:web:79c76f87ec3a404bdd6596",
  measurementId: "G-FV7FJ0XMHH"
};

// Initialize Firebase
const FBInstance = initializeApp(firebaseConfig);
const analytics = getAnalytics(FBInstance);

export default FBInstance;