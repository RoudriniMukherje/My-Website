
function sendEmail() {

//var name = document.getElementById("name").value
//var email = document.getElementById("email").value
var message = document.getElementById("message").value




    Email.send({
        Host : "smtp.gmail.com",
        Username : "roudrini12@gmail.com",
        Password : "merit1234@",
        To : 'roudrini12@gmail.com',
        From: "user@gmail.com",
        Subject: "Message Fron User",
        Body: message
    }).then(
      message => alert("ok")
    );
    
}

