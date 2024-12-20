<template>

  <div id="mercado-flores" class="container">
    <div class="mercado-flores">
      <h4>mercado das flores</h4>
      <div class="p-container">
        <p id="p-bem-avaliados">o mundo mais vivo</p>
        <p id="p-sua-regiao">comprar tudo</p>
      </div>
    </div>
  </div>

  <section class="container my-5">
    <div class="row g-1">
      <!-- Primeira Coluna -->
      <div class="div-img-grande col-md-6 d-flex">
        <div class="w-100 pe-2">
          <img src="https://picsum.photos/384" class="imagem-grande img-fluid w-100" alt="Imagem Grande">
        </div>
        <div class="div-img-pequena w-50 d-flex flex-column flex-wrap">
          <img src="https://picsum.photos/72" class="imagem-pequena img-fluid w-100 p-1" alt="Imagem Menor">
          <img src="https://picsum.photos/72" class="imagem-pequena img-fluid w-100 p-1" alt="Imagem Menor">
        </div>
      </div>

      <!-- Segunda Coluna -->
      <div class="div-img-grande col-md-6 d-flex">
        <div class="w-100 pe-2">
          <img src="https://picsum.photos/384" class="imagem-grande img-fluid w-100" alt="Imagem Grande">
        </div>
        <div class="div-img-pequena w-50 d-flex flex-column flex-wrap">
          <img src="https://picsum.photos/72" class="imagem-pequena img-fluid w-100 p-1" alt="Imagem Menor">
          <img src="https://picsum.photos/72" class="imagem-pequena img-fluid w-100 p-1" alt="Imagem Menor">
        </div>
      </div>
    </div>
  </section>

</template>


<script>
export default {
  name: "MercadoFlores",
}
</script>
<style scoped>
#mercado-flores h4 {
  font-weight: bold;
  font-size: 30px;
}
.mercado-flores {
  display: block;
}
#mercado-flores {
  margin-top: 70px;
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
</style>