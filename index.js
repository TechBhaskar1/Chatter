function login(){
    user_name=document.getElementById("name").value;
    localStorage.setItem("userName",user_name);
    window.location="room_gen.html";
}