import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbm8J0b7X7cCaPWgiAuZMuWfLfmMKIv4M",
  authDomain: "academic-ocean-324304.firebaseapp.com",
  projectId: "academic-ocean-324304",
  storageBucket: "academic-ocean-324304.appspot.com",
  messagingSenderId: "394698420205",
  appId: "1:394698420205:web:9457baca3832a8400541e4",
  measurementId: "G-RP8M35REL3",
  storageBucket: "gs://academic-ocean-324304.appspot.com",
};

const token =
  "AAAAW-Xb7-0:APA91bFHT4CeULlEAxOl_6D1mrEg7BThgsfIs43MojTqqOF9ptqBm5xu3aC-9_LMZc7Xsrx5cTF1NF3t4-5MORYy5XSiIzp4knCBn3BqkZoTiVPifdd5jyY0Lmq15uuZo5AbiPlGpDwI";

// Khởi tạo
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
export { db, auth, storage, app, token };

