<?php
require './models/cardapiomsql.php';

class Cardapiocontroller extends controller
{
  public function index()
  {
    $cardapiomodal = new CardapioDsql;
    $dados = array(
      'id' => 'fef',
      'nome' => $cardapiomodal->findAll(),
      'descricao' => 'efff',
      'cfc'
      => '333'
    );
    $this->LoadTemplate('cardapio', $dados);
  }
}
