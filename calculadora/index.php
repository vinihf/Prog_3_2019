<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Calculadora - PHP OO</title>
</head>
<body>
    <form method='post' action='processa.php'>
        <label>Valor 1:</label>
        <input type='number' name='v1' required>
        <select name='operacao'>
            <option value='soma'>+</option>
            <option value='subtracao'>-</option>
            <option value='divisao'>/</option>
            <option value='multiplicacao'>*</option>
        </select>
        <label>Valor 2:</label>
        <input type='number' name='v2' required>
        <button name='botao' value='executa'>Executa</button>
    </form>
</body>
</html>