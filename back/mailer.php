<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once './config.php';

require './PHPMailer/PHPMailer/src/Exception.php';
require './PHPMailer/PHPMailer/src/PHPMailer.php';
require './PHPMailer/PHPMailer/src/SMTP.php';

function envoi_mail($from_name, $from_email, $subject, $message)
{
    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->isSMTP();
        $mail->SMTPDebug = 0;
        $mail->SMTPSecure = 'tls';
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = SMTP_HOST;
        $mail->Password = SMTP_PASS;
        $mail->Port = 587;

        //Recipients
        $mail->setFrom($from_email, $from_name);
        $mail->addAddress('houangkeo@gmail.com', 'Emeline');

        //Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $message . "\r\nFrom " . $from_email;

        $mail->send();
        return true;
    } catch (Exception $e) {
        echo $e->getMessage();
        return false;
    }
}

if (isset($_POST['nom']) && isset($_POST['email']) && isset($_POST['objet']) && isset($_POST['message'])) {
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $titre = $_POST['objet'];
    $commentaire = $_POST['message'];
    
    if (envoi_mail($nom, $email, $titre, $commentaire)) {
        echo 'OK';
        header('Location: ../confirm.html');
        exit();
    } else {
        echo "Une erreur s'est produite";
    }
} else {
    echo "\n";
    echo "non";
}

?>