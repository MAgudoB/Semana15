function sendPosition() {
    $.ajax({
        async: true,
        type: "POST",
        dataType: "html",
        data: { PlayerId: userID, PosX: Player.x, PosY: Player.y },
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

function updateSecondPlayer(data){
    var newPosition = JSON.parse(data);
    if(newPosition != null && newPosition!= undefined){
        secondPlayer.x = newPosition.PosX;
        secondPlayer.y = newPosition.PosY;
    }
}