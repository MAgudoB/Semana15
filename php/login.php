<?php
    $mysqli = new mysqli("localhost", "semana14", "semana14", "game");
    $password = hash("md5",$_POST['Password'],true);
    $query = "SELECT * FROM `Users` WHERE Name= '".$_POST['UserName']."' AND Password = '".$password."'";
    $result = $mysqli->query($query);
    if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      echo  $row['Id'];
    } else {
      echo  "KO";
    }
    $mysqli->close();
?>