<?php
    $mysqli = new mysqli("localhost", "semana14", "semana14", "game");
	//Comprobar si existe la sala
    $query = "SELECT RoomId FROM `Rooms` WHERE RoomId = '".$_POST['RoomId']."'";
    //Room tiene Id, RoomId, UserId	
    $result = $mysqli->query($query);
    $row = $result->fetch_assoc();
    //Si la sala existe
	if ($result->num_rows > 0) {
		//Ahora hay que comprobar si ya tiene los dos usuarios
		$query2 = "SELECT COUNT(*) as nPlayers FROM `Rooms` WHERE roomId = '".$_POST['RoomId']."'";
		$result2 = $mysqli->query($query2);
		$row = $result->fetch_assoc();
		$playersInRoom = $row['nPlayers'];
		//Si estan los dos, comprobar si eres uno de los dos
		if ($playersInRoom == 2) {
			$queryFullRoom = "SELECT RoomId FROM `Rooms` WHERE RoomId = '".$_POST['RoomId']."' AND UserId = '".$_POST['UserId']."'";
			$resultFullRoom = $mysqli->query($queryFullRoom);
			//Si eres puedes jugar
			if ($result->num_rows > 0) {
				$queryUpdateActive = "UPDATE `Rooms` SET Active=1 WHERE RoomId = '".$_POST['RoomId']."' AND UserId = '".$_POST['UserId']."'";
				$resultUpdateActive = $mysqli->query($queryUpdateActive);
				echo $_GET['RoomId'];
			}
			//Si no eres ninguno, error.
			else {
				echo  "KO";
			}
		}
		//Si no está llena se te añade.
		else {
			$queryInsert = "INSERT INTO `Rooms` (RoomId, UserId,Active) VALUES ('".$_POST['RoomId']."','".$_POST['UserID']."',1)";
			$result = $mysqli->query($queryInsert);
			echo $_GET['RoomId'];
		}
	}
	//Si no devolvemos error
    else{
        echo "NOROOM";
    }
    $mysqli->close();
?>