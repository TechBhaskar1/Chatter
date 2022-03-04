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

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
      });
      document.getElementById("msg").value = "";
      document.getElementById("output").innerHTML += names + ":" + message;
}

window.onload = function () {
      document.getElementById("room_id").innerHTML = "Room id :" + room_name
};

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);

                        names = message_data['name'];
                        message = message_data['message'];


                        document.getElementById("output").innerHTML += names + ":" + message;

                        // name_with_tag = "<h4>" + name + "<img src='tick.png' class='user_tick'></h4>";

                        // messgae_with_tag = "<h4 class='messsage_h4'>" + message + "</h4>";

                        // like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLikes(this.id)'>";

                        // span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Likes : " + like + "</span></button><hr>";

                        // row = name_with_tag + messgae_with_tag + like_button + span_with_tag;

                        // document.getElementById("output").innerHTML += row;

                        //End code
                  }
            });
      });
}

getData();

function logout() {
      localStorage.removeItem("Room_name");
      localStorage.removeItem("userName");
      window.location = "index.html";
}