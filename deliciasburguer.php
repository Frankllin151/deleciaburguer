<!DOCTYPE html>
<html lang="en">


<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Delicias Burguer</title>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&family=Poppins:ital,wght@0,400;0,500;1,300&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="./assets/css/deliciasburguer.css" />
</head>

<body>
  <?php
  // path pizza
  require 'config/config.php';
  $array_pz = [];
  $call_pizza = $connect_pdo->query('SELECT * FROM pizza');
  if ($call_pizza->rowCount() > 0) {
    $array_pz = $call_pizza->fetchAll(PDO::FETCH_ASSOC);
  }
  // path cachorro quente 
  $array_QT = [];
  $call_cachorroQuente = $connect_pdo->query('SELECT * FROM cachorroquente');
  if ($call_cachorroQuente->rowCount() > 0) {
    $array_QT = $call_cachorroQuente->fetchAll(PDO::FETCH_ASSOC);
  }
  //path sanduiches 
  $array_Sand = [];
  $call_sanduiches = $connect_pdo->query('SELECT * FROM sanduiches');
  if ($call_sanduiches->rowCount() > 0) {
    $array_Sand = $call_sanduiches->fetchAll(PDO::FETCH_ASSOC);
  }
  //path pateis 





  //path bebidas 





  ?>
  <section id="main">
    <header>
      <h1 class="title">Delicias Burguer</h1>

    </header>
    <div class="menu">
      <div class="cardapio-0" onclick="pizzaopen()">pizza</div>

      <div class="cardapio-0" onclick="cachoQuente()">Cahorro-Quente</div>
      <div class="cardapio-0" onclick="sanduiches()">Sanduíches</div>
      <div class="cardapio-0" onclick="ptmain()">Pastéis</div>
      <div class="cardapio-0" onclick=" drink()">Bebidas</div>






    </div>
    <section id="menu-bulyy" style=" background-color: rgb(252, 226, 226);">
      <div class="cardapio-pizza">
        <div class="titulo">
          <h1>Escolha a pizza</h1>
        </div>


        <div id="pizza-itemID" class="pizza-item">

          <?php foreach ($array_pz  as $call_pizza) : ?>
            <div onclick="Screen()" id="" class="teste2">
              <div class="pizza-area">
                <img class="photo" src="<?= $call_pizza['img'] ?>" alt="">
                <div class="namep" id=""><?= $call_pizza['nome'] ?></div>
                <p class="description"><?= $call_pizza['description'] ?></p>
                <div class="price-pizza">
                  <span>R$<?= $call_pizza['price1'] ?>,00</span>


                </div>
              </div>
            </div>
          <?php endforeach ?>
          <div></div>
        </div>

      </div>
      </div>

      <div class="cardapio-Quente">
        <div class="titulo">
          <h1>Escolha o Cachorro Quente</h1>
        </div>

        <div class="quente-item">

          <?php foreach ($array_QT as $call_cachorroQuente) : ?>
            <div id="${idCachorroQ}" onclick="screenQ()" class="quente-area">
              <img class="photo" src="<?= $call_cachorroQuente['img'] ?>" alt="">
              <div class="tituloQ"><?= $call_cachorroQuente['nome'] ?></div>
              <div class="descCQ"><?= $call_cachorroQuente['description'] ?></div>
              <div class="priceQ"><?= $call_cachorroQuente['price'] ?></div>
            </div>
          <?php endforeach ?>
        </div>
      </div>
      <div class="cardapio-sanduíches">

        <div class="titulo">
          <h1>Escolha o Sanduíches</h1>
        </div>
        <div class="sanduíches-item">

          <?php foreach ($array_Sand as $call_sanduiches) : ?>
            <div id="" class="area-Sand" onclick="sandScreen()">
              <img class="photo" src="<?= $call_sanduiches['img'] ?>" alt="">
              <div class="tituloSand"><?= $call_sanduiches['nome'] ?></div>
              <div class="descriptionS"><?= $call_sanduiches['description'] ?></div>
              <div class="pricesand">
                R$ <?= $call_sanduiches['price'] ?>,00
              </div>
            </div>
          <?php endforeach ?>
        </div>
      </div>
      <div class="cardapio-pateis">
        <div class="titulo">
          <h1>Escolha seu Pastel</h1>
        </div>
        <div class="pasteis-item">
          <?php
          $array_pateis = [];
          $call_pateis = $connect_pdo->query('SELECT * FROM pateis');
          if ($call_pateis->rowCount() > 0) {
            $array_pateis = $call_pateis->fetchAll(PDO::FETCH_ASSOC);
          }
          ?>
          <?php foreach ($array_pateis as $call_pateis) : ?>

            <div class="pateis-area" onclick="ScreenPT()">
              <img class="photo" src="<?= $call_pateis['img']  ?>" alt="">
              <div class="titulo-pateis"><?= $call_pateis['nome']  ?></div>
              <div class="pateisDesc"><?= $call_pateis['description']  ?></div>
              <div class="price-pateis">
                <?= $call_pateis['price']  ?>
              </div>
            </div>
          <?php endforeach ?>
        </div>
      </div>
      <div class="cardapio-drink">
        <div class="titulo">
          <h1>Escolha sua Bebida</h1>
        </div>
        <div class="bebida-item">
          <?php
          $array_bebidas = [];
          $call_bebidas = $connect_pdo->query('SELECT * FROM bebidas ');
          if ($call_bebidas->rowCount() > 0) {
            $array_bebidas = $call_bebidas->fetchAll(PDO::FETCH_ASSOC);
          }
          ?>
          <?php foreach ($array_bebidas as $call_bebidas) : ?>
            <div class="area-drink" onclick="Screendrink()">
              <img class="photo" src="<?= $call_bebidas['img'] ?>" alt="">
              <div class="drink-name"><?= $call_bebidas['nome'] ?></div>
              <div class="drink-price"><?= $call_bebidas['price'] ?></div>
            </div>
          <?php endforeach ?>
        </div>
      </div>
    </section>

  </section>
  <div class="sectionwindow" style="background-color: rgb(226, 143, 143);">
    <div class="add-display">
      <div class="Photograph">
        <img id="imgphotograph" src="" alt="">
      </div>
      <div class="nameAndDescription">
        <div class="name-add"></div>
        <div class="description-add"></div>
      </div>
      <div class="pricepizza">
        <div class="price " id="price1">12</div>
        <div class="price " id="price2"></div>
        <div class=" price" id="price3"></div>
      </div>
      <div class="priceAll">

      </div>
      <div class="area-button">
        <button class="add">Adicionar à Compra</button>
        <button class="cancel">Cancelar</button>
      </div>
    </div>
  </div>

  <div class="add-screen-pix">
    <button id="fechar">Fechar</button>
    <br>
    <button id="comprar"> <a href="https://www.google.com/">Comprar</a></button>
  </div>

  </div>


</body>

<script src="./assets/js/script.js">
</script>

</html>