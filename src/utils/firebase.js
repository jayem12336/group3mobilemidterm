import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCWhYiQc0zuZNvJfJS54bS3aQC3g1NGsfE",
  authDomain: "group3mobilemidterm.firebaseapp.com",
  projectId: "group3mobilemidterm",
  storageBucket: "group3mobilemidterm.appspot.com",
  messagingSenderId: "363810521002",
  appId: "1:363810521002:web:4e6bfaa1f58e81678735d3",
  measurementId: "G-QBRC1NMJPF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;