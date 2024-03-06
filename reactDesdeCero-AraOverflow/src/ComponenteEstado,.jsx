import React, { useState } from 'react'

export const ComponenteEstado = () => {
	const [ciudad, setCiudad] = useState("Luján");

	function cambiarCiudad(e) {
		setCiudad(e.target.value);
	}

	return (
		<div>
			<h3>Componente Estado</h3>
			{ciudad}<br/>
			<input type="text" onChange={cambiarCiudad}/>
		</div>
	)
}
