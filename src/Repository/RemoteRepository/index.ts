import axios from "axios";
import { IPokemon, IPokemonDetail } from "../interfaces";

const fetchPokemonList = async () => {
  const response = await axios.get(import.meta.env.VITE_REACT_APP_BASE_URL);
  const { results } = response.data;
  const pokemonWithDetails = await Promise.all(
    results.map(async (pokemon: IPokemon) => {
      const id = pokemon.url.replace(/\/+$/, "").split("/").pop();
      const pokemonResponse = await axios.get(pokemon.url);
      const { data } = pokemonResponse;
      return {
        ...pokemon,
        id,
        image: data.sprites.other["official-artwork"].front_default,
      };
    })
  );
  return pokemonWithDetails;
};

const fetchPokemonDetail = async (id: string) => {
  const res = await axios.get(import.meta.env.VITE_REACT_APP_BASE_URL + id);
  const moves = res.data.moves.map((each: { move: { name: string } }) => ({
    name: each.move.name,
  }));

  const pokemonDetails: IPokemonDetail = {
    id: id!,
    name: res.data.name,
    height: res.data.height,
    weight: res.data.weight,
    official: res.data.sprites.other["official-artwork"].front_default,
    sprite: res.data.sprites.front_default,
    move: moves,
  };
  return pokemonDetails;
};

export { fetchPokemonDetail, fetchPokemonList };
