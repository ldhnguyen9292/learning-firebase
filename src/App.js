import {
  registerWithEmailAndPass,
  signInWithEmailAndPass,
  signInWithGoogle,
} from "./services/auth.service";
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

  const uploadFiles = () => {};

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
      <form onSubmit={uploadFiles}>
        <input type="file" id="files" name="files" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default App;
