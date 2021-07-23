// firebase links//
var firebaseConfig = {
    apiKey: "AIzaSyAh8okxZFHdBfjRHevH4sX4WXt8WCWZrkg",
    authDomain: "children-talk-6dcb1.firebaseapp.com",
    databaseURL: "https://children-talk-6dcb1-default-rtdb.firebaseio.com",
    projectId: "children-talk-6dcb1",
    storageBucket: "children-talk-6dcb1.appspot.com",
    messagingSenderId: "748907760942",
    appId: "1:748907760942:web:a14169b4ba746a208e3ebf",
    measurementId: "G-96HD98CX66"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  // end of firebase links//

  // adding user name//
  sendby = localStorage.getItem("User Name");
  // end of adding user name//
  room_names = localStorage.getItem("roomname");
  // start of the function send //

  function send()
  {
     var me = document.getElementById("msg").value
        firebase.database().ref(room_names).push({
            msg:me,
            noofliks:0,
            by:sendby
        })
        document.getElementById("msg").value = "";
  }

  // end of function send //

  // start of function logout//

  function logout()
  {
      window.location  =  "login.html";
      localStorage.removeItem("userName");
      localStorage.removeItem("Image Name");
  }

    // end of function logout //