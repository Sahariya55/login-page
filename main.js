function check(){
    var u = document.getElementById("user").value;
    var p = document.getElementById("pass").value;
    if(u=="abc" && p=="123"){
        document.write("Connecting to Dashboard");
    }
    else{
    document.write("Login Incorrect");
    }
}