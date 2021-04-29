var form1 = document.userAndPass;
var service = form1.service;
var user = form1.user;
var pass = form1.pass;
var store = [];
var listTag = document.getElementById("list");
//service:service.value, username:user.value,password:pass.value;


function Credentials(service, username, password) {
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
       store.push(new Credentials(service.value, user.value, pass.value));
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
    if(service.value == ""){
        alert("Enter name of the service to remove in Service box");
    } else if(store.length == 0) {
        alert("Manager is empty");
    } else {
        var found = false;
        for(var x = 0; x < store.length; x++){
            if(store[x].getService() == service.value){
                found = true;
                store.splice(x, 1);
                printList();
               /* //alert("Removed " + service.value);
                if(store.length >= 1 && x == 0){
                    alert(x + "x");
                    alert(store[x].getService);
                    store.splice(0, 1);
                    printList();
                    service.value = "";
                    user.value = "";
                    pass.value = "";
                    

                }  else if(store.length >=1 && x > 0){
                    alert(x + "x");
                    alert(store[x].getService);
                    alert("second");
                    store.splice(x, x+1);
                    printList();
                    service.value = "";
                    user.value = "";
                    pass.value = "";
                } 
                //store = store.slice(x);
                //service.value = "";
            // user.value = "";
                //pass.value = "";
                else {
                    //alert(store.length);
                    alert("Error");
                    }
                    */
            
           
                
           }
        }  //else {
           // if(!found){
            // alert(service.value + " is not in Manager!");
           // }
   }
}

function sortList(){
    store.sort(function(a, b){
        var x =  a.serVal.toLowerCase();
        var y =  b.serVal.toLowerCase();
        if(x < y){return -1;}
        if(x > y){return 1;}
        return 0;
    });
    printList();
}

