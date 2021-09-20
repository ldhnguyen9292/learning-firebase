import { db, auth } from "./../configs/firebase.config";
import {
  getDocs,
  collection,
  where,
  query,
  addDoc,
} from "firebase/firestore/lite";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const signInWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = await getDocs(
      query(collection(db, "users"), where("uid", "==", user.uid))
    );
    if (q.docs.length === 0) {
      const userRef = collection(db, "users");
      await addDoc(userRef, {
        uid: user.uid,
        username: user.displayName,
        email: user.email,
        authProvider: "google",
      });
    }
    console.log("login successfully");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signInWithEmailAndPass = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("login successfully");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPass = async (username, password, email) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const userRef = collection(db, "users");
    await addDoc(userRef, {
      uid: user.uid,
      username,
      email,
      authProvider: "local",
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPassResetEmail = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  signInWithGoogle,
  signInWithEmailAndPass,
  registerWithEmailAndPass,
  sendPassResetEmail,
  logout,
};
