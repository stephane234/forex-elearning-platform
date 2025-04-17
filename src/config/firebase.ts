import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyCxVZBrDGusiU2tDiXDsFJMxUh6uow4_2s",
  authDomain: "forex-learning-platform.firebaseapp.com",
  projectId: "forex-learning-platform",
  storageBucket: "forex-learning-platform.firebasestorage.app",
  messagingSenderId: "918607364393",
  appId: "1:918607364393:web:e2cf8222879f9c174d3738",
  measurementId: "G-KT29JB4WM9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app); 