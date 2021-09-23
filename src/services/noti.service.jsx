import { getToken, onMessage, getMessaging } from "firebase/messaging";
import { getAuth } from "firebase/auth";
import { app } from "./../configs/firebase.config";

const messaging = getMessaging(app); // connect cloud messaging
const auth = getAuth(app);

const getTo = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey:
        "BKqZaGhx6uVokMhnnWyQVowla-yp3bdVvdMjx9fO8cl69eHsQgzNJR6v2MPLz-qUnCSoEz07ciLu6tdRsWLfQCc",
    });
    console.log(currentToken);
    if (currentToken) {
      const idToken = await auth.currentUser.getIdToken(
        /* forceRefresh */ true
      );
      console.log(idToken);
      var key =
        "AAAAW-Xb7-0:APA91bFHT4CeULlEAxOl_6D1mrEg7BThgsfIs43MojTqqOF9ptqBm5xu3aC-9_LMZc7Xsrx5cTF1NF3t4-5MORYy5XSiIzp4knCBn3BqkZoTiVPifdd5jyY0Lmq15uuZo5AbiPlGpDwI";
      var to = idToken;
      var notification = {
        title: "Portugal vs. Denmark",
        body: "5 to 1",
        icon: "firebase-logo.png",
        click_action: "http://localhost:3000",
      };

      await fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        headers: {
          Authorization: "key=" + key,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notification: notification,
          to: to,
        }),
      });
    }
  } catch (error) {
    console.log(error);
  }
};
getTo();
const receiveMess = () => {
  onMessage(messaging, (payload) => {
    console.log(payload);
  });
};

export { receiveMess };
