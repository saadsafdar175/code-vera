// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs-agl3hnVI1Lkx3AIaFitd1uOqEFtCuQ",
  authDomain: "code-vera.firebaseapp.com",
  projectId: "code-vera",
  storageBucket: "code-vera.firebasestorage.app",
  messagingSenderId: "281503358486",
  appId: "1:281503358486:web:f511d3e343c88d88ed9f37",
  measurementId: "G-XMRPP910R5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics safely for client browser environments
export let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export default app;
