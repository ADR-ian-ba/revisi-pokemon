import { useEffect, useState } from 'react';
import { Card, CardMedia, Typography } from '@mui/material';
import IPokemon from '../interfaces/IPokemon';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      const response = await axios.get(import.meta.env.VITE_BASE_URL);
      const { results } = response.data;
      const pokemonExtractId: IPokemon[] = results.map((pokemon: any) => {
        const id = pokemon.url.replace(/\/+$/, "").split("/").pop() 
=======
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
      const { results } = response.data
      const pokemonWithDetails = await Promise.all(results.map(async (pokemon) => {
        const id = pokemon.url.replace(/\/+$/, "").split("/").pop()
        const pokemonResponse = await axios.get(pokemon.url)
        const { data } = pokemonResponse
>>>>>>> 398630d70c9757dc6e19d33da82b043732b29406
=======
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      const { results } = response.data;
      const pokemonWithDetails = await Promise.all(results.map(async (pokemon) => {
        const id = pokemon.url.replace(/\/+$/, "").split("/").pop();
        const pokemonResponse = await axios.get(pokemon.url);
        const { data } = pokemonResponse;
>>>>>>> parent of ea423ab (pretty)
=======
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      const { results } = response.data;
      const pokemonWithDetails = await Promise.all(results.map(async (pokemon) => {
        const id = pokemon.url.replace(/\/+$/, "").split("/").pop();
        const pokemonResponse = await axios.get(pokemon.url);
        const { data } = pokemonResponse;
>>>>>>> parent of ea423ab (pretty)
        return {
          ...pokemon,
          id,
          image: data.sprites.other['official-artwork'].front_default,
        };
      }));
      setPokemon(pokemonWithDetails);
    };
    fetchData();
  }, []);

  const redirect = (each: IPokemon) => {
    navigate(`/details?id=${each.id}`);
  };

  return (
    <div className="home-page">
      <Typography
        sx={{ margin: '0 auto', marginBottom: '1rem', width: 'fit-content' }}
        variant="h4"
      >
        List Pokemon
      </Typography>

      <div
        className="cards-wrapper"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          margin: '0 auto',
          width: '70vw',
          padding: '2rem',
          paddingBottom:'10rem'
        }}
      >
{pokemon.map((each, index) => (
  <div
    key={index}
    className="card-wrapper"
    style={{
      maxWidth: '30rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '.5rem',
      marginBottom: '1rem', 
    }}
  >
    <Card variant="outlined">
      <CardMedia
        component="img"
        height="200" 
        image={each.image}
        alt={each.name} 
      />
    </Card>
    <Card
      onClick={() => redirect(each)}
      variant="outlined"
      sx={{
        height: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      {each.name}
    </Card>
  </div>
))}
      </div>
        {/* <button onClick={()=> console.log(pokemon)}>test</button> */}
    </div>
  );
};

export default HomePage;
