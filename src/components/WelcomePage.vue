<!-- WelcomePage.vue -->
<template>
  <div class="welcome-page">
    <img src="@/assets/logo_pokemon.png" alt="Logo-pokemon" />

    <h1>Welcome to the Pokémon App</h1>
    <br>
    <router-link to="/pokemon-list">View Pokémon List</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.welcome-page {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

img {
  display: block;
  width: 30%;
  margin: 20px auto;
}
</style>