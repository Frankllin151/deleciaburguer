<?php

$nameDT =  'deleciaburguer';
$localDT = 'localhost';
$userDT = 'root';
$DTpassword = '';
// conect batabases 
$connect_pdo = new PDO('mysql:dbname=' . $nameDT . ';host=' . $localDT, $userDT, $DTpassword);
// show All 
$call_pizza = $connect_pdo->query('SELECT * FROM pizza');
$call_cachorroQuente = $connect_pdo->query('SELECT * FROM cachorroquente');
$call_sanduiches = $connect_pdo->query('SELECT * FROM sanduiches');
$call_bebidas = $connect_pdo->query('SELECT * FROM bebidas ');
$call_pateis = $connect_pdo->query('SELECT * FROM pateis');
$ALL_pizza = $call_pateis->fetchAll();
