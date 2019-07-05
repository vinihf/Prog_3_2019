<?php
require getcwd()."\src\Avaliacao.php";

$avaliacoes = Avaliacao::listaTodos();
foreach($avaliacoes as $av){
    print_r($av);
    echo $av->id;
    echo "---";
    echo "<br>";
}
