// links //

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

  // end of links //


// adduser//

function adduser()
{
    name_n = document.getElementById("username").value;
    localStorage.setItem("User Name",name_n);
    
        window.location = "roomselectionpage.html";
    
}
// show function// 
function show()
{
    document.getElementById("rester_button").style.display="inline";
    document.getElementById("dateofbirth").style.display="inline";
    document.getElementById("tag").style.display="inline";
    document.getElementById("tag1").style.display="inline";
    document.getElementById("profilimg").style.display="inline";
    document.getElementById("login_button").style.display="none";
}
//singnup function//

function reuser()
{
    user_name = document.getElementById("username").value;
    img_name = document.getElementById("profilimg").value;
    dateofbirth = document.getElementById("dateofbirth").value;
    firebase.database().ref("/").child(user_name).update({
        User_name:user_name,
        image_name:img_name,
        dateofbirth:dateofbirth
    });
    document.getElementById("rester_button").style.display="none";
    document.getElementById("dateofbirth").style.display="none";
    document.getElementById("tag").style.display="none";
    document.getElementById("tag1").style.display="none";
    document.getElementById("profilimg").style.display="none";
    document.getElementById("login_button").style.display="inline";
}


