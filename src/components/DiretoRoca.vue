<script>
export default {
  name: "DiretoRoca"
}
</script>

<template>
  <div id="direto-roca" class="container">
    <div class="direto-roca">
      <h4>direto da roça</h4>
      <div class="p-container">
        <p id="p-bem-avaliados">o mais fresco possível</p>
        <p id="p-sua-regiao">produtores</p>
      </div>
    </div>

    <div class="d-flex justify-content-between"> <!-- Usando flexbox para alinhar as imagens lado a lado -->
      <div id="other-banner1" class="banner">
        <img class="img-fluid custom-img" src="https://picsum.photos/384" alt="banner1">
        <div class="span-price">
          <span class="normal-price">R$ 290</span>
        </div>
        <div class="span-city">
          <div class="svg-container">
            <svg class="city-icon" width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.25 7.10526C11.25 7.92083 10.9306 8.97225 10.3829 10.1459C9.84281 11.3031 9.11564 12.5069 8.37741 13.606C7.64081 14.7026 6.90272 15.6809 6.34811 16.3857C6.22163 16.5464 6.10486 16.6927 6 16.8228C5.89514 16.6927 5.77837 16.5464 5.65189 16.3857C5.09728 15.6809 4.35919 14.7026 3.62259 13.606C2.88436 12.5069 2.15719 11.3031 1.61713 10.1459C1.06942 8.97225 0.75 7.92083 0.75 7.10526C0.75 3.4715 3.21435 0.75 6 0.75C8.78565 0.75 11.25 3.4715 11.25 7.10526Z" stroke="#EE2641" stroke-width="1.5"/>
            </svg>
            <svg class="dot-icon" width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.04995 3.42857C5.04995 4.72079 4.08424 5.67857 2.99995 5.67857C1.91566 5.67857 0.949951 4.72079 0.949951 3.42857C0.949951 2.13636 1.91566 1.17857 2.99995 1.17857C4.08424 1.17857 5.04995 2.13636 5.04995 3.42857Z" stroke="#EE2641" stroke-width="1.5"/>
            </svg>
          </div>
          <span class="city">Mauá - PR</span>
        </div>
      </div>
      <div id="other-banner2" class="banner">
        <img class="img-fluid custom-img" src="https://picsum.photos/384" alt="banner2">
        <div class="span-price">
          <span class="original-price">R$ 200</span>
          <span class="discount-price">R$ 190</span>
        </div>
        <div class="span-city">
          <div class="svg-container">
            <svg class="city-icon" width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.25 7.10526C11.25 7.92083 10.9306 8.97225 10.3829 10.1459C9.84281 11.3031 9.11564 12.5069 8.37741 13.606C7.64081 14.7026 6.90272 15.6809 6.34811 16.3857C6.22163 16.5464 6.10486 16.6927 6 16.8228C5.89514 16.6927 5.77837 16.5464 5.65189 16.3857C5.09728 15.6809 4.35919 14.7026 3.62259 13.606C2.88436 12.5069 2.15719 11.3031 1.61713 10.1459C1.06942 8.97225 0.75 7.92083 0.75 7.10526C0.75 3.4715 3.21435 0.75 6 0.75C8.78565 0.75 11.25 3.4715 11.25 7.10526Z" stroke="#EE2641" stroke-width="1.5"/>
            </svg>
            <svg class="dot-icon" width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.04995 3.42857C5.04995 4.72079 4.08424 5.67857 2.99995 5.67857C1.91566 5.67857 0.949951 4.72079 0.949951 3.42857C0.949951 2.13636 1.91566 1.17857 2.99995 1.17857C4.08424 1.17857 5.04995 2.13636 5.04995 3.42857Z" stroke="#EE2641" stroke-width="1.5"/>
            </svg>
          </div>
          <span class="city">Petrolina - PE</span>
        </div>
      </div>
      <div id="q-banners">
        <div class="row">
          <div class="col">
            <div class="banner">
              <img src="https://picsum.photos/72" alt="banner3" class="img-fluid">
              <div class="span-price">
                <span class="normal-price">R$ 700</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="banner">
              <img src="https://picsum.photos/72" alt="banner4" class="img-fluid">
              <div class="span-price">
                <span class="normal-price">R$ 199</span>
              </div>
            </div>
          </div>
          <div class="w-100"></div>
          <div class="col">
            <div class="banner">
              <img src="https://picsum.photos/72" alt="banner5" class="img-fluid">
              <div class="span-price">
                <span class="normal-price">R$ 390</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="banner">
              <img src="https://picsum.photos/72" alt="banner6" class="img-fluid">
              <div class="span-price">
                <span class="normal-price">R$ 1.499</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.p-container {
  display: flex;
  align-items: center; /* Alinha os p's verticalmente no centro */
  gap: 10px; /* Espaço entre os p's */
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

.span-city {
  position: absolute;
  width: auto;
  height: 24px;
  left: 115px;
  top: 85%;
  background-color: white;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 4px;
  z-index: 1; /* Define a camada do texto */
}

.span-city .city {
  color: #EE2641;
  text-decoration: none;
  font-weight: bold;
  font-family: Arial, sans-serif;
  position: relative; /* Mantém a hierarquia com o SVG */
  z-index: 2; /* Garante que o texto fique sobre o SVG */
}

.city-icon {
  position: absolute;
  left: 0;
  width: 12px;
  height: 18px;
  z-index: 1; /* Define o SVG atrás do texto */
}

.svg-container {
  position: relative;
  width: 12px; /* Largura do espaço para os SVGs */
  height: 17px; /* Altura do espaço para os SVGs */
}

.dot-icon {
  position: absolute;
  left: 3px;
  top: 4px;
  width: 6px;
  height: 7px;
  z-index: 2; /* A bolinha fica sobre a city-icon */
}
#direto-roca h4 {
  font-weight: bold;
  font-size: 30px;
}
.direto-roca {
  display: block;
}
#direto-roca {
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