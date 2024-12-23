<template>
  <div id="app">
    <CompBarraSuperior />
    <CompCabecalho />
    <CompVideoSection />
    <CompMenuBusca />
    <CompCategorias />
    <CompAnuncio />
    <CompMaisBuscados />
    <CompDiretoRoca />
    <CompTemporadaPessego />
    <CompMercadoFlores />
    <CompInsumos />
    <CompParceiros />

    <router-view></router-view>

    <!-- Footer -->
    <footer class="bg-dark text-white py-4 mt-5">
      <div class="container text-center">
        <p>© 2024 ClassiFrutas - Todos os direitos reservados</p>
      </div>
    </footer>
  </div>
</template>

<script>
import CompBarraSuperior from './components/Home/BarraSuperior.vue';
import CompCabecalho from "./components/Home/Cabecalho.vue";
import CompVideoSection from "./components/Home/VideoSection.vue";
import CompMenuBusca from "./components/Home/MenuBusca.vue";
import CompCategorias from "./components/Home/Categorias.vue";
import CompAnuncio from "./components/Home/Anuncios.vue";
import CompMaisBuscados from "./components/Home/MaisBuscados.vue";
import CompDiretoRoca from "./components/Home/DiretoRoca.vue";
import CompTemporadaPessego from "./components/Home/TemporadaPessego.vue";
import CompMercadoFlores from "./components/Home/MercadoFlores.vue";
import CompInsumos from "./components/Home/Insumos.vue";
import CompParceiros from "./components/Home/Parceiros.vue";

let currentController = new AbortController();
export default {
  name: "App",
  components: {
    CompBarraSuperior,
    CompCabecalho,
    CompVideoSection,
    CompMenuBusca,
    CompCategorias,
    CompAnuncio,
    CompMaisBuscados,
    CompDiretoRoca,
    CompTemporadaPessego,
    CompMercadoFlores,
    CompInsumos,
    CompParceiros,
  },
  data() {
    return {
      message: "Aguardando carregamento...",
      loading: false,
      activeTab: '',
    };
  },
  methods: {
    handleRequest(endpoint, tab) {
      // Abortar requisição anterior, se existir
      if (currentController) {
        currentController.abort();
      }

      // Criar novo controlador para a nova requisição
      currentController = new AbortController();
      this.fetchData(endpoint, tab, currentController.signal);
    },
    async fetchData(endpoint, tab, signal) {
      this.loading = true;
      this.activeTab = tab;
      this.message = "Aguardando carregamento...";

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {signal});
        const data = await response.json();

        // Simula tempo de carregamento
        setTimeout(() => {
          this.message = data.message;
          this.loading = false;
        }, 1000);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log("Requisição abortada.");
        } else {
          console.error("Erro ao buscar a API:", error);
          this.message = "Erro ao buscar a API.";
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style src="./style.css"></style>
