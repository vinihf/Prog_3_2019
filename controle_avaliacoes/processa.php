<?php
require getcwd()."\src\Avaliacao.php";

if (isset($_POST['acao'])){
    if ($_POST['acao'] == 'inserir'){
        $p1 = new Avaliacao(null,$_POST['data'],$_POST['disciplina'],$_POST['conteudo'],$_POST['tipo'],$_POST['peso']);
        $p1->inserir();    
    }else if ($_POST['acao'] == 'editar'){
        $p1 = new Avaliacao($_POST['id'],$_POST['data'],$_POST['disciplina'],$_POST['conteudo'],$_POST['tipo'],$_POST['peso']);
        $p1->editar();    
    }
    header("location: lstAvaliacoes.php?disciplina=Todas");
}else if (isset($_GET['acao']) && $_GET['acao']=="excluir"){
    Avaliacao::excluir($_GET['id']);   
    header("location: lstAvaliacoes.php?disciplina=Todas");
}else{
    header("location: index.php");
}

?>