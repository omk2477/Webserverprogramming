// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyA13aEq03pc7TrolGd1Hs5tB5AGKpolfqc",
authDomain: "fir-521b4.firebaseapp.com",
projectId: "fir-521b4",
storageBucket: "fir-521b4.appspot.com",
messagingSenderId: "837668211528",
appId: "1:837668211528:web:ce7d9cb5b8458cac9c017d",
measurementId: "G-VPV4JWWJCV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);