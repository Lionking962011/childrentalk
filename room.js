function loginout()
{
    window.location = "login.html";
}

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAh8okxZFHdBfjRHevH4sX4WXt8WCWZrkg",
    authDomain: "children-talk-6dcb1.firebaseapp.com",
    projectId: "children-talk-6dcb1",
    storageBucket: "children-talk-6dcb1.appspot.com",
    messagingSenderId: "748907760942",
    appId: "1:748907760942:web:a14169b4ba746a208e3ebf",
    measurementId: "G-96HD98CX66"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();