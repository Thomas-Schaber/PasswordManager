var form1 = document.userAndPass;
var service = form1.service;
var user = form1.user;
var pass = form1.pass;
var store = [];
var listTag = document.getElementById("list");


function printList(){
   var passStr = ""
    for(var x = 0; x < store.length; x++){
        passStr += store[x];
        passStr += "<br><br>"
   }
   listTag.innerHTML = passStr 
}

function addToList(){
    store.push("<Strong>Login for: " + pass.value + "</Strong><br>Username: "+ user.value + "<br>Password: "  + pass.value);
    service.value = "";
    user.value = "";
    pass.value = "";
    printList();
}

