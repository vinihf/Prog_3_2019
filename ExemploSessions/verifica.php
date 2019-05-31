<?php
if(isset($_POST) && $_POST["botao"] == "Entrar"){
      if($_POST["login"] == "teste" && $_POST["senha"] == "teste123"){
		session_start();
		$_SESSION["nome"] = "Nome da pessoa";
		header("location: restrita.php");
	  }else{
		header("location: sair.php");
	   }
}else{
	header("location: sair.php");
}
?>