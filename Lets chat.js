function adduser() {
  username=document.getElementById("user_name").value;
localStorage.setItem("username",username);
window.location="Lets chat_room.html";
}
function logout() {
 logout=document.getElementById("logout").value;
 localStorage.setItem("logout",Logout);
 window.location="lets chat_room.html" ;
}
