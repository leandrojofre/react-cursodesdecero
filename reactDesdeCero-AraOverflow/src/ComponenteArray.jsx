import React from 'react'

export const ComponenteArray = () => {
	const ARRAR_NUMEROS = [1,2,3,4,5];

	return (
		<>
			<h3>Componente Array</h3>
			<ul>
				{ARRAR_NUMEROS.map((elemento, key) => {
					return (<li key={key}>{elemento}</li>);
				})}
			</ul>
		</>
	)
}
