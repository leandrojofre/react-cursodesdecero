import React, { useState } from "react"

export const ComponenteForm = () => {
	const [EstadoCiudad, setEstadoCiudad] = useState({});

	const recibirForm = (e) => {
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
			<h3>Componente Form</h3>
			<h4>La ciudad es {EstadoCiudad.ciudad}</h4>
			<h4>La provincia es {EstadoCiudad.provincia}</h4>
			<h4>El pais es {EstadoCiudad.pais}</h4>
			<form onSubmit={recibirForm}>
				<input type="text" name="ciudad" placeholder="Ciudad" />
				<input type="text" name="provincia" placeholder="Provincia" />
				<input type="text" name="pais" placeholder="País" />
				<input type="submit" />
			</form>
		</div>
	)
}
