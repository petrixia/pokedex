const pokeList = document.querySelector("#pokedex");
// const loadMoreCTA = document.querySelector('#loadMore')

const pokeMax = 151;
const limit = 10;
let offset = 0;

function convertPokeLi(pokemon) {
  return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemons.types
                      .map((type) => `<li class="type ${type}">${type}</li>`)
                      .join("")}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}" />
            </div>
        </li>
    `
}

