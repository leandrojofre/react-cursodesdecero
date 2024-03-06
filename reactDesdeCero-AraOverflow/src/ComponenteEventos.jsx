import React from 'react'

export const ComponenteEventos = () => {
	const pulsar = () => {
		alert("Tocaste el botón");
	}

	return (
		<>
			<h3>Componente Eventos</h3>
			<button onClick={pulsar}>
				TOCA ACA
			</button>
		</>
	)
}
