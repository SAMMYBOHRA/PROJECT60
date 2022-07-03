import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyBx8QVMyEwLcqyktbfh0wEYXBcbHGVpRYI",
  authDomain: "project-60-64f1a.firebaseapp.com",
  databaseURL: "https://project-60-64f1a-default-rtdb.firebaseio.com",
  projectId: "project-60-64f1a",
  storageBucket: "project-60-64f1a.appspot.com",
  messagingSenderId: "462310565285",
  appId: "1:462310565285:web:5c61d2de6b8ef1b0e1b44c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database()
  