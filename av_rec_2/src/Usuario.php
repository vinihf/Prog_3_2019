<?php
namespace Classes;

class Usuario{
    
    private $idUsuario;
    private $nome;
    private $email;
    private $senha;
    

    public function __construct($idUsuario = null, $nome = null, $email = null, $senha = null){
        $this->idUsuario = $idUsuario;
        $this->nome = $nome;
        $this->email = $email;
        $this->senha = $senha;
    }

    public function getIdUsuario(){
        return $this->idUsuario;
    }

    public function getNome(){
        return $this->nome;
    }

    public function getEmail(){
        return $this->email;
    }

    public function getSenha(){
        return $this->senha;
    }

}