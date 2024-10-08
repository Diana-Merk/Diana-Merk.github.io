<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//От кого письмо
$mail->setFrom('example@git.com', 'Сайт КОНТЭО Вакансия водителя');
//Кому отправить
$mail->addAdress('merkuhadi@yandex.ru');
//Тема письма
$mail->Subject = 'Письмо из формы на сайте КОНТЭО Вакансия водителя';

//тело письма
$body = '<h1>Письмо из формы на сайте КОНТЭО Вакансия водителя</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['phone']))){
    $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
}

$mail->Body = $body;


//Отправка
if(!mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>