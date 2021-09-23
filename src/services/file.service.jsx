import {
  ref,
  uploadBytes,
  getMetadata,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import { app } from "../configs/firebase.config";

const storage = getStorage(app); // connect storage

const uploadFiles = async (files) => {
  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    console.log(file);
    const storageRef = ref(storage, `${Date.now()}-${file.name}`);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log(snapshot.metadata.name);
    });
  }
};

const getFile = async (filename) => {
  try {
    const fileRef = ref(storage, filename);
    const file = await getMetadata(fileRef);
    console.log(file);
  } catch (error) {
    console.log(error);
  }
};

const getDownloadURI = async (filename) => {
  try {
    const fileRef = ref(storage, filename);
    const url = await getDownloadURL(fileRef);
    return url;
  } catch (error) {
    console.log(error);
  }
};

const downloadFile = async (filename) => {
  try {
    const fileRef = ref(storage, filename);
    const url = await getDownloadURL(fileRef);
    // Open new tab to download file
    window.open(url);
  } catch (error) {
    console.log(error);
  }
};

export { uploadFiles, getFile, getDownloadURI, downloadFile };
