// store/index.js
import { createStore } from 'vuex';
import data from '../assets/data/pokemon.json';

export default createStore({
    state: {
        pokemons: data,
        deckPokemons: [],
        isBattleInProgress: false,
        opponentPokemonList: [],
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
        startBattleAction({ commit, state }) {
            // Check if a battle is not already in progress
            if (!state.isBattleInProgress) {
                // Set the flag to indicate that a battle is in progress
                commit('setBattleInProgress', true);

                // Fetch a random opponent Pokemon (replace with your logic)
                const randomOpponent = state.opponentPokemonList[Math.floor(Math.random() * state.opponentPokemonList.length)];

                // Set the opponent Pokemon
                commit('setOpponentPokemon', randomOpponent);

                // You can add additional battle logic here

                // After the battle is complete, reset the state
                commit('setBattleInProgress', false);
                commit('setOpponentPokemon', null);
            }
        },
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
        opponentPokemon: (state) => state.opponentPokemon,
    },
});
