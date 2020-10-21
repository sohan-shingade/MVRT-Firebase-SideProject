import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC9MzRckhT5lWCz_0SYjWoPBWtYGZ-e1Jw",
  authDomain: "mvrt-side-project.firebaseapp.com",
  databaseURL: "https://mvrt-side-project.firebaseio.com",
  projectId: "mvrt-side-project",
  storageBucket: "mvrt-side-project.appspot.com",
  messagingSenderId: "57986287092",
  appId: "1:57986287092:web:130116c11bcec71883a5a1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export async function getData() {
  let db = firebase.firestore().collection("data");
  let snapshot = await db.get();
  let docs = [];
  function addDocToArr(doc) {
    docs.push(doc.id);
  }
  snapshot.docs.map(addDocToArr);
  //console.log(docs);
  return docs;
}
