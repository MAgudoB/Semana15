<?php
    $mysqli = new mysqli("localhost", "semana10", "semana10", "game");
    
    $user = $_POST['IdUser'];
    $room = $_POST['IdRoom'];
    
    //Delete chat information related with the player and the room
    $queryDeleteChat = "DELETE FROM Chat WHERE IdRoom = '".$room."' AND IdUser = '".$user."' ";
    $result = $mysqli->query($queryDeleteChat);
    
    //Delete turn information related with the player and the room
    $queryDeleteTurn = "DELETE FROM Turn WHERE roomId = '".$room."' AND playerId = '".$user."'";
    $result = $mysqli->query($queryDeleteTurn);
    
    //Delete room information related with the player and the room
    $queryDeleteRoom = "DELETE FROM Room WHERE roomId = '".$room."' AND playerId = '".$user."'";
    $result = $mysqli->query($queryDeleteRoom);
    
    $mysqli->close();
?>