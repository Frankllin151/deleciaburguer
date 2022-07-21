<?php
class   Anuncios extends Models
{
  public function getquantidade()
  {

    $sql = "SELECT COUNT(*) as c FROM anuncio";
    $sql = $this->db->query($sql);
    if ($sql->rowCount() > 0) {
      $sql = $sql->fetch();
      return $sql['c'];
    } else {
      return 0;
    }
  }
}
