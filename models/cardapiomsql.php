<?php
require_once './models/cardapiodao.php';
class CardapioDsql extends Models implements Cardapiodao
{
  public function findAll()
  {
    $array = [];
    $sql = $this->db->query('SELECT * FROM pizza ');
    if ($sql->rowCount() > 0) {
      $data = $sql->fetchAll();
      foreach ($data as $item) {
        $u = new Cardapio();

        $u->setNome($item['nome']);
        $u->setdescricao($item['descricao']);
        $array = $u;
      }
    }
    return $array;
  }
}
