<!-- PokemonCard.vue -->
<template>
  <div class="card" @click="openDetailsModal">
    <h2>{{ pokemon.name }}</h2>
    <img :src="getImagePath(pokemon.name)" :alt="pokemon.name + ' Image'" @error="handleImageError" />
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
    },
    handleImageError(event) {
      // Function to handle image loading errors (e.g., image not found)
      event.target.src = 'placeholders/placeholder01.png';
      event.target.alt = 'Image not found';
    },
    openDetailsModal() {
      console.log("openDetailsModal");
      this.$emit('show-details', this.pokemon);
    }
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 250px;
  height: 260px;
  display: inline-block;
  cursor: pointer;
}

img {
  max-width: 100%;
  height: auto;
}

img:hover {
  transform: scale(1.5);
}

</style>
