import React from 'react'

export const ComponenteArray = () => {
	const ARRAR_NUMEROS = [1,2,3,4,5];

	return (
		<ul>
			{ARRAR_NUMEROS.map((elemento, key) => {
				return(
					<li key={key}>{elemento}</li>
				);
			})}
		</ul>
	)
}
