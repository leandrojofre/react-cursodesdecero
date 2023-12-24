import React, { useEffect, useState } from 'react'

export const ComponenteEffect = () => {
	const [nombre, setNombre] = useState("Leandro");
	const [apellido, setApellido] = useState("Jofré");

	// Corchetes genera que se ejecute solo al cargarse
	useEffect(() => {
		console.log("Componente cargado o modificado");
	}, []);

	// Pasar un argumento genera que se ejecute solo en cambios del argumento
	useEffect(() => {
		console.log("Componente cargado o modificado");
	}, [nombre]);

	function cambiarNombre(e) {
		setNombre(e.target.value);
	}

	function cambiarApellido(e) {
		setApellido("Joestar");
	}

	return (
		<div>
			<h2>Usando el use Effect</h2>
			{nombre} {apellido} <br />
			<input type="text" onChange={cambiarNombre} />
			<button onClick={cambiarApellido}>Cambiar Apellido</button>
		</div>
	)
}
