  <!DOCTYPE html>

  <html lang="pt-br">

    <head>
      <meta charset="UTF-8">
      <Title>Produtos - Lar Versátil</Title>
      <link rel="stylesheet" href="./Css/estilo-larversatil3.css">

      <link rel="icon" href="./imagens/logopag.png">

      <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Serif&family=Press+Start+2P&family=Ruslan+Display&family=Ubuntu+Mono&family=Yeseva+One&display=swap"
       rel="stylesheet">

    </head>

    <body>

      <!--menu-->

      <nav class="menu">

        <a href="./index.php"> <img width="150px" src="./imagens/logo.png"></a>

        <div class="submenu">
          <a href="./produtos3.php"> Produtos </a>
          <a href="./loja3.php"> Nossas lojas </a>
          <a href="./contato3.php"> Contato </a>
        </div>
      </nav>

      <!--Fim do menu-->


       <header>
          <!-- Nome da página-->
          <h2>Produtos</h2>
          <hr>
            <!--Fim do nome da página-->

       </header>

      <div class="organizar">
        <div class="categorias">
          <h5>Categorias</h5>
          <li onclick="exibir_todos()"> Todos (12)</li>
          <li onclick="exibir_categoria('geladeiras')"> Geladeiras (3)</li>
          <li onclick="exibir_categoria('fogao')"> Fogões (2)</li>
          <li onclick="exibir_categoria('microondas')"> Microondas (3)</li>
          <li onclick="exibir_categoria('lavadouraderoupas')"> Lavadoura de Roupas (2)</li>
          <li onclick="exibir_categoria('lavaloucas')"> Lava-louças (2)</li>
          </h2>
          </ul>
        </div>

        <div class="flex">
          <div class="selecaodeprodutos" id="geladeiras">
            <img src="./imagens/Produtos/geladeira1.png">
            <br>
            <h5 id="titulo">Geladeira Velai premuim com gaveta dupla e 2 portas </h5>
            <hr>
            <p id="preço">R$ 5.669,90</p>
            <h2 id="promoçao">R$ 5.100,99</h2>
          </div>

          <div class="selecaodeprodutos" id="geladeiras">
            <img src="./imagens/Produtos/geladeira2.png">
            <br>
            <h5 id="titulo">Geladeira TCL frost free inverse</h5>
            <hr>
            <p id="preço">R$ 2.539,90</p>
            <h2 id="promoçao">R$ 1.999,99</h2>
          </div>

          <div class="selecaodeprodutos" id="geladeiras">
            <img src="./imagens/Produtos/geladeira3.png">
            <br>
            <h5 id="titulo">Geladeira Velai com gaveta dupla e 2 portas</h5>
            <hr>
            <p id="preço"> R$ 5.459,90</p>
            <h2 id="promoçao">R$ 4.849,99</h2>
          </div>

          <div class="selecaodeprodutos" id="fogao">
            <img src="./imagens/Produtos/fogao1.png">
            <br>
            <h5 id="titulo">Fogão AbC sp forno duplo de 4 bocas</h5>
            <hr>
            <p id="preço">R$ 3.220,90</p>
            <h2 id="promoçao">R$ 2.849,99</h2>
          </div>


          <div class="selecaodeprodutos" id="fogao">
            <img src="./imagens/Produtos/fogao2.png">
            <br>
            <h5 id="titulo">Fogão prither forno duplo de 4 bocas</h5>
            <hr>
            <p id="preço">R$ 2.669,90 </p>
            <h2 id="promoçao">R$ 2.249,99</h2>
          </div>

          <div class="selecaodeprodutos" id="microondas">
            <img src="./imagens/Produtos/microondas1.png">
            <br>
            <h5 id="titulo">Microondas convecs</h5>
            <hr>
            <p id="preço">R$ 659,90</p>
            <h2 id="promoçao">R$ 586,90</h2>
          </div>

          <div class="selecaodeprodutos" id="microondas">
            <img src="./imagens/Produtos/microondas2.png">
            <br>
            <h5 id="titulo">Microondas philque </h5>
            <hr>
            <p id="preço">$ 539,90</p>
            <h2 id="promoçao">R$ 465,55</h2>
          </div>

          <div class="selecaodeprodutos" id="microondas">
            <img src="./imagens/Produtos/microondas3.png">
            <br>
            <h5 id="titulo">Microondas fonit</h5>
            <hr>
            <p id="preço"> R$ 899,90</p>
            <h2 id="promoçao">R$ 769,99</h2>
          </div>

          <div class="selecaodeprodutos" id="lavadouraderoupas">
            <img src="./imagens/Produtos/lavadoura1.png">
            <br>
            <h5 id="titulo">Lavadoura de Roupas Velai 10kg </h5>
            <hr>
            <p id="preço">R$ 3.539,90</p>
            <h2 id="promoçao">R$ 2.849,99</h2>
          </div>

          <div class="selecaodeprodutos" id="lavadouraderoupas">
            <img src="./imagens/Produtos/lavadoura2.png">
            <br>
            <h5 id="titulo">Lavadoura de Roupas VVA 8kg</h5>
            <hr>
            <p id="preço">R$ 2.539,90</p>
            <h2 id="promoçao">R$ 1.129,99</h2>
          </div>

          <div class="selecaodeprodutos" id="lavaloucas">
            <img src="./imagens/Produtos/lavalouca1.png">
            <br>
            <h5 id="titulo">Lava-louças convecs</h5>
            <hr>
            <p id="preço">R$ 4.539,90</p>
            <h2 id="promoçao">R$ 3.849,99</h2>
          </div>


          <div class="selecaodeprodutos" id="lavaloucas">
            <img src="./imagens/Produtos/lavalouca2.png">
            <br>
            <h5 id="titulo">Lava-louças abC sp </h5>
            <hr>
            <p id="preço"> R$ 3.789,90</p>
            <h2 id="promoçao">R$ 2.649,99</h2>
          </div>
        </div>
      </div>
      <br><br><br><br><br>


      <!--Rodapé-->

      <footer id="rodape">
        <p id="Formasdepagamento"> Formas de pagamento </p>
        <img src="./imagens/formas-de-pagamento.png">
        <p> &copy; Larissa - Recode Pro</p>
      </footer>

      <!-- Fim do Rodapé-->

      <script type="text/javascript" src="./Js/Javascript_Larversatil3.js"> </script>
    </body>

  </html>