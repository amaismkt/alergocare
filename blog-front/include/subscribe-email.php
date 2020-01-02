<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$toemails = array();

$toemails[] = array(
				'email' => 'contato@alergocare.com', // Your Email Address
				'name' => 'AlergoCare' // Your Name
			);

// Form Processing Messages
$message_success = ' Recebemos <strong>com sucesso</strong> sua mensagem e entraremos em contato com você o mais breve possivel.';

$mail = new PHPMailer();

// If you intend you use SMTP, add your SMTP Code after this Line


if( isset( $_POST['widget-subscribe-form-email'] ) ) {
	if( $_POST['widget-subscribe-form-email'] != '' ) {

		$email = $_POST['widget-subscribe-form-email'];

		$subject = 'Subscribe me to the List';

		$mail->SetFrom( $email , 'New Subscriber' );
		$mail->AddReplyTo( $email );
		foreach( $toemails as $toemail ) {
			$mail->AddAddress( $toemail['email'] , $toemail['name'] );
		}
		$mail->Subject = $subject;

		$email = isset($email) ? "Email: $email<br><br>" : '';

		$referrer = $_SERVER['HTTP_REFERER'] ? '<br><br><br>Este formulario foi enviado de: ' . $_SERVER['HTTP_REFERER'] : '';

		$body = "$email $referrer";

		$mail->MsgHTML( $body );
		$sendEmail = $mail->Send();

		if( $sendEmail == true ):
			echo '{ "alert": "success", "message": "' . $message_success . '" }';
		else:
			echo '{ "alert": "error", "message": "Email <strong>nao pode</strong> ser enviado<br /><br /><strong>razao</strong><br />' . $mail->ErrorInfo . '" }';
		endif;
	} else {
		echo '{ "alert": "error", "message": "Por favor <strong>Preencha</strong> todos os campos e tente novamente." }';
	}
} else {
	echo '{ "alert": "error", "message": "Ocorreu um <strong>erro inesperado</strong>. Por favor, tente novamente mais tarde." }';
}

?>