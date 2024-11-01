// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPmmF-wlYGgXMKdhRMQlSaKu0dsP2aSTU",
    authDomain: "netflix-gpt-37cef.firebaseapp.com",
    projectId: "netflix-gpt-37cef",
    storageBucket: "netflix-gpt-37cef.firebasestorage.app",
    messagingSenderId: "907425988644",
    appId: "1:907425988644:web:ca269980ec4f6dec1e18b1",
    measurementId: "G-T52RHMBXC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);