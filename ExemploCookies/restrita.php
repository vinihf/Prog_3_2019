<?php
if(!isset($_COOKIE["nome"])){
	header("location: sair.php");
}
?>
<html>
	<head>
		<title>Titulo</title>
	</head>
	<body>
		Olá, <?php echo $_COOKIE["nome"]; ?>.<br><br>
		Algum conteúdo de acesso restrito.<br><br>
		<a href="sair.php">Sair</a>
	</body>
</html>