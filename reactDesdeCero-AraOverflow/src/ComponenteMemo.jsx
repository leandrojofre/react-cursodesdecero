import React, { useMemo, useState } from 'react'

export const ComponenteMemo = () => {
	const [saludo, setSaludo] = useState("Hola");
	const [arrayNum, setArrayNum] = useState([1, 2, 3, 4, 5]);

	const saludar = () => {
		if (saludo === "Hola") setSaludo("Adios");
		else setSaludo("Hola");
	}

	const mostrarArray = () => { useMemo(() => {
			for (let i = 0; i < arrayNum.length; i++) {
				const element = arrayNum[i];
				setTimeout(() => console.log(element), i * 1000);
			}
		}, [arrayNum]);
	}

	function numeroRandom(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	const cambiarArray = () => {
		let array = [
			numeroRandom(0, 10),
			numeroRandom(0, 10),
			numeroRandom(0, 10),
			numeroRandom(0, 10),
			numeroRandom(0, 10)
		]
		setArrayNum(array);
	}

	return (
		<>
			<h3>ComponenteMemo</h3>
			{saludo}<br/>
			{mostrarArray()}<br/>
			<button onClick={saludar}>Saludar</button>
			<button onClick={cambiarArray}>Cambiar array</button>
		</>
	)
}
