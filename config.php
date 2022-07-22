<?php
require 'environment.php';
if (ENVIRONMENT === 'development') {

  define("BASE_URL", "http://localhost/deleciaburguer/");
  $config['dbname'] = 'deleciaburguer';
  $config['host'] = 'localhost';
  $config['dbuser'] = 'root';
  $config['dbpass'] = '';
} else {
  define("BASE_URL", "www.meussite.com.br");
  $config['dbname'] = 'deleciaburguer';
  $config['host'] = 'localhost';
  $config['dbuser'] = 'root';
  $config['dbpass'] = '';
}
global $db;

try {

  $db = new PDO(
    "mysql:dbname=" . $config['dbname'] . ";host=" . $config['host'],
    $config['dbuser'],
    $config['dbpass']
  );
} catch (PDOException $e) {
  echo 'ERROR' . $e->getMessage();
  exit;
}
