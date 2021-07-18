import * as React from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <!DOCTYPE html>
<html lang="pt-br">
  <head>
    <!-- Meta tags Obrigatórias -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <!-- Fontawesome CSS -->
    <link rel="stylesheet" href="fontawesome/css/all.css">

    <!--Estilo Customizado-->
    <link rel="stylesheet" type="text/css" href="css/estilo.css">

    <title>Promo BF - Sua fonte de promoções Black Friday</title>
  </head>
  <body>

    <header><!--inicio cabecalho-->
      <nav class="navbar navbar-expand-sm navbar-light bg-warning">
        <div class="container">
          <a href="#" class="navbar-brand">
            <h1 class="display-4">PromoBF</h1>
          </a>

          <button class="navbar-toggler" data-toggle="collapse" data-target="#nav-principal">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="nav-principal">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link">Recursos</a>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link">Benefícios</a>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link">Entrar</a>
              </li>
            </ul>
            
          </div>
          
        </div>
        
      </nav>

    </header><!--Fim cabecalho-->

    <section id="home"><!--inicio secao home-->
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-flex"><!--inicio texto da secao-->
            <div class="align-self-center">
              <h1 class="display-4">O Aplicativo Definitivo para Pesquisa de promoções</h1>
              <p>
                O Promo BF realiza uma varedura nos sites de compras e otimiza a sua pesquisa de promoções
              </p>
              <p>
                Voce cadastra suas opções e recebe uma notificação da promoção simples e rapido!
              </p>

              <form class="mt-4 mb-4">
                <div class="input-group input-group-lg">
                  <input type="text" placeholder="Seu e-mail" class="form-control">
                  <div class="input-group-append">
                    <button type="button" class="btn btn-primary">Cadastre-se</button>
                    
                  </div>
                </div>
              </form>
              <p>Disponível para
                <a href="" class="btn btn-outline-light">
                  <i class="fab fa-android fa-lg"></i>
                </a>
                <a href="" class="btn btn-outline-light">
                  <i class="fab fa-apple fa-lg"></i>
                </a>
              </p>
            </div>
                       
          </div><!--fim texto da secao-->
          <div class="col-md-6 d-none d-md-block"><!--inicio imagem-->
            <img src="img/capa-mulher.png">            
          </div><!--fim imagem-->
          
        </div>
        
      </div>
      
    </section><!--Fim secao home-->

    <section class="caixa"><!--Inicio secao saiba-->
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-flex">
            <div class="align-self-center">
              <h2>Receba rapidamente as promoções através do nosso aplicativo</h2>
              <p>
                Com o PromoBF quando houver uma promoção vantajosa enviamos uma alerta
                Basta se cadastar e escolher quais itens quer ser avisado.
              </p>
              <a href="" class="btn btn-primary">Veja mais</a>
            </div>
          </div>
          <div class="col-md-6">
            <img src="img/saiba.png" class="img-fluid">
          </div>
        </div>
      </div>
      
    </section><!--fim secao saiba-->

    <section class="caixa"><!--Inicio secao Juros-->
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="img/juros.png" class="img-fluid">
          </div>
          <div class="col-md-6 d-flex">
            <div class="align-self-center">
              <h2>Deixe que realizamos a sua procura</h2>
              <p>
                Nós pesquisamos, Você compra. Deixe o trabalho pesado conosco. Buscamos em diveross sites as melhores ofertas para que nossos cliente apenas escolham onde comprar.
              </p>
              <a href="" class="btn btn-primary">Veja mais</a>
            </div>
          </div>
          
        </div>
      </div>
      
    </section><!--fim secao Juros-->

    <section class="caixa"><!--Inicio secao Recursos-->
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img src="img/facil.png" class="img-fluid">
            <h4>Fácil de usar</h4>
            <p>
              O PromoBF permite que voce escolha quais lojas faram parte da busca e permite esolher o valor maximo e minino de cada oferta a ser levantada!
            </p>
          </div>
          <div class="col-md-4">
            <img src="img/economize.png" class="img-fluid">
            <h4>Economize seu tempo</h4>
            <p>
              Tempo é dinheiro! Em segundos, você tem o resultado das ofertas no dia de hoje e criamos uma linha do tempo para acompanhamento.
            </p>
          </div>
          <div class="col-md-4">
            <img src="img/suporte.png" class="img-fluid">
            <h4>Suporte amigo</h4>
            <p>
              Dúvidas? Perguntas? Nosso suporte super legal ajuda você! Estamos aqui para resolver seus problemas e deixar sua vida bem mais fácil!
            </p>
          </div>
        </div>
      </div>
      
    </section><!--fim secao Recursos-->

    <footer class="mt-4mb-4"><!--inicio rodape-->
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <p>
              <a href="">Home</a>
              <a href="">Recursos</a>
              <a href="">Benefícios</a>
            </p>
          </div>
          <div class="col-md-4 d-flex justify-content-end">
            <a href="" class="btn btn-outline-dark">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="" class="btn btn-outline-dark ml-2">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="btn btn-outline-dark ml-2">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="btn btn-outline-dark ml-2">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      
    </footer><!--fim rodape-->
    





    <!-- JavaScript (Opcional) -->
    <!-- jQuery primeiro, depois Popper.js, depois Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
</html>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
