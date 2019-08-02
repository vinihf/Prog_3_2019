<?php
require getcwd()."\src\Avaliacao.php";

if (isset($_GET['disciplina']) && $_GET['disciplina'] == "Todas"){
    $avaliacoes = Avaliacao::listaTodos();
}else{
    $avaliacoes = Avaliacao::listaPorDisciplina($_GET['disciplina']);
}

$disciplinas[1] = "Programação";
$disciplinas[2] = "Banco de Dados";
$disciplinas[3] = "Análise";

$tipos[1] = "Trabalho";
$tipos[2] = "Prova";

if ($avaliacoes!=false){
    echo "<table>";
echo "<tr>";
echo "<td>Disciplina</td>";
echo "<td>Data</td>";
echo "<td>Conteúdo</td>";
echo "<td>Tipo</td>";
echo "<td>Peso</td>";
echo "<td>Opções</td>";
echo "</tr>";
foreach($avaliacoes as $av){
    echo "<tr>";
    echo "<td>".$disciplinas[$av->disciplina]."</td>";
    echo "<td>".$av->data."</td>";
    echo "<td>".$av->conteudo."</td>";
    echo "<td>".$tipos[$av->tipo]."</td>";
    echo "<td>".$av->peso."</td>";
    echo "<td> <a href='formEditAvaliacao.php?id=".$av->id."'>Editar </a></td>";
    echo "<td> <a href='processa.php?acao=excluir&id=".$av->id."'>Excluir </a></td>";
    echo "</tr>";
}
echo "</table>";
}else{
    echo "Não há nenhum registro";
}







