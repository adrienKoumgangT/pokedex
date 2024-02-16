// store/index.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        deckPokemons: [],
    },
    mutations: {
        addToDeck(state, pokemon) {
            // Add a Pokemon to the deck
            state.deckPokemons.push(pokemon);
        },
        removeFromDeck(state, pokemon) {
            // Remove a Pokemon from the deck
            const index = state.deckPokemons.findIndex(p => p === pokemon);
            if (index !== -1) {
                state.deckPokemons.splice(index, 1);
            }
        },
    },
    actions: {
        // Your actions to perform asynchronous operations
    },
    getters: {
        totalDeckPokemons: state => {
            // Getter to calculate the total number of Pokemon in the deck
            return state.deckPokemons.length;
        },
        deckPokemonNames: state => {
            // Getter to retrieve an array of Pokemon names in the deck
            return state.deckPokemons.map(pokemon => pokemon.name);
        },
    },
});
