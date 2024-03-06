import React, { useEffect, useState } from 'react'

export const ComponenteFetch = () => {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		llamadaApi();
	}, []);

	const llamadaApi = async () => {
		const peticion = await fetch('https://pokeapi.co/api/v2/pokemon/');
		const {results} = await peticion.json();

		setPokemons(results);
	}

	//{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"}

	return (
		<>
			<h3>Componente Fetch</h3>
			<ul>
				{pokemons.map(pokemon => {
					return (
						<li key={pokemon.url}>{pokemon.name}</li>
					)
				})}
			</ul>
		</>
	)
}
