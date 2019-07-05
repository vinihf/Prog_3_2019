<?php
require getcwd()."\src\Avaliacao.php";

if (isset($_POST['data'])){
    $p1 = new Avaliacao(null,$_POST['data'],$_POST['disciplina'],$_POST['conteudo'],$_POST['tipo'],$_POST['peso']);
    $p1->inserir();
    header("location: lstAvaliacoes.php");
}else{
    header("ocation: index.php");
}

?>