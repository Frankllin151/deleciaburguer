<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="<?php echo BASE_URL;  ?>/assets/css/style.css">

</head>

<body>
  <div class="geral ">
    <section id="sectioninformation">
      <div class="ruleinfomation">
        <div class="areainformationHome">
          <div class="titlehome">
            <h1>Delícia Burguer</h1>
          </div>
          <div class="rualote">
            <p>Zona Rural</p>
            <p> R. Duque de Caxias, Barcelona - RN</p>
          </div>
          <div class="sola" onclick="sendEmail()">
            <div class="solicitaçaoCotaçao">
              <p> SOLICITAR COTAÇÃO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="positionemailsend">
      <div class="SendEmail">
        <div class="cabelhasendemail">
          <p id="solici">Solicitar Cotação</p>
          <div class="closed" onclick="closedmodal()">
            <img src="<?php echo BASE_URL; ?>/assets/images/icons/closedmodal.png" alt="">
          </div>
        </div>
        <hr id="hrid">
        <form action="">
          <label for="">
            <p> Nome:</p>

            <br>
            <input class="input_infomation" name="nome" type="text">
          </label> <br>
          <label for="">
            <p> Telefone:</p>

            <br>
            <input class="input_infomation" name="telefone" type="tel">
          </label>
          <br>
          <label for="">
            <p> Email:</p>

            <br>
            <input class="input_infomation" name="email" type="email">
          </label>
          <p id="help_p">*E obrigatório inserir um e-mail valido</p>

          <br>
          <label for="">
            <p id="help_p"> Como podemos lhe ajudar?</p>

            <br>
            <textarea name="solicitacao" id="txtarea" placeholder="Gostaria de saber sobre a disponibilidade e os preços. Preciso de ajudar com seguinte" name="txtarea" rows="1000"></textarea>
          </label>
          <br>
          <br>
          <button value="submit">Enviar</button>
        </form>
        <p class="evite">
          Evite Incluir infomarções confideciais que você não quer compatilhar com esta empresa.
        </p>
      </div>
    </div>


  </div>

  <div class="dddd">*************</div>

</body>
<script src="<?php echo BASE_URL;  ?>/assets/js/scriptdl.js">
</script>

</html>