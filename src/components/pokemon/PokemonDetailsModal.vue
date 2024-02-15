<!-- PokemonDetailsModal.vue -->
<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>{{ selectedPokemon.name }}</h2>
      <img :src="getImagePath(selectedPokemon.name)" :alt="selectedPokemon.name + ' Image'" />
      <p>Classification: {{ selectedPokemon.classfication }}</p>
      <p>Type: {{ selectedPokemon.type1 }}{{ selectedPokemon.type2 ? ' / ' + selectedPokemon.type2 : '' }}</p>
      <p>Abilities: {{ selectedPokemon.abilities }}</p>
      <!-- Add more details as needed -->
      <p>Attack: {{selectedPokemon.attack}}</p>
      <p>SP Attack : {{selectedPokemon.sp_attack}}</p>
      <p>Defense: {{selectedPokemon.defense}}</p>
      <p>SP Defense: {{selectedPokemon.sp_defense}}</p>
      <p>Speed: {{selectedPokemon.speed}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedPokemon: Object
  },
  methods: {
    getImagePath(pokemonName) {
      // Assuming your images are stored in the 'public/images/' folder
      return 'images/' + pokemonName.toLowerCase() + '.png';
    },
    closeModal() {
      console.log('Closing modal');
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
/* Add your modal styles here */
.modal {
  display: block;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

</style>
