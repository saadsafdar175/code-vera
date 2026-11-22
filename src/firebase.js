// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, logEvent as firebaseLogEvent } from "firebase/analytics";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

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

// Initialize Cloud Firestore Database
export const db = getFirestore(app);

// Initialize Firebase Analytics safely for client browser environments
export let analytics = null;
let analyticsPromise = null;

if (typeof window !== "undefined") {
  analyticsPromise = isSupported()
    .then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
        console.log("✓ Firebase Analytics initialized successfully (Measurement ID: G-XMRPP910R5)");
        return analytics;
      } else {
        console.warn("Firebase Analytics is not supported in this environment (e.g. adblocker or cookies disabled).");
        return null;
      }
    })
    .catch((err) => {
      console.warn("Firebase Analytics initialization notice:", err);
      return null;
    });
}

/**
 * Log custom analytics event safely to Firebase Analytics
 * @param {string} eventName
 * @param {object} eventParams
 */
export const trackEvent = async (eventName, eventParams = {}) => {
  try {
    if (!analytics && analyticsPromise) {
      await analyticsPromise;
    }
    if (analytics) {
      firebaseLogEvent(analytics, eventName, {
        timestamp: new Date().toISOString(),
        ...eventParams
      });
      console.log(`[Firebase Analytics] Event: "${eventName}"`, eventParams);
    }
  } catch (error) {
    console.debug(`[Firebase Analytics Notice] Could not log event "${eventName}":`, error);
  }
};

/**
 * Save user contact message / email / SMS inquiry to Firebase Firestore
 * @param {object} param0 - { name, email, service, message }
 * @returns {Promise<{ success: boolean, id?: string, error?: any }>}
 */
export const saveMessageToFirebase = async ({ name, email, service, message }) => {
  console.log("🔄 [Firebase] Attempting to save message to Firestore...");
  console.log("🔄 [Firebase] Project ID:", firebaseConfig.projectId);
  console.log("🔄 [Firebase] Data:", { name, email, service, messageLength: message?.length });

  try {
    const docRef = await addDoc(collection(db, "inquiries"), {
      name: name ? name.trim() : "",
      email: email ? email.trim() : "",
      service: service || "Website Development",
      message: message ? message.trim() : "",
      createdAt: serverTimestamp(),
      submittedAt: new Date().toISOString(),
      status: "new",
      platform: typeof navigator !== "undefined" ? navigator.platform : "web",
      url: typeof window !== "undefined" ? window.location.href : ""
    });

    console.log("✅ [Firebase Firestore] Message stored! Document ID:", docRef.id);
    console.log("✅ [Firebase Firestore] View at: https://console.firebase.google.com/project/code-vera/firestore/data/~2Finquiries~2F" + docRef.id);

    await trackEvent("message_stored_firebase", {
      service: service || "Website Development",
      has_email: Boolean(email),
      inquiry_id: docRef.id
    });

    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("❌ [Firebase Firestore ERROR] Code:", error.code);
    console.error("❌ [Firebase Firestore ERROR] Message:", error.message);
    console.error("❌ [Firebase Firestore ERROR] Full error:", error);

    // Specific error guidance
    if (error.code === "permission-denied") {
      console.error("🔒 PERMISSION DENIED: Firestore security rules are blocking writes.");
      console.error("👉 Fix: Go to https://console.firebase.google.com/project/code-vera/firestore/rules");
      console.error("👉 Add rule: allow create: if true; for the inquiries collection");
    } else if (error.code === "unavailable") {
      console.error("🌐 NETWORK ERROR: Cannot reach Firebase servers. Check internet connection.");
    } else if (error.code === "not-found") {
      console.error("📂 NOT FOUND: Firestore database may not be created yet.");
      console.error("👉 Fix: Go to https://console.firebase.google.com/project/code-vera/firestore");
    }

    trackEvent("message_firebase_error", {
      error_code: error.code || "unknown",
      error_message: error.message || "Failed to write"
    });
    return { success: false, error };
  }
};

export default app;
