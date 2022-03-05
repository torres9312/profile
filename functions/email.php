<?php


$name = $_POST['name'];
$company = utf8_decode ( $_POST['company']);
$email = $_POST['email'];
$location = utf8_decode ( $_POST['location']);
$message = utf8_decode ( $_POST['message']); 


$response = array("message" => $message);

echo json_encode($response);