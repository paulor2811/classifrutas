<!-- src/components/UserRegister/Register.vue -->
<template>
  <div class="register-container">
    <h2>Cadastro de Usuário</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" id="name" v-model="user.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.email" required>
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" id="password" v-model="user.password" required>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    registerUser() {
      // Lógica para registrar o usuário (por exemplo, enviar dados para a API)
      console.log(this.user);
      // Depois de registrar, talvez redirecionar para outra rota
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
