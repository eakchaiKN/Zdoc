/* eslint-disable */
import Firebase from "firebase";
export const config = {
  apiKey: "AIzaSyD4uvVJGpH-1lexG4hznh8KnbXnj8G3tl0",
  authDomain: "book-dentist-test.firebaseapp.com",
  databaseURL: "https://book-dentist-test.firebaseio.com",
  projectId: "book-dentist-test",
  storageBucket: "book-dentist-test.appspot.com"
};
const app = Firebase.initializeApp(config);
const db = app.database();
export default db
