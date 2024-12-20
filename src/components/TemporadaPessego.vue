<script>
export default {
  name: "TemporadaPessego"
}
</script>

<template>
  <div id="temporada" class="container">
    <div class="mais-buscados">
      <h4>temporada do pêssego</h4>
      <div class="p-container">
        <p id="p-bem-avaliados">a melhor safra dos últimos 4 anos</p>
        <p id="p-sua-regiao">da temporada</p>
      </div>
    </div>

    <div class="d-flex justify-content-between"> <!-- Usando flexbox para alinhar as imagens lado a lado -->
      <div id="temp-banner1" class="banner">
        <img class="img-fluid custom-img" src="https://picsum.photos/384" alt="banner1">
        <div class="span-price">
          <span class="normal-price">R$ 100</span>
        </div>
      </div>

      <div id="temp-banner2" class="banner">
        <img class="img-fluid custom-img" src="https://picsum.photos/384" alt="banner2">
        <div class="span-price">
          <span class="normal-price">R$ 130</span>
        </div>
      </div>

      <div id="q-banners">
        <div class="row">
          <div class="col">
            <div id="temp-banner3" class="banner">
              <img src="https://picsum.photos/72" alt="banner3" class="img-fluid">
              <div id="temp-price3" class="span-price">
                <span class="original-price">R$ 237</span>
                <span class="discount-price">R$ 177,75</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div id="temp-banner4" class="banner">
              <img src="https://picsum.photos/72" alt="banner4" class="img-fluid">
              <div  id="temp-price4" class="span-price">
                <span class="original-price">R$ 145</span>
                <span class="discount-price">R$ 108,75</span>
              </div>
            </div>
          </div>
          <div class="w-100"></div>
          <div class="col">
            <div class="banner">
              <img src="https://picsum.photos/72" alt="banner5" class="img-fluid">
              <div class="span-price">
                <span class="normal-price">R$ 100</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div id="temp-banner6" class="banner">
              <img src="https://picsum.photos/72" alt="banner6" class="img-fluid">
              <div  id="temp-price6" class="span-price">
                <span class="original-price">R$ 300</span>
                <span class="discount-price">R$ 195</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#temporada h4 {
  font-weight: bold;
  font-size: 30px;
}
.temporada {
  display: block;
}
.img-fluid {
  max-width: 100%; /* Limita a largura da imagem ao tamanho do contêiner pai */
  height: auto; /* Mantém a proporção da imagem */
}

/* Garantir que as imagens ocupem o 100% da largura disponível */
.custom-img {
  width: 384px;
  height: 384px;
  object-fit: cover;
}

@media (min-width: 768px) {
  .custom-img {
    width: 384px;
    height: auto;
    object-fit: cover;
  }
}

/* Se necessário, remova padding adicional */
.row {
  padding-left: 0;
  padding-right: 0;
}

#q-banners {
  position: relative; /* Permite que os elementos internos sejam posicionados sobre a imagem */
}

/* Usando flexbox para garantir que as imagens fiquem lado a lado */
.d-flex {
  display: flex;
  justify-content: space-between; /* Garante que as imagens fiquem separadas de forma igual */
  gap: 10px; /* Ajuste o espaçamento entre as imagens */
}

/* Ajustes para telas menores */
@media (max-width: 767px) {
  .d-flex {
    flex-direction: column; /* Alinha as imagens verticalmente em telas pequenas */
    gap: 20px; /* Ajuste o espaçamento para telas menores */
  }
}
.banner {
  position: relative; /* Permite que os elementos internos sejam posicionados sobre a imagem */
}

#q-banners .row {
  display: flex;
  flex-wrap: wrap; /* Permite que as imagens se ajustem em novas linhas */
  justify-content: space-between; /* Espaço igual entre as imagens */
}

#q-banners .row .col img {
  width: 95px;
  height: 95px;
}


#q-banners .row .col img {
  width: 100%; /* Garante que a imagem ocupe toda a largura disponível dentro da coluna */
  height: auto; /* Mantém a proporção da imagem */
}

