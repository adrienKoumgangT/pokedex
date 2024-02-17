<!-- PokemonCardList.vue -->
<template>
  <div>
    <div>
      <img src="@/assets/logo_pokemon.png" alt="Logo-pokemon" class="logo"/>
    </div>
    <h2>Pokémon List</h2>
    <div class="filters">
      <div class="filter-group">
        <label class="filter filer-name">
          Name:
          <input v-model="nameFilter" @input="applyFilters" />
        </label>
      </div>
      <div class="filter-group">
        <label class="filter filter-classification">
          Classification:
          <input v-model="classificationFilter" @input="applyFilters" />
        </label>
      </div>
      <div class="filter-group">
        <label class="filter filter-type">
          Type:
          <select v-model="typeFilter" @change="applyFilters">
            <option value="">All</option>
            <option v-for="type in uniqueTypes" :key="type" :value="type">{{ type }}</option>
          </select>
        </label>
      </div>
    </div>
    <div class="card-container">
      <div v-for="pokemon in filteredPokemons" :key="pokemon.pokedex_number" class="card">
        <pokemon-card :pokemon="pokemon" @add-to-deck="addToDeck" @remove-from-deck="removeFromDeck" @show-details="showDetailsModal"></pokemon-card>
      </div>
    </div>

    <div>
      <button @click="prevPage" :disabled="currentPage === 1">Previous Page</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next Page</button>
    </div>

    <!-- Pokemon details modal -->
    <pokemon-details-modal v-if="isModalVisible" :selected-pokemon="selectedPokemon" :deck-pokemons="selectedPokemons" @close="closeDetailsModal" @add-to-deck="addToDeck" @remove-from-deck="removeFromDeck"></pokemon-details-modal>

    <!-- Button to navigate to My Deck -->
    <div class="button-deck">
      <router-link to="/my-deck">
        <button>Go to My Deck</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PokemonCard from './PokemonCard.vue';
import PokemonDetailsModal from "./PokemonDetailsModal.vue";


export default {
  components: {
    PokemonDetailsModal,
    PokemonCard
  },
  data() {
    return {
      itemsPerPage: 6,
      currentPage: 1,
      nameFilter: '',
      classificationFilter: '',
      typeFilter: '',
      isModalVisible: false,
      selectedPokemon: null,
      selectedPokemons: []  // New array to store selected Pokémon
    };
  },
  computed: {
    ...mapState(['pokemons']),
    totalPages() {
      return Math.ceil(this.pokemons.length / this.itemsPerPage);
    },
    paginatedPokemons() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.pokemons.slice(start, end);
    },
    uniqueTypes() {
      const types = new Set();
      this.pokemons.forEach(pokemon => {
        if (pokemon.type1) types.add(pokemon.type1);
        if (pokemon.type2) types.add(pokemon.type2);
      });
      return Array.from(types);
    },
    filteredPokemons() {
      let filteredList = this.pokemons;

      if (this.nameFilter) {
        const lowerCaseNameFilter = this.nameFilter.toLowerCase();
        filteredList = filteredList.filter(pokemon => pokemon.name.toLowerCase().includes(lowerCaseNameFilter));
      }

      if (this.classificationFilter) {
        const lowerCaseClassFilter = this.classificationFilter.toLowerCase();
        filteredList = filteredList.filter(pokemon => pokemon.classfication.toLowerCase().includes(lowerCaseClassFilter));
      }

      if (this.typeFilter) {
        filteredList = filteredList.filter(pokemon => pokemon.type1 === this.typeFilter || pokemon.type2 === this.typeFilter);
      }

      return filteredList.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
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
    },
    applyFilters() {
      // Triggered when filter values change
      // This method updates the filteredPokemons computed property
    },
    showDetailsModal(pokemon) {
      console.log('showDetailsModal called');
      this.selectedPokemon = pokemon;
      this.isModalVisible = true;
    },
    closeDetailsModal() {
      console.log('closeDetailsModal called');
      this.isModalVisible = false;
    },
    addToDeck(pokemon) {
      // Add the selected Pokemon to the deck
      this.selectedPokemons.push(pokemon);
    },
    removeFromDeck(pokemon) {
      // Remove the selected Pokemon from the deck
      const index = this.selectedPokemons.indexOf(pokemon);
      if (index !== -1) {
        this.selectedPokemons.splice(index, 1);
      }
    },
    viewDeck() {
      this.$router.push({ name: 'my-deck' });
    }
  }
};
</script>

<style scoped>
img.logo {
  display: block;
  width: 30%;
  margin: 20px auto;
}

.filters {
  margin: 20px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.filter-group {
  display: flex;
  margin-left: 5px;
  margin-right: 5px;
}

.filter {
  margin-left: 5px;
  margin-right: 5px;
}

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

.button-deck {
  margin: 30px 20px;
}
</style>
