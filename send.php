<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Файли phpmailer
require './phpmailer/PHPMailer.php';
require './phpmailer/SMTP.php';
require './phpmailer/Exception.php';

# перевірка, що помилки немає
if (!error_get_last()) {

    // Змінні, які надсилає користувач
    $itemTotal = $_POST['itemTotal'] ;
    $itemDiscount = $_POST['itemDiscount'];
    $taxes = $_POST['taxes'];
    $total = $_POST['total'];
    
    
    // Формування самого листа
    $title = "Bill Details";
    $body = "
    <h2> Order </h2>
    <b>Item Total:</b> $itemTotal<br>
    <b>Discount:</b> $itemDiscount<br>
    <b>Taxes and Charges:</b> $taxes<br>
    <b>To Pay:</b> $total<br>
    ";
    
    // Налаштування PHPMailer
    // $mail = new PHPMailer\PHPMailer\PHPMailer();   або  (Була помилка 500, але змінив рядок створення екземпляра класу на)
       $mail = new PHPMailer(true);
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['data']['debug'][] = $str;};
    
    // Налаштування вашої пошти


    $mail->Host       = 'smtp.ukr.net'; // SMTP сервера вашої пошти (для imap  не перевіряв )
    $mail->Username   = 'projectTest8888@ukr.net'; // Логін на пошті
    $mail->Password   = 'ZwSg9grd@ssrkzz'; // Пароль для додатків
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465; //(для imap  993 )
    $mail->setFrom('projectTest8888@ukr.net', 'Pizza'); // Адреса пошти та ім'я відправника
    
    // Отримувач листа
    $mail->addAddress('sollar2000@gmail.com');  
    // $mail->addAddress('2222222t@ukr.net'); // Ще один, якщо потрібний
    
    // Відправка повідомлення
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    
    
    // Перевіряємо відправленість повідомлення
    if ($mail->send()) {
        $data['result'] = "success";
        $data['info'] = "Message sent successfully!";
    } else {
        $data['result'] = "error";
        $data['info'] = "The message was not sent. Error sending mail";
        $data['desc'] = "Cause of error: {$mail->ErrorInfo}";
    }
    
} else {
    $data['result'] = "error";
    $data['info'] = "There is an error in the code";
    $data['desc'] = error_get_last();
}

// Надсилання результату
header('Content-Type: application/json');
echo json_encode($data);

?>