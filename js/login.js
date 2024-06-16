document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log("I am clicked mama");
    const emailId = document.getElementById('email-id');
    const email = emailId.value;
    console.log(email);
    const passwordId = document.getElementById('password-id');
    const password = passwordId.value;
    console.log(password);
    if(email === "tamim@live.com" && password==="mama"){
        // console.log("valid user");
        window.location.href = "bank.html"
    }
    else{
        // console.log("invalid user");
        alert("The user is invalid!!!")

    }
})