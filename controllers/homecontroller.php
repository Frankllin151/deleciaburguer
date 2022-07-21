<?php
require './models/Anuncio.php';
require './models/usuario.php';
class HomeController extends controller
{
  public function index()
  {
    $anuncios = new Anuncios();
    $usuario = new Usuario;
    $dados = array(
      //array winch será transform in variable
      'quantidade' => $anuncios->getquantidade(),
      'Nome' => $usuario->getNome(),
      'Email' => $usuario->getEmail()
    );
    // LoadTemplate = header of website
    $this->LoadTemplate('home', $dados);
  }
}
