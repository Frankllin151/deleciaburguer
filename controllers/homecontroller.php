<?php
require './models/Anuncio.php';
require './models/usuario.php';
class HomeController extends controller
{
  public function index()
  {
    // LoadTemplate = header of website
    $this->LoadTemplate('home');
  }
}
