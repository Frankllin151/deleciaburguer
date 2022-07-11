<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <link rel="stylesheet" href="../assets/css/deliciasburguer.css">
  <title>Document</title>
</head>
<style>
  .adicionarproduto {
    width: 80%;

    border: 1px solid red;
  }

  .addcp {
    margin-bottom: 20px;
  }
</style>

<body>
  <h1 class="addcp">Adicionar Carpapio</h1>
  <div class="adicionarproduto">
    <a href="./produto_del-edit-add/adicionar/pizzaAdd.php"> Pizza</a>

    <?php
    require '../config/config.php';
    $listQ = [];
    //
    $SQL = $connect_pdo->query('SELECT * FROM pizza ');
    if ($SQL->rowCount() > 0) {
      $listQ = $SQL->fetchAll(PDO::FETCH_ASSOC);
    }
    ?>
    <table border="1" width="100%">

      <tr>
        <th>ID</th>
        <th>NOME</th>
        <th>DESCRIÇÃO</th>
        <th>PRICE1</th>
        <th>PRICE2</th>
        <th>PRICE3</th>
        <th>AÇÕES</th>

      </tr>
      <?php foreach ($listQ as $product) : ?>

        <tr>
          <td><?= $product['id'] ?></td>
          <td><?= $product['nome'] ?></td>
          <td><?= $product['description'] ?></td>
          <td><?= $product['price1'] ?></td>
          <td><?= $product['price2'] ?></td>
          <td><?= $product['price3'] ?></td>
          <td>
            <a href="">Editar</a>
            <a href="">Excluir</a>
          </td>




        </tr>

      <?php endforeach ?>
    </table>


  </div>

  <div class=" adicionarproduto">
    <a href="./produto_del-edit-add/adicionar/cachorroQAdd.php"> Cachorro Quente</a>
    <?php
    require '../config/config.php';
    $listpiz = [];
    //
    $sqlC = $connect_pdo->query('SELECT * FROM cachorroquente ');
    if ($sqlC->rowCount() > 0) {
      $listQ = $sqlC->fetchAll(PDO::FETCH_ASSOC);
    }
    ?>
    <table border="1" width="100%">
      <tr>
        <th>ID</th>
        <th>NOME</th>
        <th>DESCRIÇÃO</th>
        <th>PRICE</th>
        <th>AÇÕES</th>
      </tr>
      <?php foreach ($listQ as $product) : ?>
        <tr>
          <td><?= $product['id'] ?></td>
          <td><?= $product['nome'] ?></td>
          <td><?= $product['description'] ?></td>
          <td><?= $product['price'] ?></td>
          <td>
            <a href="">Editar</a>
            <a href="">Excluir</a>
          </td>

        </tr>
      <?php endforeach ?>
    </table>


  </div>

  <div class=" adicionarproduto">
    <a href="./produto_del-edit-add/adicionar/sanduichesAdd.php"> Sanduiches</a>
    <?php
    require '../config/config.php';
    $list_Sand = [];
    //
    $sql_Sand = $connect_pdo->query('SELECT * FROM sanduiches ');
    if ($sql_Sand->rowCount() > 0) {
      $list_Sand = $sql_Sand->fetchAll(PDO::FETCH_ASSOC);
    }
    ?>
    <table border="1" width="100%">
      <tr>
        <th>ID</th>
        <th>NOME</th>
        <th>DESCRIÇÃO</th>
        <th>PRICE</th>
        <th>AÇÕES</th>
      </tr>
      <?php foreach ($list_Sand as $product) : ?>
        <tr>
          <td><?= $product['id'] ?></td>
          <td><?= $product['nome'] ?></td>
          <td><?= $product['description'] ?></td>
          <td><?= $product['price'] ?></td>
          <td>
            <a href="">Editar</a>
            <a href="">Excluir</a>
          </td>
        </tr>
      <?php endforeach ?>
    </table>


  </div>
  <div class=" adicionarproduto">
    <a href="./produto_del-edit-add/adicionar/pateisAdd.php"> Pateis</a>


    <?php
    require '../config/config.php';
    $list_pt = [];
    //
    $sql_pateis = $connect_pdo->query('SELECT * FROM pateis ');
    if ($sql_pateis->rowCount() > 0) {
      $list_pt = $sql_pateis->fetchAll(PDO::FETCH_ASSOC);
    }
    ?>
    <table border="1" width="100%">
      <tr>
        <th>ID</th>
        <th>NOME</th>
        <th>DESCRIÇÃO</th>
        <th>PRICE</th>
        <th>AÇÕES</th>
      </tr>
      <?php foreach ($list_pt as $product) : ?>
        <tr>
          <td><?= $product['id'] ?></td>
          <td><?= $product['nome'] ?></td>
          <td><?= $product['description'] ?></td>
          <td><?= $product['price'] ?></td>
          <td>
            <a href="">Editar</a>
            <a href="">Excluir</a>
          </td>
        </tr>
      <?php endforeach ?>
    </table>
  </div>

  <div class=" adicionarproduto">
    <a href="./produto_del-edit-add/adicionar/bebidaAdd.php"> Bebidas</a>
    <?php
    require '../config/config.php';
    $list_bd = [];
    //
    $sql_bebidas = $connect_pdo->query('SELECT * FROM bebidas  ');
    if ($sql_bebidas->rowCount() > 0) {
      $list_bd = $sql_bebidas->fetchAll(PDO::FETCH_ASSOC);
    }
    ?>
    <table border="1" width="100%">
      <tr>
        <th>ID</th>
        <th>NOME</th>
        <th>PRICE</th>
        <th>AÇÕES</th>
      </tr>
      <?php foreach ($list_bd as $product) : ?>

        <tr>
          <td><?= $product['id'] ?></td>
          <td><?= $product['nome'] ?></td>

          <td><?= $product['price'] ?></td>
          <td>
            <a href="">Editar</a>
            <a href="">Excluir</a>
          </td>
        </tr>
      <?php endforeach ?>
    </table>

  </div>
</body>

</html>