#q-banners .col {
  padding-bottom: 24px;
}

#p-sua-regiao {
  font-family: Arial;
  color: #772122;
  font-size: 15px;
  margin-left: auto; /* Empurra o segundo p para o final da linha */
  font-weight: bold;
}

#banner1 img {
  width: 100%; /* A imagem ocupa 100% da largura do contêiner */
  height: auto; /* Mantém a proporção da imagem */
}

#other-banner2 img {
  width: 100%; /* A imagem ocupa 100% da largura do contêiner */
  height: auto; /* Mantém a proporção da imagem */
}

#banner2 img {
  width: 100%; /* A imagem ocupa 100% da largura do contêiner */
  height: auto; /* Mantém a proporção da imagem */
}

#temp-banner1 img {
  width: 100%; /* A imagem ocupa 100% da largura do contêiner */
  height: auto; /* Mantém a proporção da imagem */
}

#q-banners img {
  width: 100%; /* A imagem ocupa 100% da largura do contêiner */
  height: auto; /* Mantém a proporção da imagem */
}

#banner1 .span-price span {
  position: absolute; /* Posiciona o texto sobre a imagem */
  font-size: 12px; /* Tamanho da fonte adaptável */
  white-space: nowrap; /* Impede o texto de quebrar para uma nova linha */
  font-family: Arial;
}

#other-banner2 .span-price span {
  position: absolute; /* Posiciona o texto sobre a imagem */
  font-size: 12px; /* Tamanho da fonte adaptável */
  white-space: nowrap; /* Impede o texto de quebrar para uma nova linha */
  font-family: Arial;
}

#banner2 .span-price span {
  position: absolute; /* Posiciona o texto sobre a imagem */
  font-size: 12px; /* Tamanho da fonte adaptável */
  white-space: nowrap; /* Impede o texto de quebrar para uma nova linha */
  font-family: Arial;
}

#temp-banner1 .span-price span {
  position: absolute; /* Posiciona o texto sobre a imagem */
  font-size: 12px; /* Tamanho da fonte adaptável */
  white-space: nowrap; /* Impede o texto de quebrar para uma nova linha */
  font-family: Arial;
}

#temp-banner2 .span-price span {
  position: absolute; /* Posiciona o texto sobre a imagem */
  font-size: 12px; /* Tamanho da fonte adaptável */
  white-space: nowrap; /* Impede o texto de quebrar para uma nova linha */
  font-family: Arial;
}

#q-banners .span-price span {
  position: absolute; /* Posiciona o texto sobre a imagem */
  font-size: 12px; /* Tamanho da fonte adaptável */
  white-space: nowrap; /* Impede o texto de quebrar para uma nova linha */
  font-family: Arial;
}

/* Alinha os dois spans na mesma linha */
#banner1 .span-price .original-price {
  color: #222222;
  text-decoration: line-through;
  margin-left: 10px;
  left: 40px;
}

#other-banner2 .span-price .original-price {
  color: #222222;
  text-decoration: line-through;
  margin-left: 10px;
  left: 40px;
}

#q-banners .span-price .original-price {
  color: #222222;
  text-decoration: line-through;
  margin-left: 10px;
  left: 40px;
}

#banner1 .span-price .discount-price {
  color: #772122;
  text-decoration: none;
  left: 10px;
  font-weight: bold;
}

#banner2 .span-price .discount-price {
  color: #772122;
  text-decoration: none;
  left: 10px;
  font-weight: bold;
}

#temp-banner1 .span-price .discount-price {
  color: #772122;
  text-decoration: none;
  left: 10px;
  font-weight: bold;
}

#temp-banner2 .span-price .discount-price {
  color: #772122;
  text-decoration: none;
  left: 10px;
  font-weight: bold;
}

#other-banner2 .span-price .discount-price {
  color: #772122;
  text-decoration: none;
  left: 10px;
  font-weight: bold;
}

#banner1 .span-price .normal-price {
  color: #222222;
  text-decoration: none;
  left: 10px;
  font-weight: bold;
}

