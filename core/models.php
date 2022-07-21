<?php
class Models
{
  protected $db;
  // get databases
  public function __construct()
  {
    global $db;
    $this->db = $db;
  }
}
