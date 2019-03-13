<?php
    $mysqli = new mysqli("localhost", "semana14", "semana14", "game");
    $query = "SELECT MAX(RoomId) AS RoomId FROM `Room`";
    //Room tiene Id, RoomId, UserId	
    $result = $mysqli->query($query);
    $row = $result->fetch_assoc();
    //Si ya hay Salas
    if ($row['roomId'] != "") {
		//Si no es la primera sala, vamos añadiendo numeros
		$nextRoom = $row['roomId']+1;
		$query = "INSERT INTO `Room` (RoomId, UserId,Active) VALUES ('".$nextRoom."','".$_GET['UserId']."',1)";
		$result = $mysqli->query($query);
		echo $nextRoom;
    }
    //Si es la primera sala, la creamos
    else{
        $query = "INSERT INTO `Room` (RoomId, UserId) VALUES (1,'".$_GET['UserId']."',1)";
        $result = $mysqli->query($query);
        echo "1";
    }
    $mysqli->close();
?>