<?php

//Senha informada pelo usuário
$senha = "admin123";

//Transforma a senha informada pelo usuário em uma senha criptografada
$senha_hash = password_hash($senha,PASSWORD_DEFAULT);

//Verifica se a senha e a senha criptografada são iguais
echo password_verify($senha,$senha_hash);