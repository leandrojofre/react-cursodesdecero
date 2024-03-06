import React, { useContext } from 'react'
import { CiudadContextProvider } from './CiudadContextProvider.jsx'

export const ComponenteContext = () => {
	const {ciudadState, setCiudad} = useContext(CiudadContextProvider);

	const modificarCiudad = (e) => {
		e.preventDefault();
		
		const ciudad = {
			nombre: e.target.nombre.value,
			provincia: e.target.provincia.value,
			pais: e.target.pais.value
		}

		setCiudad(ciudad);
	}

	return (
		<>
			<h3>ComponenteContext</h3>
			{ciudadState.nombre}<br />
			<form onSubmit={modificarCiudad}>
				<input type="text" name="nombre" placeholder="Ciudad" />
				<input type="text" name="provincia" placeholder="Provincia" />
				<input type="text" name="pais" placeholder="Pais" />
				<input type="submit" value="Enviar" />
			</form>
		</>
	)
}
