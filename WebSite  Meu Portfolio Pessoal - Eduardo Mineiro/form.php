<?php

// recebe as Variaveis
$nome     = $_POST["nome"];
$email    = $_POST["email"];
$assunto    = $_POST["assunto"];
$mensagem = $_POST["mensagem"];

require ('PHPMailer/PHPMailerAutoload.php');

// Inicia a classe PHPMailer
$mail = new PHPMailer();
$mail-> CharSet = 'UTF-8';

// Define os dados do servidor e tipo de conexão
$mail->IsSMTP();
$mail->Host     = "smtp.umbler.com";     // Endereço do servidor SMTP
$mail->SMTPAuth = true;                   // Usa autenticação SMTP? (opcional)
$mail->Username = 'meuemail@email.com.br';  // Usuário do servidor SMTP       
$mail->Password = '*******';               // Senha do servidor SMTP

// Define o remetente.
$mail->From     = "meuemail@email.com.br"; // Seu e-mail
$mail->FromName = "Administrador";       // Seu nome

// Define os destinatário(s)
$mail->AddAddress($email, $nome);
$mail->AddCC('meuemail@email.com.br', 'eu'); // Copia
//$mail->AddBCC('fulano@dominio.com.br', 'Fulano da Silva'); // Cópia Oculta

// Define os dados técnicos da Mensagem
$mail->IsHTML(true); // Define que o e-mail será enviado como HTML

// Define a mensagem (Texto e Assunto)
$mail->Subject = $assunto; // Assunto da mensagem
$mail->Body    = $mensagem;

// Envia o e-mail
$enviado = $mail->Send();

// Exibe uma mensagem de resultado
if(strcasecmp('formulario-ajax', $_POST['metodo']) == 0){
		$html .= "Email enviado com sucesso!.";
		
		echo $html;
	}
	

?>