$(document).ready(function () {
    $("#newGame").mousedown(function () {
        //Si pulsa en new se crea una nueva sala y se añade el id del usuario
        $.ajax({
            async: true,
            type: "POST",
            dataType: "html",
            data: { UserId: userID },
            contentType: "application/x-www-form-urlencoded",
            url: "https://semana14-bertum.c9users.io/php/createRoom.php",
            success: goToLobby,
            timeout: 3000
        });
    });

    $("#joinGame").mousedown(function () {
        $("#joinGameMenu").show();
    });

    $("#joinGameButton").mousedown(function () {
        //Si pulsa el join cogemos el id room que nos ha pasado y tendremos que comprobarlo contra la BD
        var roomID = $("#roomID").val();
        $.ajax({
            async: true,
            type: "POST",
            dataType: "html",
            data: { UserId: userID, RoomId: roomID },
            contentType: "application/x-www-form-urlencoded",
            url: "https://semana14-bertum.c9users.io/php/joinRoom.php",
            success: goToLobby,
            timeout: 3000
        });
    });

});

function signUp() {
    var user = $("#signUpUser").val();
    var pass = $("#signUpPassword").val();
    $.ajax({
        async: true,
        type: "POST",
        dataType: "html",
        data: { UserName: user, Password: pass },
        contentType: "application/x-www-form-urlencoded",
        url: "https://semana14-bertum.c9users.io/php/register.php",
        success: userLogged,
        timeout: 3000
    });
}

function login() {
    var user = $("#loginUser").val();
    var pass = $("#loginPassword").val();
    $.ajax({
        async: true,
        type: "POST",
        dataType: "html",
        data: { UserName: user, Password: pass },
        contentType: "application/x-www-form-urlencoded",
        url: "https://semana14-bertum.c9users.io/php/login.php",
        success: userLogged,
        timeout: 3000
    });
}

function userLogged(data) {
    console.log(data);
    console.log("Success");
    userID = data;
    //Hide container
    $("container").hide();
    //Change mainMenu display to true
    $("#mainMenu").show();
}

function goToLobby(data) {
    if (data != "KO" || data != "NOROOM") {
        console.log("Moving to lobby");
        //Nos guardamos en local el id del room y el ID de usuario
        window.localStorage.setItem('myRoom', data);
        window.localStorage.setItem('myID', userID);
        //Nos movemos al lobby
        window.location.href = "lobby.html";
    }
    else {
        wrongRoom(data);
    }
}

function wrongRoom(error) {
    switch (error) {
        case "NOROOM":
            console.log("There is no room with that ID");
            break;
        case "KO":
            console.log("This is not your room, you shall not pass!");
            break;
    }
}