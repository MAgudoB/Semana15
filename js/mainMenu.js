function signUp() {
    var user = $("#signUpUser").val();
    var password = $("#signUpPassword").val();
    $.ajax({
        async: true,
        type: "POST",
        dataType: "html",
        data: { UserName: user, Password: password },
        contentType: "application/x-www-form-urlencoded",
        url: "https://semana14-bertum.c9users.io/php/signUp.php",
        success: signUpSuccess,
        timeout: 3000
    });
}

function login() {
    var user = $("#loginUser").val();
    var password = $("#loginPassword").val();
    $.ajax({
        async: true,
        type: "POST",
        dataType: "html",
        data: { UserName: user, Password: password },
        contentType: "application/x-www-form-urlencoded",
        url: "https://semana14-bertum.c9users.io/php/login.php",
        success: loginSuccess,
        timeout: 3000
    });
}

function signUpSuccess(data) {
    console.log(data);
    console.log("Sign up success");
}

function loginSuccess(data) {
    console.log(data);
    console.log("Login success");
}