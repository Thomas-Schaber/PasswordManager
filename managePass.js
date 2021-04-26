var user = document.getElementsByName("user");
var pass = document.getElementsByName("pass");
document.getElementsByName("test").innerHTML = "test"

function printUser(){
    document.getElementsByName("test").innerHTML = "test"
    document.write(user + " " +pass);
}