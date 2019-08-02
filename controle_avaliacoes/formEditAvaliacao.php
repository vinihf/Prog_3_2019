<?php
    require getcwd()."\src\Avaliacao.php";
    $av = new Avaliacao($_GET['id']);
    $av->listaUm();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Inserir Avaliação</title>
</head>
<body>
    <form method='post' action='processa.php'>
    <?php
        echo "<input type='hidden' name='id' value=".$av->id.">";
        echo "Data: <input type='date' name='data' value=".$av->data."><br>";
    ?>
        Disciplina: <select name='disciplina'>
                        <?php
                            if ($av->disciplina == 1){
                                echo   "<option value='1' selected>Programação</option>";
                            }else{
                                echo   "<option value='1'>Programação</option>";
                            }
                            
                            if ($av->disciplina == 2){
                                echo   "<option value='2' selected>Banco de dados</option>";
                            }else{
                                echo   "<option value='2'>Banco de dados</option>";
                            }
                            
                            if ($av->disciplina == 3){
                                echo   "<option value='3' selected>Análise de Sistemas</option>";
                            }else{
                                echo   "<option value='3'>Análise de Sistemas</option>";
                            }

                            
                        ?>
        
                </select> 
    <?php
        echo "Conteúdo: <input type='text' name='conteudo' value=".$av->conteudo."><br>";
    ?>
        Tipo: <select name='tipo'>
            <?php
                if($av->tipo ==1){
                    echo "<option value='1' selected>Trabalho</option>";
                }else{
                    echo "<option value='1'>Trabalho</option>";
                }
                if($av->tipo ==2){
                    echo "<option value='2' selected>Prova</option>";
                }else{
                    echo "<option value='2'>Prova</option>";
                }
                
            ?>
            </select> 
    <?php
        echo "Peso: <input type='number' name='peso' value=".$av->peso."><br>";
    ?>
        <button name = 'acao' value='editar' type='submit'>Editar</button>
    </form>
</body>
</html>