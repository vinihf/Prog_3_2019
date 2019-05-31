<?php
if(isset($_POST) && $_POST["botao"] == "Entrar"){
      if($_POST["login"] == "teste" && $_POST["senha"] == "teste123"){
		setcookie("nome","Nome da pessoa",time()+3600);//Sempre definido antes de uma saída do PHP
		header("location: restrita.php");
	  }else{
		header("location: sair.php");
	   }
}else{
	header("location: sair.php");
}
?>