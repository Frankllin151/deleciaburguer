<?php
require './models/cardapiomsql.php';

class Cardapiocontroller extends controller
{
  public function index()
  {
    $dados = array();
    // get class 
    $cardapiomodal = new CardapioDsql;
    // array to variables 
    $dados['lista'] = $cardapiomodal->findAll();
    $dados['Sandlista'] = $cardapiomodal->GetTablesand();
    $dados['Pateislista'] = $cardapiomodal->GetPateis();
    $dados['CachoroQT'] = $cardapiomodal->GetCachQuente();
    $dados['Bebidas'] = $cardapiomodal->GetBebidas();
    $this->LoadTemplate('cardapio', $dados);
  }
}
