<?php

class Calculadora{
    private $valor1;
    private $valor2;

    public function __construct($valor1,$valor2){
        $this->valor1 = $valor1;
        $this->valor2 = $valor2;
    }

    public function soma(){
        return $this->valor1+$this->valor2;
    }

    public function subtrai(){
        return $this->valor1-$this->valor2;
    }

    public function divide(){
        return $this->valor1/$this->valor2;
    }

    public function multiplica(){
        return $this->valor1*$this->valor2;
    }
}