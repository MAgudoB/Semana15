<?php
    include_once "Class/Position.php";
    $mysqli = new mysqli("localhost", "semana14", "semana14", "game");

    $playerId = $_POST['PlayerId'];
    $roomId = $_POST['RoomId'];

    $query = "SELECT PosX,PosY FROM Users WHERE Id IN (SELECT UserId FROM Rooms WHERE UserId <> '".$playerId."' AND RoomId = '".$roomId."')";
    $result = $mysqli->query($query);

    $position = new Position();
    while ($row = $result->fetch_assoc()) {
        $position->PosX = $row['PosX'];
        $position->PosY = $row['PosY'];
    }

    $mysqli->close();
    echo json_encode($position);
?>