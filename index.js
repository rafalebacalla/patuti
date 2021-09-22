const express = require("express");
const path = require("path");

// import { initializeApp } from "firebase/app";
var firebase = require("firebase/app")

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

const firebaseConfig = {
  apiKey: "AIzaSyB3j5wI9vBOJqtTtScgbt_K07Pr3MbQzw4",
  authDomain: "patuti-alien.firebaseapp.com",
  projectId: "patuti-alien",
  storageBucket: "patuti-alien.appspot.com",
  messagingSenderId: "72893915593",
  appId: "1:72893915593:web:affe56bd0f174269b14818"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
