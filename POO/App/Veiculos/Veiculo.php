<?php
namespace App\Veiculos;

class Veiculo
{
    private $marca;
    private $modelo;

    public function __construct($marca,$modelo)
    {
        $this->marca = $marca;
        $this->modelo = $modelo;
    }

    public function imprimir()
    {
        echo "Veículo da marca {$this->marca} e modelo {$this->modelo}";
    }
}