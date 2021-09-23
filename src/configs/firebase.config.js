import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "yourkey",
  authDomain: "yourkey",
  projectId: "yourkey",
  storageBucket: "yourkey",
  messagingSenderId: "yourkey",
  appId: "yourkey",
  measurementId: "yourkey",
  storageBucket: "yourkey",
};

// Khởi tạo App
const app = initializeApp(firebaseConfig);
export { app };
