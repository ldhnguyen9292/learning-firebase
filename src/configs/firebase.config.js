import { initializeApp } from "firebase/app";

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

// Khởi tạo App
const app = initializeApp(firebaseConfig);
export { app };
