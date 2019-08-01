<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pesquisa Avaliação</title>
</head>
<body>
    <form method='get' action='lstAvaliacoes.php'>
        Disciplina: <select name='disciplina'>
                        <option value='1'>Programação</option>
                        <option value='2'>Banco de dados</option>
                        <option value='3'>Análise de Sistemas</option>
                    </select> 
        <button name = 'acao' value='pesquisar' type='submit'>Pesquisar</button>
    </form>
</body>
</html>