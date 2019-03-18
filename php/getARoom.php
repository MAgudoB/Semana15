<?php
    $mysqli = new mysqli("localhost", "semana14", "semana14", "game");
    $query = "SELECT MAX(roomId) AS roomId FROM `Room`";
    //Room tiene Id, playerId, position, characterId 
    $result = $mysqli->query($query);
    $row = $result->fetch_assoc();
    $charQuery = "SELECT * FROM `Character`";
    $resultCharQuery = $mysqli->query($charQuery);
    $charId = rand(1,$resultCharQuery->num_rows);
    //Si ya hay Salas
    if ($row['roomId'] != "") {
        //Miramos si la ultima sala ya tiene el total de jugadores
        $query2 = "SELECT COUNT(*) as nPlayers FROM `Room` WHERE roomId = '".$row['roomId']."'";
        $result2 = $mysqli->query($query2);
        $row2 = $result2->fetch_assoc();
        //Si ya tiene el maximo de jugadores, creamos una nueva
        if($row2['nPlayers'] == 2){
            $nextRoom = $row['roomId']+1;
            $query = "INSERT INTO `Room` (roomId, playerId, position, characterId) VALUES ('".$nextRoom."','".$_GET['UserId']."',1,'".$charId."')";
            $result = $mysqli->query($query);
            echo $nextRoom;
        }
        //Si no, tendremos que agregarlo a esa
        else {
            $newPosition = $row2['nPlayers']+1;
            $query = "INSERT INTO `Room` (roomId, playerId, position, characterId) VALUES ('".$row['roomId']."','".$_GET['UserId']."','".$newPosition."','".$charId."')";
            $result = $mysqli->query($query);
            echo $row['roomId'];
        }
    }
    //Si es la primera sala, la creamos
    else{
        $query = "INSERT INTO `Room` (roomId, playerId, position, characterId) VALUES (1,'".$_GET['UserId']."',1,'".$charId."')";
        $result = $mysqli->query($query);
        echo "1";
    }
    $mysqli->close();
?>