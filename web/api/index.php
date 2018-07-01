<?php
header('Access-Control-Allow-Origin: *'); 
header('Content-Type: application/json');
include 'inc/db.php';
$key = $_POST['key'];
if(isset($key) && !empty($key)){
	$api = $db->query("SELECT `key` FROM api WHERE `key` = '$key'");
	$count = $api->rowCount();
	if($count > 0){
		$type = $_POST['type'];
		if($type == 'mail'){
			$action = $_POST['action'];
			$result =  array('sucsess' => false);
			if($action == 'set'){
				$login = $_POST['login'];
				$password = $_POST['password'];
				if (isset($login) && !empty($login) && isset($password) && !empty($password)){
					$insert = $db->query("INSERT INTO mails (login, password) VALUES ('$login', '$password')");
					$result =  array('sucsess' => true);
				}
			}
		}
	}else{
		$result =  array('sucsess' => false);
	}
}else{
	$result =  array('sucsess' => false);
}
echo json_encode($result);
?>
