username=localStorage.getItem("username");
document.getElementById("welcome").innerHTML="welcome "+username;
 roomname=localStorage.getItem("roomname");
// Your web app's Firebase configuration
var firebaseConfig = {
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
//function getData() {
// firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;childData = childSnapshot.val(); if(childKey != "purpose")
//{
//Start
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;

firebasemessageid=childKey;
messagedata=childData;
console.log(firebasemessageid);
console.log(messagedata);
like=messagedata["like"];
username=messagedata['name'];
message=messagedata["message"];
 nametick="<h4>"+username+"<img src='tick.png' class='user_tick'></h4>";
 messagelist="<h4 class='message_h4'>"+message+"</h4>";
 likelist="<button class='btn btn-warning' id="+firebasemessageid+" onclick='likeno(this.id)' value="+like+">";
spanlist="<span class='glyphicon glyphicon-thumbs-up'>like=</span>"+like+"</button>";
row=nametick+messagelist+likelist+spanlist;
 document.getElementById("output").innerHTML+=row;
//End code
 }
   });});}
   getData();
  

function send() {
  message=document.getElementById("inputbox").value;
 firebase.database().ref(roomname).push({
  name:username,
  message:message,
  like:0 
 });
}
function likeno(like) {
  console.log(like);
  buttonid=like;
oldlike=document.getElementById(buttonid).value;
newlike=Number(oldlike)+1;
firebase.database().ref(roomname).child(like).update(
  {
    like:newlike
  }
);
}
function logout() {
 localStorage.removeItem("username");
 localStorage.removeItem("roomname");
 window.location.replace("index.html") ;
}
  





