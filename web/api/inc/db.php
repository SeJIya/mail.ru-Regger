<?php 
include 'config.php';
try {
	$db = new PDO('mysql:host='.HOST.';dbname='.DBNAME.';charset=utf8',LOGIN,PASS);
} catch (PDOException $e) {
   	echo 'error';
}
?>
