
    };
    fetchData()
  }, [])

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const promises = pokemon.map(pokemon =>
        axios.get(pokemon.url).then(response => {
          const { data } = response;
          return {
            ...pokemon, 
            image: data.sprites.other['official-artwork'].front_default,
          };
        })
      );

      const detailedPokemon = await Promise.all(promises);
      setPokemon(detailedPokemon);
    };

    if (pokemon.length > 0) {
      fetchPokemonDetails();
    }
  }, [pokemon]);

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
<<<<<<< HEAD
        <button onClick={()=> console.log(pokemon)}>test</button>
=======
>>>>>>> test
    </div>
  );
};

export default RevisedHome;
