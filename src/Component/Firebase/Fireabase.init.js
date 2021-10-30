import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.con";

const intialAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default intialAuthentication;
