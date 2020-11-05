<!DOCTYPE html>

<html lang = "pt-br">

   <head>
      <meta charset = "UTF-8">
      <Title> Nossas lojas - Lar versátil </Title>
      <link rel = "stylesheet" href = "./Css/estilo-larversatil3.css">

      <link rel="stylesheet" href="./Css-B/bootstrap.css">

      <link rel="stylesheet" href="./Css-B/bootstrap-grid.css">

      <link rel="icon" href="../imagens/logopag.png">

      
    </head>

   <body>

            <!--menu-->

            <?php 
              include_once('menu.html');
            ?>

            <!--Fim do menu-->

            <header>
            <!-- Nome da página-->
            <h2>Nossas lojas</h2>
            <hr>
            <!--Fim do nome da página-->

            </header>
            
            <!--Nossas lojas -->
              <div class = "flex-loja">
                  <section class="flex">
                          <div class="nossaslojas  p-3 mb-2 bg-warning text-dark">
                              <h5>Rio de Janeiro</h5>
                              <p>10 &ordm; andar</p>
                              <p>Centro</p>
                              <p>(21) 3333-3333</p>
                          </div>
      
                          <div class="nossaslojas p-3 mb-2 bg-warning text-dark">
                              <h5>São Paulo</h5>
                              <p>Avenida Paulista, 985</p>
                              <p>3 &ordm; andar</p>
                              <p>Jardins</p>
                              <p>(11) 4444-4444</p>
                          </div>

                          <div class= "nossaslojas p-3 mb-2 bg-warning text-dark">
                              <h5>Santa Catarina</h5>
                              <p>Rua Major &Aacute; vila, 370</p>
                              <p>Vila Mariana</p>
                              <p>(47) 5555-5555</p>
                          </div>
                  <section>
                </div>

          <br><br><br><br><br>
          <!-- Fim de nossas lojas -->

        <!--Rodapé-->

        <?php 
         include_once('footer.html');
        ?>

      <!-- Fim do Rodapé-->
    </body>

</html>