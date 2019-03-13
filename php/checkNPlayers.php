<?php

    // Se conecta a la base de datos
    $mysqli = new mysqli("localhost", "semana14", "semana14", "game");
    //Seleccionamos la sala en la que está el jugador
    $query = "SELECT COUNT(*) as nPlayers FROM `Room` WHERE RoomId = '".$_GET['Room']."' AND Active=1";
    $result = $mysqli->query($query);
    $row = $result->fetch_assoc();
    $playersInRoom = $row['nPlayers'];
    //SI el numero de columnas devueltas es igual a 2, devolvemos true, para todo lo demás FALSE
    if ($playersInRoom == 2) {
      echo  "OK";
    } else {
      echo  "KO";
    }
    
    $mysqli->close();

?>