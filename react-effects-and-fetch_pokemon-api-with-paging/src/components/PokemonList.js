import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);

  const handlePreviousPage = () => {
    if (previous) {
      setOffset(offset - 20);
    }
  };

  const handleNextPage = () => {
    if (next) {
      setOffset(offset + 20);
    }
  };

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
        );
        const data = await response.json();
        setPokemon(data.results);
        setPrevious(data.previous);
        setNext(data.next);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  return (
    <main>
      <button onClick={handlePreviousPage} type="button" disabled={!previous}>
        Previous Page
      </button>
      <button onClick={handleNextPage} type="button" disabled={!next}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
