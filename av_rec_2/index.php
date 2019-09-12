<?php
require_once dirname(__DIR__) . '\av_rec_2\vendor\autoload.php';

use Classes\Atividade;
use Classes\BD\MySQL;

$atividade = new Atividade();
$conexao = new MySQL();

?>