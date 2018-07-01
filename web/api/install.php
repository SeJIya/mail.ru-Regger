<?php
include 'inc/db.php';

$key = '1337'

$db->query("CREATE TABLE `api` (`key` TINYTEXT NULL) COLLATE='utf8_general_ci' ENGINE=InnoDB");
$db->query("CREATE TABLE `mails` (`login` TINYTEXT NULL, `password` TINYTEXT NULL) COLLATE='utf8_general_ci' ENGINE=InnoDB");
$db->query("INSERT INTO `api` (`key`) VALUES ('$key')");
?>
