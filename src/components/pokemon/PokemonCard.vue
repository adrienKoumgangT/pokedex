<!-- PokemonCard.vue -->
<template>
  <div class="card">
    <h2>{{ pokemon.name }}</h2>
    <img :src="getImagePath(pokemon.name)" :alt="pokemon.name + ' Image'" />
    <p>Classification: {{ pokemon.classfication }}</p>
    <p>Type: {{ pokemon.type1 }}{{ pokemon.type2 ? ' / ' + pokemon.type2 : '' }}</p>
    <!-- Add more properties as needed -->
  </div>
</template>

<script>
export default {
  props: {
    pokemon: Object
  },
  methods: {
    getImagePath(pokemonName) {
      // Assuming your images are stored in the 'public/images/' folder
      return 'images/' + pokemonName.toLowerCase() + '.png';
    }
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 200px;
  display: inline-block;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
