<?php
class Cardapiocontroller extends controller
{
  public function index()
  {
    $this->LoadTemplate('cardapio', array());
  }
  public function open()
  {
    $this->LoadTemplate('open', array());
  }
}
