import {
  registerWithEmailAndPass,
  signInWithEmailAndPass,
  signInWithGoogle,
} from "./services/auth.service";
import {
  downloadFile,
  getDownloadURI,
  getFile,
  uploadFiles,
} from "./services/file.service";
import { receiveMess } from "./services/noti.service";
import {
  addNewData,
  deleteOne,
  getData,
  getDetail,
  updateOne,
} from "./services/user.service";

function App() {
  // addNewData();
  // updateOne();
  // deleteOne();
  // getData();
  // getDetail();
  const login = (event) => {
    event.preventDefault();
    const email = document.getElementById("email_1").value;
    const password = document.getElementById("password_1").value;
    signInWithEmailAndPass(email, password);
  };

  const signInWithGG = () => {
    signInWithGoogle();
  };

  const register = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    registerWithEmailAndPass(username, password, email);
  };

  const uploadMultiFiles = (event) => {
    event.preventDefault();
    const files = document.getElementById("files").files;
    let content = ``;
    for (let index = 0; index < files.length; index++) {
      content += `<span>${files[index].name} </span>`;
    }
    document.getElementById("filename").innerHTML = content;
    uploadFiles(files);
  };

  // const getURL = async () => {
  //   try {
  //     const url = await getDownloadURI("1632137429019-ME.jpg");
  //     document.getElementById("filename").innerHTML = `
  //       <img src=${url} width="500px">
  //     `;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // getURL();

  // messaging
  receiveMess();

  return (
    <div>
      <form onSubmit={login}>
        <input type="text" id="email_1" name="email" />
        <input type="password" id="password_1" name="password" />
        <button type="submit">Login</button>
      </form>
      <button onClick={signInWithGG}>Login with gg mail</button>
      <form onSubmit={register}>
        <input type="text" id="username" name="username" />
        <input type="password" id="password" name="password" />
        <input type="email" id="email" name="email" />
        <button type="submit">Register</button>
      </form>
      <form onSubmit={uploadMultiFiles}>
        <input type="file" id="files" name="files" multiple={true} />
        <button type="submit">Upload</button>
      </form>
      <div id="filename"></div>
      <button
        type="button"
        onClick={() => {
          downloadFile("1632143713574-DEDD7764.JPG");
        }}
      >
        download
      </button>
    </div>
  );
}

export default App;
