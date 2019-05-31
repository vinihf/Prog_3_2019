<?php
session_start();
if (!isset($_SESSION['usuario'])){
    header("location: index.html");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Restrita</title>
</head>
<body>
    <h1>Página acessada</h1>
    <?php
        echo "Usuario:".$_SESSION['usuario']."<br>";
        echo "Senha:".$_SESSION['senha'];
    ?>
    <a href='sair.php'>SAIR</a>
</body>
</html>







