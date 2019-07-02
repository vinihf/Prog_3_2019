<?php
    //require __DIR__."\App\Veiculos\Veiculo.class.php";
    require __DIR__."/vendor/autoload.php";

    use App\Veiculos\Veiculo;
    
    $meuVeiculo = new Veiculo("Ferrari","F50");
    $meuVeiculo->imprimir();
?>