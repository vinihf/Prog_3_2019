<?php
require 'src/Calculadora.php';

$calculo = new Calculadora($_POST['v1'],$_POST['v2']);

if ($_POST['operacao']=='soma'){
    echo $calculo->soma();
}else if ($_POST['operacao'] == 'subtrai'){
    echo $calculo->subtracao();
}else if ($_POST['operacao'] == 'divide'){
    echo $calculo->divide();
}else{
    echo $calculo->multiplica();
}
