import React, { useState } from "react"

export const ComponenteForm = () => {
	const [estadoCiudad, setEstadoCiudad] = useState({});

	const recibidoForm = (e) => {
		e.preventDefault();

		let objetoForm = {
			ciudad: e.target.ciudad.value,
			provincia: e.target.provincia.value,
			pais: e.target.pais.value
		}

		setEstadoCiudad(objetoForm);
	}

	return (
		<div>
			<h2>Componente Form</h2>
			<h3>La ciudad es {estadoCiudad.ciudad}</h3>
			<h3>La provincia es {estadoCiudad.provincia}</h3>
			<h3>El pais es {estadoCiudad.pais}</h3>
			<form onSubmit={recibidoForm}>
				<input type="text" name="ciudad" placeholder="Ciudad" />
				<input type="text" name="provincia" placeholder="Provincia" />
				<input type="text" name="pais" placeholder="País" />
				<input type="submit" />
			</form>
		</div>
	)
}
