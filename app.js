
const users = [];
const passwords =[];
function signup(){
    document.getElementById("demo").innerHTML="Registered Succesfully"
    var name = document.getElementById('uname').value
    var ps = document.getElementById('pword').value
    users.push(name)
    localStorage.setItem('users', JSON.stringify(users));
    passwords.push(ps)
    localStorage.setItem('passwords', JSON.stringify(passwords));

    // let uname= document.getElementById("uname").value
    // let pword = document.getElementById("pword").value  

    // localStorage.setItem("username",JSON.stringify(uname))
    // localStorage.setItem("password",JSON.stringify(pword))
}

function checkpw(){
if (document.getElementById("pword").value != document.getElementById("cword").value){
    alert("Passwords dont match")
} else{
     signup()
}
}



function login(){
    var name = document.getElementById('logname').value
    var ps = document.getElementById('logpword').value
    const values = JSON.parse(localStorage.getItem('users'));
    const psws = JSON.parse(localStorage.getItem('passwords'));
    for (var i = 0; i < values.length; i++) {
        if (values.indexOf(name) === psws.indexOf(ps)) {
            window.location.href = "./dashboard.html"
            break
        } else{
            alert("wrong password")
            break
        }

    }
}

    
    
    
    
    
    
    
    
    // let logname = document.getElementById("logname").value
    // let logpword = document.getElementById("logpword").value
    // if (logname== JSON.parse(localStorage.getItem("username")) && logpword!=JSON.parse(localStorage.getItem("password"))){
    //     alert("Wrong password")
    // } else if (logname!=localStorage.getItem("username") && logpword==localStorage.getItem("password"))
    //     alert("Wrong username")
    //  else{
    //     window.location.href = "./dashboard.html"
    // }
    


function logout(){
    window.location.href = "./login.html"
}


