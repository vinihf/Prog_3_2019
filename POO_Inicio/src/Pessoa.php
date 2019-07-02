<?php
class Pessoa{
    
    private $nome;
    private $idade;

    public function setNome($nome) {
        $this->nome = $nome;
        return $this->nome;
    }
    public function setIdade($idade) {
    	$this->idade = $idade;
    	return $this->idade;
    }

    public function getNome(){
        return $this->nome;
    }

    public function getIdade(){
        return $this->idade;
    }

    public function __construct($nome,$idade){
        $this->nome = $nome;
        $this->idade = $idade;
    }

    public function fazAniversario(){
        $this->idade++;
        return $this->idade;
    }
}