function login() {
    user_name = document.getElementById("name").value;
    tag = document.getElementById("Tag").value;
    user_name1 = user_name.toLowerCase();
    tag1 = tag.toLowerCase();
    if (user_name == "") {
        window.alert("Enter a valid value");
    } else {
        localStorage.setItem("userName", user_name);
        window.location = "chatter_room.html";
        localStorage.setItem("tag", tag);
    }
}