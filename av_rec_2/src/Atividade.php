<?php

namespace Classes;

class Atividade{
    
    private $idAtividade;
    private $idUsuario;
    private $descricao;
    private $relatorio;
    private $status;

    public function __construct($idAtividade = null, $idUsuario = null, $descricao = null, $relatorio = null, $status = null){
        $this->idAtividade = $idAtividade;
        $this->idUsuario = $idUsuario;
        $this->descricao = $descricao;
        $this->relatorio = $relatorio;
        $this->status = $status;
    }



}