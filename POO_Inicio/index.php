<?php
require "src/Pessoa.php";

$voce = new Pessoa("Um nome",20);

echo $voce->fazAniversario();

echo "<h1>Nome:</h1>".$voce->getNome();
echo "<h1>Idade:</h1>".$voce->getIdade();