var firebaseConfig = {
      apiKey: "AIzaSyDY1mUVEqm-kpHSLKDfGdJ3nukAPeQqzgs",
      authDomain: "chatter-ba700.firebaseapp.com",
      databaseURL: "https://chatter-ba700-default-rtdb.firebaseio.com",
      projectId: "chatter-ba700",
      storageBucket: "chatter-ba700.appspot.com",
      messagingSenderId: "250605619210",
      appId: "1:250605619210:web:66dbc423b793512d3777f3"
};


firebase.initializeApp(firebaseConfig);




var user_name = localStorage.getItem("userName");
var tag_name = localStorage.getItem("tagName");

if (tag_name.length == 0) {
      document.getElementById("welcome").innerHTML = "Welcome " + user_name + "<span style='color:grey;'>(Member)</span>!";
}
if(tag_name.length > 0){
      document.getElementById("welcome").innerHTML = "Welcome " + user_name + "(<span style='color:blue;'>"+tag_name+"</span>)!";
}
if(user_name=="Bhaskar09"){
      document.getElementById("welcome").innerHTML = "Welcome Bhaskar(<span style='color:red;'><b>Owner</b></span>)!";
}
if(user_name=="Namrata01"){
      document.getElementById("welcome").innerHTML = "Welcome Namrata(<span style='color:lime;'><b>Teacher</b></span>)!";
}
function addRoom() {
      Room_name = document.getElementById("room_id").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("Room_name", Room_name);
      window.location = "Message.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room_names =" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("Room_name", name);
      window.location = "Message.html";
}

function logout() {
      localStorage.removeItem("Room_name");
      localStorage.removeItem("userName");
      window.location = "index.html";
}
function open() {
      localStorage.removeItem("Room_name");
  }