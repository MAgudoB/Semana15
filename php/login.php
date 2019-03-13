<?php
    $mysqli = new mysqli("localhost", "semana14", "semana14", "game");
    $query = "SELECT * FROM `Users` WHERE Name= '".$_POST['UserName']."' AND Password = '".$_POST['Password']."'";
    $result = $mysqli->query($query);
    if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      echo  $row['Id'];
    } else {
      echo  "KO";
    }
    $mysqli->close();
?>