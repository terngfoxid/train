import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCc6M0sxKDlS7DYe5tA36SPUwr4eequ2i8",
    authDomain: "azur-lane-guide.firebaseapp.com",
    projectId: "azur-lane-guide",
    storageBucket: "azur-lane-guide.appspot.com",
    messagingSenderId: "416897764300",
    appId: "1:416897764300:web:ea64fac7da10535ccfab69",
    measurementId: "G-L4CJGVFV5D"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
