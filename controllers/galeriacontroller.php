<?php
class GaleriaController extends controller
{
  public function index()
  {
    $dados = array(
      'qt' => 150,
    );
    $this->LoadTemplate('galeria', $dados);
  }
}
