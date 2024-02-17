# pokedex

![](src/assets/logo_pokemon.png)

## Description du project

À partir des ressources disponibles dans le dossier data et des images publics, on implémente une application permettant d'afficher un pokedex.

## Consignes

Un site web permettant de:
- lister l'ensemble des pokemons
- visualiser un pokemon
- composer un deck de 5 pokémons maximum

Un utilisateur aura un deck et aura la possibilité de rajouter un pokemon (à la limite de 5) dans son deck.
Une page Arène est défini, au sein de cette page, l'utilisateur peut voir une liste de 5 pokémons aléatoirements définis issus du pokedex, ainsi que les 5 pokémons présents au sein de son deck.


1. **Vue Pokedex** :
   - Description : La vue principale de l'application, le Pokedex, offre une liste complète de tous les Pokémon disponibles (802). Les utilisateurs peuvent accéder à la liste complète, obtenir un aperçu rapide des caractéristiques de chaque Pokémon, et accéder à des fonctionnalités avancées telles que l'ajout/suppression de Pokémon du deck. La vue permet également de trier les Pokémon par types d'œuf, taille, poids, expérience, etc., ainsi que d'utiliser une barre de recherche pour trouver un Pokémon spécifique.

2. **Vue Pokémon** :
    - Description : Cette vue permet d'accéder à toutes les statistiques détaillées d'un Pokémon. Les utilisateurs peuvent explorer des informations approfondies, telles que les statistiques de base, la performance contre d'autres types, la taille, le poids, la classification, etc. Des images attrayantes sont fournies, et en l'absence d'une image spécifique, un emplacement réservé visuel est affiché. Les utilisateurs peuvent choisir un Pokémon parmi les 804 disponibles.

3. **Vue Deck** :
    - Description : La vue Deck permet simplement d'afficher le deck de l'utilisateur. Elle offre un aperçu des Pokémon actuellement présents dans le deck de l'utilisateur, conformément aux spécifications du cahier des charges.

4. **Vue Arène** :
   - Description : Cette vue propose une expérience immersive où les utilisateurs peuvent visualiser une liste aléatoire de cinq Pokémons tirés du Pokedex, ainsi que les cinq Pokémons actuellement présents dans leur deck. Elle offre une anticipation visuelle et stratégique pour les affrontements futurs au sein de l'arène.( la vue arène  il ne faut  pas que on fasse  la simulation )

   
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
