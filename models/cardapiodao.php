<?php

class   Cardapio
{

  private $nome;
  private $descricao;


  public function getNome()
  {
    return $this->nome;
  }
  public function setNome($nom)
  {
    $this->nome = $nom;
  }
  public function getdescricao()
  {
    return $this->descricao;
  }
  public function setdescricao($e)
  {
    $this->descricao = $e;
  }
}
interface Cardapiodao
{
  public function findAll();
}
