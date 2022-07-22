<?php

class CardapioDsql extends Models
{
  public function findAll()
  {
    $array = array();
    $sql = 'SELECT * FROM pizza ';
    $sql = $this->db->query($sql);
    if ($sql->rowCount() > 0) {
      $array = $sql->fetchAll();
    }
    return $array;
  }
  public function GetTablesand()
  {
    $array = array();
    $sql = 'SELECT * FROM sanduiches ';
    $sql = $this->db->query($sql);
    if ($sql->rowCount() > 0) {
      $array = $sql->fetchAll();
    }
    return $array;
  }
  public function GetPateis()
  {
    $array = array();
    $sql = 'SELECT * FROM pateis ';
    $sql = $this->db->query($sql);
    if ($sql->rowCount() > 0) {
      $array = $sql->fetchAll();
    }
    return $array;
  }
  public function GetCachQuente()
  {
    $array = array();
    $sql = 'SELECT * FROM cachorroquente ';
    $sql = $this->db->query($sql);
    if ($sql->rowCount() > 0) {
      $array = $sql->fetchAll();
    }
    return $array;
  }
  public function GetBebidas()
  {
    $array = array();
    $sql = 'SELECT * FROM bebidas ';
    $sql = $this->db->query($sql);
    if ($sql->rowCount() > 0) {
      $array = $sql->fetchAll();
    }
    return $array;
  }
}
