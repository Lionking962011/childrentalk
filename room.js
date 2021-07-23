function loginout()
{
    window.location = "login.html";
}
var user = "@"+localStorage.getItem("User Name");
document.getElementById("name").innerHTML=user;


 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  function addroom() {
    roomname=document.getElementById("myname").value;
    firebase.database().ref("/").child(roomname).update({
          by:user
    });
    localStorage.setItem("roomname",roomname);
    document.getElementById("myname").innerHTML="";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log(Room_names);
    row="<div class='room_name' id="+Room_names+"  onclick='gotoroom(this.id)'>"+"<img id='roomimage' src='https://thumbs.dreamstime.com/b/teamwork-group-friends-logo-image-holding-each-other-39918563.jpg'>"+Room_names+"</div>";
    document.getElementById("output").innerHTML+=row;
    });});}
getData();

function gotoroom(name) {
   console.log(name);
   localStorage.setItem("roomname",name);
   window.location = "chat.html";
}
