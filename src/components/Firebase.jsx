// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyD-lkwIbVSgZxQdhlhPmBxztFo3x6MRNp8",
  
    authDomain: "vdo-login-64db5.firebaseapp.com",
  
    databaseURL: "https://vdo-login-64db5-default-rtdb.firebaseio.com",
  
    projectId: "vdo-login-64db5",
  
    storageBucket: "vdo-login-64db5.appspot.com",
  
    messagingSenderId: "120252105390",
  
    appId: "1:120252105390:web:bde9f079c6ddfa7dafa33f"
  
  };
  
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;