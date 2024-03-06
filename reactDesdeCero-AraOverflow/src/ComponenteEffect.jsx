import React, { useEffect, useState } from 'react'

export const ComponenteEffect = () => {
	const [nombre, setNombre] = useState("Leandro");
	const [apellido, setApellido] = useState("Jofré");

	function numeroRandom(min, max) {
		return Math.random() * (max - min) + min;
	}

	function cambiarFondo(e) {
		e.target.style.backgroundColor = `rgba(${numeroRandom(0, 255)}, ${numeroRandom(0, 255)}, ${numeroRandom(0, 255)}, 1)`
	}

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
			<h3>Usando el use Effect</h3>
			{nombre} {apellido} <br />
			<input type="text" onChange={cambiarNombre} onFocus={cambiarFondo}/>
			<button onClick={cambiarApellido}>Cambiar Apellido</button>
		</div>
	)
}
