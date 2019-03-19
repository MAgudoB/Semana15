<?php
    $mysqli = new mysqli("localhost", "semana14", "semana14", "game");
    
    $playerId = $_POST['PlayerId'];
    $posx = $_POST['PosX'];
    $posy = $_POST['PosY'];
    
    $query = "UPDATE `Users` SET PosX = '".$posx."', PosY = '".$posy."' WHERE Id = '".$playerId."'";
    $result = $mysqli->query($query);
    
    $mysqli->close();
?>