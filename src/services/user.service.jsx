import { db } from "../configs/firebase.config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore/lite";

// Add a new document with a generated id.
const addNewData = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      username: "Ada",
      password: "Lovelace",
      email: "test@gmail.com",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Find all
const getData = async () => {
  try {
    const userCol = collection(db, "users");
    const userSnapshot = await getDocs(userCol);
    userSnapshot.docs.map((doc) => console.log(doc.data()));
  } catch (error) {
    console.log(error);
  }
};

// Find detail
const getDetail = async () => {
  try {
    const post = await getDoc(doc(db, "posts", "nrqADUnWkk4rhI9jzmwu"));
    const user = await getDoc(post.data().userId);
    console.log(user.data());
  } catch (error) {
    console.log(error);
  }
};

// Update doc
const updateOne = async () => {
  try {
    const userRef = doc(db, "users", "lPjNLWN08bxnBE3IyR3M");
    await updateDoc(userRef, { username: "Le Nguyen" });
  } catch (error) {
    console.log(error);
  }
};

// Delete doc
const deleteOne = async () => {
  try {
    const userRef = doc(db, "users", "1Dt18tden59dTi64mG4n");
    await deleteDoc(userRef);
  } catch (error) {
    console.log(error);
  }
};

export { addNewData, getData, updateOne, deleteOne, getDetail };
