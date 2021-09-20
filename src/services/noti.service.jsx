import { getMessaging, onMessage } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";
import { app, token } from "./../configs/firebase.config";

const messaging = getMessaging(app);

const receiveMess = () => {
  onMessage(messaging, (payload) => {
    console.log("message: ", payload);
  });
};

const sendMess = () => {
  admin
    .messaging()
    .subscribeToTopic(token, topic)
    .then((response) => {
      // See the MessagingTopicManagementResponse reference documentation
      // for the contents of response.
      console.log("Successfully subscribed to topic:", response);
    })
    .catch((error) => {
      console.log("Error subscribing to topic:", error);
    });
};

export { receiveMess, sendMess };
