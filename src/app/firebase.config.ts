import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCXFJ9IVFi7pyGX2XsGBzEvI5BOB0kjQtg",
  authDomain: "weddingweb-a51e8.firebaseapp.com",
  projectId: "weddingweb-a51e8",
  storageBucket: "weddingweb-a51e8.firebasestorage.app",
  messagingSenderId: "747406202052",
  appId: "1:747406202052:web:9fc9ab7b9f70fdd069e591"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);