<?php
echo "Nome do arquivo:".$_FILES['imagem']['name']."<br>";
echo "Erro:".$_FILES['imagem']['error']."<br>";
echo "Tipo do arquivo:".$_FILES['imagem']['type']."<br>";
echo "Nome temporário do arquivo:".$_FILES['imagem']['tmp_name']."<br>";
echo "Tamanho do arquivo em bytes:".$_FILES['imagem']['size']."<br>";

if(!file_exists($_POST['nome'])){
    mkdir($_POST['nome']);
}

if(move_uploaded_file($_FILES['imagem']['tmp_name'],$_POST['nome']."/".$_FILES['imagem']['name'])){
    echo "SUCESSO";
}else{
    echo "FALHOU";
}

