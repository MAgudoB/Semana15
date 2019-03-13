<?php
    $mysqli = new mysqli("localhost", "semana14", "semana14", "game");
    $name = $_POST['UserName'];
    $pass = $_POST['Password'];
    if($name != "" && $pass != ""){
        $query = "INSERT INTO `Users` (Name,Password) VALUES ('".$name."','".$pass."')";
        $result = $mysqli->query($query);
        if ($result === TRUE) {
            $last_id = $mysqli->insert_id;
            echo $last_id;
        } else {
            echo "KO";
        }
    }
    $mysqli->close();
?>