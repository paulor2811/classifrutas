<script>
export default {
  name: "Insumos"
}
</script>

<template>

  <div id="insumos" class="container">
    <div class="insumos">
      <h4>insumos 20% off</h4>
      <div class="p-container">
        <p id="porque o agro não pode parar">o mundo mais vivo</p>
        <p id="p-sua-regiao">produzir mais</p>
      </div>
    </div>
  </div>

  <section>
    <div class="container my-5">
      <div class="row g-1">
        <!-- Ajuste para colunas responsivas -->
        <div class="col-12 col-md-6 d-flex">
          <img src="https://picsum.photos/384" class="imagem-grande img-fluid w-100" alt="Imagem Grande">
        </div>
        <div class="col-12 col-md-6 d-flex">
          <img src="https://picsum.photos/384" class="imagem-grande img-fluid w-100" alt="Imagem Grande">
        </div>
        <div class="col-12 col-md-6 d-flex">
          <img src="https://picsum.photos/384" class="imagem-grande img-fluid w-100" alt="Imagem Grande">
        </div>
        <div class="col-12 col-md-6 d-flex">
          <img src="https://picsum.photos/384" class="imagem-grande img-fluid w-100" alt="Imagem Grande">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#insumos h4 {
  font-weight: bold;
  font-size: 30px;
}
.insumos {
  display: block;
}
#insumos {
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