#banner2 .span-price .normal-price {
  color: #222222;
  text-decoration: none;
  left: 10px;
  font-weight: bold;
}

#temp-banner1 .span-price .normal-price {
  color: #222222;
  text-decoration: none;
  left: 10px;
  font-weight: bold;
}

#temp-banner2 .span-price .normal-price {
  color: #222222;
  text-decoration: none;
  left: 10px;
  font-weight: bold;
}

#other-banner1 .span-price .normal-price {
  color: #222222;
  text-decoration: none;
  left: 10px;
  font-weight: bold;
}

#q-banners .span-price .normal-price {
  color: #222222;
  text-decoration: none;
  left: 10px;
  font-weight: bold;
}

#q-banners .span-price .discount-price {
  color: #772122;
  text-decoration: none;
  left: 10px;
  font-weight: bold;
}

.span-price {
  position: absolute; /* Permite posicionar a div dentro do banner */
  width: 90px;
  height: 24px;
  left: 10px; /* Ajuste a posição lateral conforme necessário */
  top: 85%;
  background-color: white; /* Define o fundo branco */
  padding: 5px 10px; /* Espaçamento interno para melhorar a aparência */
  display: flex; /* Mantém os spans na mesma linha */
  align-items: center; /* Alinha o conteúdo verticalmente */
  gap: 5px; /* Espaçamento entre os spans */
  border-radius: 4px; /* Opcional: adiciona bordas arredondadas */
}

#temp-price3 {
  position: absolute; /* Permite posicionar a div dentro do banner */
  width: 120px;
  height: 24px;
  left: 10px; /* Ajuste a posição lateral conforme necessário */
  top: 85%;
  background-color: white; /* Define o fundo branco */
  padding: 5px 10px; /* Espaçamento interno para melhorar a aparência */
  display: flex; /* Mantém os spans na mesma linha */
  align-items: center; /* Alinha o conteúdo verticalmente */
  gap: 5px; /* Espaçamento entre os spans */
  border-radius: 4px; /* Opcional: adiciona bordas arredondadas */
}

#temp-price4 {
  position: absolute; /* Permite posicionar a div dentro do banner */
  width: 120px;
  height: 24px;
  left: 10px; /* Ajuste a posição lateral conforme necessário */
  top: 85%;
  background-color: white; /* Define o fundo branco */
  padding: 5px 10px; /* Espaçamento interno para melhorar a aparência */
  display: flex; /* Mantém os spans na mesma linha */
  align-items: center; /* Alinha o conteúdo verticalmente */
  gap: 5px; /* Espaçamento entre os spans */
  border-radius: 4px; /* Opcional: adiciona bordas arredondadas */
}

#temp-price6 {
  position: absolute; /* Permite posicionar a div dentro do banner */
  width: 120px;
  height: 24px;
  left: 10px; /* Ajuste a posição lateral conforme necessário */
  top: 85%;
  background-color: white; /* Define o fundo branco */
  padding: 5px 10px; /* Espaçamento interno para melhorar a aparência */
  display: flex; /* Mantém os spans na mesma linha */
  align-items: center; /* Alinha o conteúdo verticalmente */
  gap: 5px; /* Espaçamento entre os spans */
  border-radius: 4px; /* Opcional: adiciona bordas arredondadas */
}

.span-city .city {
  color: #EE2641;
  text-decoration: none;
  font-weight: bold;
  font-family: Arial, sans-serif;
  position: relative; /* Mantém a hierarquia com o SVG */
  z-index: 2; /* Garante que o texto fique sobre o SVG */
}

#temporada {
  margin-top: 70px;
}

#temp-banner3 #temp-price3 .original-price {
  color: #222222;
  text-decoration: line-through;
  margin-left: 10px;
  left: 60px;
}

#temp-banner4 #temp-price4 .original-price {
  color: #222222;
  text-decoration: line-through;
  margin-left: 10px;
  left: 60px;
}

#temp-banner6 #temp-price6 .original-price {
  color: #222222;
  text-decoration: line-through;
  margin-left: 10px;
  left: 50px;
}
</style>