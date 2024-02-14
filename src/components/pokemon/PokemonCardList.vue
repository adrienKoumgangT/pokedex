<!-- PokemonCardList.vue -->
<template>
  <div>
    <h2>Pokémon List</h2>
    <div class="card-container">
      <div v-for="pokemon in paginatedPokemons" :key="pokemon.pokedex_number" class="card">
        <pokemon-card :pokemon="pokemon"></pokemon-card>
      </div>
    </div>
    <div>
      <button @click="prevPage" :disabled="currentPage === 1">Previous Page</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next Page</button>
    </div>
  </div>
</template>

<script>
import PokemonCard from './PokemonCard.vue';
import data from '../../assets/data/pokemon.json';


export default {
  components: {
    PokemonCard
  },
  data() {
    return {
      pokemons: data, // Replace with your data
      itemsPerPage: 9,
      currentPage: 1
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.pokemons.length / this.itemsPerPage);
    },
    paginatedPokemons() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.pokemons.slice(start, end);
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  flex: 0 0 calc(33.33% - 10px); /* Adjust the width and margin based on your design */
  margin-bottom: 20px; /* Adjust the margin based on your design */
  box-sizing: border-box;
}

@media (max-width: 992px) {
  .card {
    flex: 0 0 calc(50% - 10px);
  }
}

@media (max-width: 768px) {
  .card {
    flex: 0 0 calc(100% - 10px);
  }
}
</style>
