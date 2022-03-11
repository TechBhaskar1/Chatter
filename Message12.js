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
var room_name = localStorage.getItem("Room_name");
var tag_name = localStorage.getItem("tagName");
console.log(room_name)
if (tag_name.length == 0) {
      tag_data="<span style='color:grey;'>(Member)</span>"
}
if(tag_name.length > 0){
      tag_data="(<span style='color:blue;'>"+tag_name+"</span>)"
}
if(user_name=="Bhaskar09"){
      tag_data="(<span style='color:red;'><b>Owner</b></span>)";
      user_name="Bhaskar"
}
if(user_name=="Namrata01"){
      tag_data="(<span style='color:lime;'><b>Teacher</b></span>)";
      user_name="Namrata"
}

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            tag:tag_data,
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}


function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function (childSnapshot) {childKey = childSnapshot.key;childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        tag = message_data['tag']
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];

                        sdiv="<div id='message_div'>" 

                        name_with_tag = "<h4 id='messsage_name'>" + tag + name + "<img src='tick.png' class='user_tick'></h4>";
                        hr="<hr>"
                        messgae_with_tag = "<h4 class='messsage_h4'>" + message + "</h4>";

                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLikes(this.id)'>";

                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Likes : " + like + "</span></button>";

                        ediv="</div>"
                        row = sdiv + name_with_tag + hr + messgae_with_tag + like_button + span_with_tag + ediv + hr;

                        document.getElementById("output").innerHTML += row;

                        //End code
                  }
            });
      });
}

getData();
function open(){
      document.getElementById("room_id").innerHTML="room id :" +room_name;
}
function updateLikes(message_id) {
      console.log("clicked like button : " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;

      updated_likes = Number(like) + 1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}
function logout() {
      localStorage.removeItem("Room_name");
      localStorage.removeItem("userName");
      window.location = "index.html";
}
