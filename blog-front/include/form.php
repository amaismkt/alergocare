<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$email = $_POST["email"];
$nome = $_POST["fname"];

$mensagem = $_POST["message"];

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

  	// Inicia o phpMailer
	$mail = new PHPMailer;


	$mail->isSMTP();                                     // Set mailer to use SMTP
	$mail->Host = 'smtp.alergocare.com';            // Specify main and backup SMTP servers
	$mail->SMTPSecure = false; // Define se é utilizado SSL/TLS - Mantenha o valor "false"
	$mail->SMTPAutoTLS = false; // Define se, por padrão, será utilizado TLS - Mantenha o valor "false"
	$mail->SMTPAuth = true;                              // Enable SMTP authentication
	$mail->Username = 'contato@alergocare.com';              // SMTP username
	$mail->Password = 'alergocare2019';                           // SMTP Senha
	$mail->Port = 587;                                  // TCP port to connect to

    
	try{

		// Pegar o email do remetente
		$mail->AddReplyTo($_POST["email"]);
		// Email e nome do contato
		$mail->setFrom('$email', '$nome');
		// emmail do destinatario
		$mail->addAddress('contato@alergocare.com', 'AlergoCare');
		// tipo do email
		$mail->Subject = 'Contato pelo site';
		$mail->isHTML(true);
		// corpo da mensagem
		#$body .= "Nome:".$_POST["fname"];
		$body .= "<b>Nome: </b>".$nome;
		$body .= "<br><b>E-mail: </b>".$_POST["email"];
		$body .= "<br />"."<b>Mensagem: </b>".$_POST["message"];
		$mail->Body = $body;
		// Se o send retornar false é porque deu falha ao enviar
		// $mail->send();
		// return ["success" => true, "text" => "Mensagem enviada com sucesso!"];
		if($mail->send()){
			echo "<script>window.location='../contact.html'; alert('$nome, sua mensagem foi enviada com sucesso! Estaremos retornando em breve');
			</script>";
		}


	}
	catch(Exception $e) {
      echo 'A mensagem não pôde ser enviada.';
      echo 'Erro do remetente: ' . $mail->ErrorInfo;
	 }
  
     
?>

