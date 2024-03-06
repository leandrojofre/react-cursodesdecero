import React, { useContext } from 'react'
import { CiudadContextProvider } from './CiudadContextProvider.jsx'

export const MiPrimerComponente = () => {
	let numero = 1;
	const {ciudadState} = useContext(CiudadContextProvider);

	return (
		<>
			<h3>Numero: {numero} - La ciudad es: {ciudadState.nombre}</h3>
		</>
	)
}
