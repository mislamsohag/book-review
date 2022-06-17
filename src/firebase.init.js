import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB9Ccp9csrlcqdoDTE0G8PAXzo3RWjNL_M",
    authDomain: "book-review-bf0ed.firebaseapp.com",
    projectId: "book-review-bf0ed",
    storageBucket: "book-review-bf0ed.appspot.com",
    messagingSenderId: "123696735270",
    appId: "1:123696735270:web:064b2483b5fe86d16cb2e7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
