function sendPosition() {
    var playerToSend = undefined;
    if (numPlayer == 1) {
        playerToSend = Player;
    }
    else {
        playerToSend = secondPlayer;
    }
    $.ajax({
        async: true,
        type: "POST",
        dataType: "html",
        data: { PlayerId: userID, PosX: playerToSend.x, PosY: playerToSend.y },
        contentType: "application/x-www-form-urlencoded",
        url: "https://semana14-bertum.c9users.io/php/sendPosition.php",
        timeout: 4000,
    });
}

function readPosition() {
    var myRoom = localStorage.getItem('myRoom');
    $.ajax({
        async: true,
        type: "POST",
        dataType: "html",
        data: { PlayerId: userID, RoomId: myRoom },
        contentType: "application/x-www-form-urlencoded",
        url: "https://semana14-bertum.c9users.io/php/readPosition.php",
        success: updateSecondPlayer,
        timeout: 4000,
    });
}

function updateSecondPlayer(data) {
    var newPosition = JSON.parse(data);
    if (newPosition != null && newPosition != undefined) {
        if (numPlayer == 1) {
            secondPlayer.x = newPosition.PosX;
            secondPlayer.y = newPosition.PosY;
        }
        else {
            Player.x = newPosition.PosX;
            Player.y = newPosition.PosY;
        }
    }
}
