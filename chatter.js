function login(){
    user_name = document.getElementById("name").value;
    if(user_name==""){
        window.alert("Enter a valid value");
    }
    else{
         
    localStorage.setItem("userName",user_name);
    window.location="chatter_room.html";
    }
}