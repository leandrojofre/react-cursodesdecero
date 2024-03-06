import React, { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export const ComponenteForm = () => {
	const ciudadUrl = useParams();
	
	const objUrl = {
		ciudad: ciudadUrl.ciudad,
		provincia: "",
		pais: "",
	};

	const [EstadoCiudad, setEstadoCiudad] = useState(objUrl);
	const divForm = useRef();
	const redirigir = useNavigate();

	useEffect(() => {
		setEstadoCiudad(objUrl);
	}, [ciudadUrl.ciudad]);
	
	const recibirForm = (e) => {
		e.preventDefault();
		
		let objetoForm = {
			ciudad: e.target.ciudad.value,
			provincia: e.target.provincia.value,
			pais: e.target.pais.value
		}
		let url = "/form/" + objetoForm.ciudad;

		setEstadoCiudad(objetoForm);
		redirigir(url);

		divForm.current.classList.add("div-form");
	}

	return (
		<div ref={divForm}>
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
