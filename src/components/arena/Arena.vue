<!-- Arena.vue -->
<template>
  <div>
    <h2>Arena</h2>

    <!-- Display Pokemon from your deck -->
    <div>
      <h3>Your Deck</h3>
      <div class="card-container">
        <div v-for="pokemon in deckPokemons" :key="pokemon.pokedex_number" class="card">
          <!-- Display your deck Pokemon details, buttons, etc. -->
          <pokemon-card :pokemon="pokemon" @show-details="showDetailsModal"></pokemon-card>
        </div>
      </div>
    </div>

    <div class="vs">
      <h3>VS</h3>
    </div>

    <!-- Display 5 additional random Pokemon -->
    <div>
      <h3>Opponent's Pokemon</h3>
      <div class="card-container">
        <div v-for="pokemon in randomOpponentPokemon" :key="pokemon.pokedex_number" class="card">
          <!-- Display opponent's Pokemon details, buttons, etc. -->
          <pokemon-card :pokemon="pokemon" @show-details="showDetailsModal"></pokemon-card>
        </div>
      </div>
    </div>

    <!-- Button to start a battle -->
    <button @click="startBattle" :disabled="isBattleInProgress">Start Battle</button>

    <!-- Button to navigate to My Deck -->
    <router-link to="/my-deck">
      <button>Go to My Deck</button>
    </router-link>
  </div>
</template>

<script>

import { mapState, mapActions, mapGetters } from 'vuex';
import PokemonCard from "@/components/pokemon/PokemonCard.vue";

export default {
  components: {PokemonCard},
  data() {
    return {
      showDetailsModal: false, // Define showDetailsModal if needed
    };
  },
  computed: {
    ...mapState(['pokemons', 'deckPokemons', 'isBattleInProgress', 'opponentPokemonList']),
    randomOpponentPokemon() {
      // Get 5 random opponent Pokemon from the list
      const shuffledOpponents = this.shuffleArray(this.pokemons);
      return shuffledOpponents.slice(0, 5);
    },
  },
  methods: {
    ...mapActions(['startBattleAction']),
    startBattle() {
      this.startBattleAction();
    },
    shuffleArray(array) {
      // Function to shuffle an array (Fisher-Yates algorithm)
      let currentIndex = array.length;
      let randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap elements
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }

      return array;
    },
  },
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

.vs {
  margin-top: 30px;
  margin-bottom: 30px;
}

</style>
