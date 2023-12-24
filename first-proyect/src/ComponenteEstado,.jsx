import React, { useState } from 'react'

export const ComponenteEstado = () => {
	// let ciudad = "Luján";

	// function cambiarCiudad() {
	// 	ciudad = "Marcos Paz";
	// }

	// return (
	// 	<div>
	// 		{ciudad}
	// 		<button onClick={cambiarCiudad}>
	// 			Cambiar Ciudad
	// 		</button>
	// 	</div>
	// )

	const [ciudad, setCiudad] = useState("Luján");

	function cambiarCiudad(e) {
		// setCiudad("Marcos Paz");
		setCiudad(e.target.value);
	}

	return (
		<div>
			{ciudad} <br />
			{/* <button onClick={cambiarCiudad}>
				Cambiar Ciudad
			</button> */}
			<input type="text" onChange={cambiarCiudad}/>
		</div>
	)
}
