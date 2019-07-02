<?php
require __basedir__."/db/MySQL.class.php";

class Avaliacao{
    private $id;
    private $data;
    private $disciplina;
    private $conteudo;
    private $tipo;
    private $peso;

    public function __construct($id = null, $data = null, $disciplina = null, $conteudo = null, $tipo = null, $peso = null){
        $this->id = $id;
        $this->data = $data;
        $this->disciplina = $disciplina;
        $this->conteudo = $conteudo;
        $this->tipo = $tipo;
        $this->peso = $peso;

        
    }
    public function __set($atributo,$valor){
        $this->$atributo = $valor;
    }

    public function __get($atributo){
        return $this->$atributo;
    }

    public function inserir(){
        $conexao = new MySQL();
        $sql = "insert 
                into avaliacao (data, disciplina, conteudo, tipo, peso) 
                values
                ('".$this->data."',".$this->disciplina."
    }

}