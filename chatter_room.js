user_name = localStorage.getItem("userName");
user_name1=user_name.toLowerCase();
tag = localStorage.getItem("tag");
tag1 = tag.toLowerCase();
console.log("user name :-"+user_name);
console.log("tag :-"+tag)
if (tag1 == "owner" && user_name1 =="bhaskar18" ) {
    document.getElementById("welcome").innerHTML = "<u>Welcome " + user_name + "<span id='red'> (" +tag + ") !</u>";
}
else if (user_name1 == "bhaskar18" || user_name1 == "bhaskar krishnan18"){
    document.getElementById("welcome").innerHTML = "<u>Welcome " + user_name + "<span id='red'> (Owner) !</u>";
}
else if(tag1 !== "owner" && tag1 !== ""){
    document.getElementById("welcome").innerHTML = "<u>Welcome " + user_name + "<span id='lime'> ("+tag+") !</u>";
}
else if(tag1 == "owner" && user_name1 !=="bhaskar18" || user_name1 !== "bhaskar krishnan18"){ 
    document.getElementById("welcome").innerHTML = "<u>Welcome " + user_name + " (Member) !</u>";
}
function logout(){
    localStorage.removeItem("tag");
    localStorage.removeItem("userName");
    window.location="index.html";
}
