<?php
header("Access-Control-Allow-Origin : *");
header("Access-Control-Allow-Methods : *");
 
include "db.php";
$objDB= new Connection;
$conn=$objDB->connect();

var_dump($conn);
?>