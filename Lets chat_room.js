
// Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyCqDUHcZ3fkCl3FaPPinaL3rjL4dp4vGbk",
    authDomain: "chatapp-for-school.firebaseapp.com",
    databaseURL: "https://chatapp-for-school-default-rtdb.firebaseio.com",
    projectId: "chatapp-for-school",
    storageBucket: "chatapp-for-school.appspot.com",
    messagingSenderId: "673546131426",
    appId: "1:673546131426:web:b531a6b635d76a6c170bbb"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

username=localStorage.getItem("username");
document.getElementById("welcome").innerHTML="welcome  "+username;
function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start 
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroom(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function addroom() {
    roomname=document.getElementById("room_name").value; 
    firebase.database().ref("/").child(roomname).update({
    purpose: "adding room"
    });
    localStorage.setItem("roomname",roomname);
    window.location="Lets chat_page.html";
}
function redirecttoroom(name) {
console.log(name);
localStorage.setItem("roomname",name);
window.location="Lets chat_page.html";    
}
function logout() {
     localStorage.removeItem("username");
     localStorage.removeItem("roomname");
     window.location="index.html";
}