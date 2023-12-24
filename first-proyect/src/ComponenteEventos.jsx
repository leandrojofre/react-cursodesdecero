import React from 'react'

export const ComponenteEventos = () => {
	const PULSAR = () => {
		alert("Tocaste el botón");
	}

	return (
		<>
			<button onClick={PULSAR}>
				TOCA ACA
			</button>
		</>
	)
}
