<template>
  <div id="app">
    <BarraSuperior />
    <Cabecalho />
    <VideoSection />
    <MenuBusca />
    <Categorias />
    <Anuncios />
    <MaisBuscados />
    <DiretoRoca />
    <TemporadaPessego />
    <MercadoFlores />
    <Insumos />


    <!-- Footer -->
    <footer class="bg-dark text-white py-4 mt-5">
      <div class="container text-center">
        <p>© 2024 ClassiFrutas - Todos os direitos reservados</p>
      </div>
    </footer>
  </div>
</template>

<script>

// Importando o componente
import BarraSuperior from './components/BarraSuperior.vue';
import Cabecalho from "./components/Cabecalho.vue";
import VideoSection from "./components/VideoSection.vue";
import MenuBusca from "./components/MenuBusca.vue";
import Categorias from "./components/Categorias.vue";
import Anuncios from "./components/Anuncios.vue";
import MaisBuscados from "./components/MaisBuscados.vue";
import DiretoRoca from "./components/DiretoRoca.vue";
import TemporadaPessego from "./components/TemporadaPessego.vue";
import MercadoFlores from "./components/MercadoFlores.vue";
import Insumos from "./components/Insumos.vue";

let currentController = new AbortController();
export default {
  name: "App",
  components: {
    BarraSuperior, // Registrando o componente para ser usado
    Cabecalho,
    VideoSection,
    MenuBusca,
    Categorias,
    Anuncios,
    MaisBuscados,
    DiretoRoca,
    TemporadaPessego,
    MercadoFlores,
    Insumos,
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
        const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, { signal });
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

<style scoped>

</style>