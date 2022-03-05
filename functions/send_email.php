<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'mailer/Exception.php';
require 'mailer/PHPMailer.php';
require 'mailer/SMTP.php';


$name = $_POST['name'];
$company = utf8_decode ( $_POST['company']);
$email = $_POST['email'];
$location = utf8_decode ( $_POST['location']);
$message = utf8_decode ( $_POST['message']); 


/* $response = array("message" => $message);

echo json_encode($response); */


// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer;


try {

    $mail->SMTPOptions = array(
        'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
        )
    );
    
    $mail->IsSMTP();                   // Enable verbose debug output                                         // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'torreswebinfo@gmail.com';                     // SMTP username
    $mail->Password   = 'T@rr3s931012';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    
    $mail->setFrom($email, $name);
    $mail->addAddress('towhers@gmail.com', 'Contacto');     // Add a recipient
   
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Mensaje de '.$name;
    $mail->Body    = '<p style="font-size:18px"> <strong>Pais: </strong> '.$location.'<br><br><strong>Empresa: </strong> '.$company.'<br><br><strong>Mensaje: </strong><br>'.$message.'</p>';
  
    $mail->send();

    
     $response = array("message" => "Mensaje enviado con exito."); 
     echo json_encode($response);



} catch (Exception $e) {
    $response = array("message" => "El mensaje no pudo ser enviado. Error: {$mail->ErrorInfo}");
    echo json_encode($response);
    
  
}






?>
