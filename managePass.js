var form1 = document.userAndPass;
var service = form1.service;
var user = form1.user;
var pass = form1.pass;
var store = [];
var listTag = document.getElementById("list");
//service:service.value, username:user.value,password:pass.value;
function Credientials(service, username, password) {
    this.serVal= service;
    this.userVal = username;
    this.passVal = password;
    this.getService = function() {
        return this.serVal;
    };
    this.getUser = function() {
        return this.userVal;
    };
    this.getPass = function() {
        return this.passVal;
    };
}

function printList(){
   var passStr = ""
    for(var x = 0; x < store.length; x++){
        passStr += "<Strong>Service: "+ store[x].getService() + "</Strong><br>";
        passStr += "Username: " + store[x].getUser() + "<br>";
        passStr += "Password: " + store[x].getPass() + "<br>";
        passStr += "<br><br>";
   }
   listTag.innerHTML = passStr; 
}

function addToList(){
    /*if(service.value != "" && user.value != "" && pass.value !=""){
        store.push("<Strong>Login for: " + service.value + "</Strong><br>Username: "+ user.value + "<br>Password: "  + pass.value);
        service.value = "";
        user.value = "";
        pass.value = "";
        printList();
    } 
    */
   if(service.value != "" && user.value != "" && pass.value !=""){
       store.push(new Credientials(service.value, user.value, pass.value));
       service.value = "";
       user.value = "";
       pass.value = "";
       printList();

       
   }
    else {
        alert("No box can be blank");
    }

}

function remove() {
    for(var x = 0; x < store.length; x++){
        
        if(store[x].getService() == service.value){
            //alert("Removed " + service.value);
            if(store.length >= 1 && x == 0){
                store.splice(0, 1);
                printList();
            } else if(store.length >=1 && x > 0){
                store.splice(x, x+1);
                printList();
            } else if(x == store.length){
                store.splice(-1, x - 1);
                printList();
            }
            //store = store.slice(x);
            //service.value = "";
           // user.value = "";
            //pass.value = "";
            else {
                //alert(store.length);
                alert("error");
                }
            
        }
   }
}

