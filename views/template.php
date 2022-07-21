<html>

<head>
  <title>delecia burguer</title>
  <link rel="stylesheet" href="<?php echo BASE_URL;  ?>/assets/css/stylemain.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,500&display=swap" rel="stylesheet">
  <style>
  </style>

<body>

  <header class="heart">
    <div class="menumain">
      <i class="line">..........</i>
      <i class="line">.........</i>
      <i class="line">...........</i>
    </div>
    <div class="title">
      <h1>Delícia Burguer</h1>
    </div>
    <div></div>
    <div class=" parthlink">
      <a class="partheouter" href="<?php echo BASE_URL; ?>galeria">Galeria</a>
      <a class="partheouter" href="<?php echo BASE_URL; ?>/cardapio">Cardapio</a>
      <a class="partheouter" href="">Ligar Agora</a>
      <a class="partheouter" href="<?php echo BASE_URL; ?>/home">Home</a>
      <a class="partheouter" href="">Ver Rotas</a>
    </div>


  </header>

  <?php $this->LoadViewinTemplate($viewName, $Dataview) ?>




</body>
<script src="<?php echo BASE_URL;  ?>/assets/js/scriptmain.js"></script>

</html>