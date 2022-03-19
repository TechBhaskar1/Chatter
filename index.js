function login() {
    user_name = document.getElementById("name").value;
    tag_name = document.getElementById("tag").value;
    localStorage.setItem("userName", user_name);
    localStorage.setItem("tagName", tag_name);
    if (user_name.length > 0) {
        window.location = "room_gen.html";
    } else {
        document.getElementById("warn").innerText = "!!Name Required";
    }
}

