$(document).ready(function () {
    myRoom = localStorage.getItem('myRoom');
    lobbyTimer = setTimeout("checkNPlayers()", 100);
});


function checkNPlayers() {
    clearTimeout(lobbyTimer);

    $.ajax({
        async: true,
        type: "GET",
        dataType: "html",
        data: { Room: myRoom },
        contentType: "application/x-www-form-urlencoded",
        url: "https://semana14-bertum.c9users.io/php/checkNPlayers.php",
        success: playersInLobby,
        timeout: 4000,
        error: checkPlayersFail
    });
}

//función para comprobar si el servidor nos dice que ya podemos jugar o no
function playersInLobby(data) {
    console.log(data);
    if (data == "OK") {
        console.log("Pos entro en el if");
        window.location.href = "game.html"
    }
    else {
        lobbyTimer = setTimeout("checkNPlayers()", 100);
    }

}

function checkPlayersFail() {
    console.log("Algo sa roto, por ir como una moto");
}