import { useEffect, useState } from "react";
import { Card, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fetchPokemonList } from "../Repository/RemoteRepository";
import { IPokemon } from "../Repository/interfaces";

const HomePage = () => {
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPokemonList().then((res) => setPokemon(res));
  }, []);

  const redirect = (each: IPokemon) => {
    navigate(`/details?id=${each.id}`);
  };

  return (
    <div className="home-page">
      <Typography
        sx={{ margin: "2rem auto", marginBottom: "0", width: "fit-content" }}
        variant="h4"
      >
        List Pokemon
      </Typography>

      <div
        className="cards-wrapper"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          margin: "0 auto",
          width: "70vw",
          padding: "2rem",
          paddingBottom: "10rem",
        }}
      >
        {pokemon.map((each, index) => (
          <div
            key={index}
            className="card-wrapper"
            style={{
              maxWidth: "30rem",
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
              marginBottom: "1rem",
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
                height: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {each.name}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
