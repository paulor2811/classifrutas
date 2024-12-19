<script>
export default {
  name: "VideoSection"
}
</script>

<template>
  <div class="position-relative" style="height: 300px; overflow: hidden;">
    <!-- Video cropped to 300px -->
    <video class="videoInsert" autoplay muted loop playsinline>
      <source src="https://infoanalise.com.br/images/2.mp4" type="video/mp4">
    </video>

    <!-- Dark overlay -->
    <div class="position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(0, 0, 0, 0.3); z-index: 0;"></div>

    <!-- Text content overlay -->
    <div id="textCarousel" class="carousel slide position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center text-white">
      <div class="carousel-inner">
        <!-- Text Slide 1 -->
        <div class="carousel-item active">
          <h2 class="text-danger">O QUE É?</h2>
          <p class="fs-5">A mais nova opção de divulgação no mercado hortifrutigranjeiro. Divulgamos nacionalmente seus produtos, facilitando a comercialização.</p>
        </div>

        <!-- Text Slide 2 -->
        <div class="carousel-item">
          <h2 class="text-danger">PARA QUÊ?</h2>
          <ul class="list-unstyled">
            <li>Divulgar nacionalmente produtos hortifrutigranjeiros, facilitando a comercialização.</li>
            <li>Facilitar na busca de novos fornecedores.</li>
            <li>Auxiliar na formação de preços dos produtos.</li>
          </ul>
        </div>

        <!-- Text Slide 3 -->
        <div class="carousel-item">
          <h2 class="text-danger">COMO?</h2>
          <ul class="list-unstyled">
            <li>Para ser um usuário, basta fazer seu cadastro.</li>
            <li>Selecione o plano mais adequado para você e faça parte desse universo inovador na comercialização de seus produtos.</li>
            <li>Ou agende uma demonstração com nossos representantes pelo telefone (43) 3025-2595.</li>
          </ul>
        </div>
      </div>

      <!-- Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#textCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bg-danger rounded-circle" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#textCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon bg-danger rounded-circle" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>