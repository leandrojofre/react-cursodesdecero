import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { MiPrimerComponente } from './MiPrimerComponente.jsx'
import { ComponenteArray } from './ComponenteArray'
import { ComponenteProps } from './ComponenteProps'
import { ComponenteEventos } from './ComponenteEventos'
import { ComponenteEstado } from './ComponenteEstado,'
import { ComponenteEffect } from './ComponenteEffect'
import { ComponenteFetch } from './ComponenteFetch'
import { ComponenteForm } from './ComponenteForm'
import { Componente404 } from './Componente404'
import { ComponenteMemo } from './ComponenteMemo.jsx'
import { CiudadContextProvider } from './CiudadContextProvider.jsx'
import { ComponenteContext } from './ComponenteContext.jsx'

export const RutasGenerales = () => {

	const ciudad = {
		nombre: "",
		provincia: "",
		pais: ""
	}
	const [ciudadState, setCiudad] = useState(ciudad);

	return (
		<>
			<h2>RutasGenerales</h2>
			<BrowserRouter>
				<nav>
					<ul>
						<li><NavLink to={'/'}>Mi Primer Componente</NavLink></li>
						<li><NavLink to={'/array'}>Componente Array</NavLink></li>
						<li><NavLink to={'/props'}>Componente Props</NavLink></li>
						<li><NavLink to={'/eventos'}>Componente Eventos</NavLink></li>
						<li><NavLink to={'/estado'}>Componente Estado</NavLink></li>
						<li><NavLink to={'/effect'}>Componente Effect</NavLink></li>
						<li><NavLink to={'/fetch'}>Componente Fetch</NavLink></li>
						<li><NavLink to={'/form'}>Componente Form</NavLink></li>
						<li><NavLink to={'/form/Luján'}>Componente Form - Use Param</NavLink></li>
						<li><NavLink to={'/memo'}>Componente Memo</NavLink></li>
						<li><NavLink to={'/context'}>Componente Context</NavLink></li>
					</ul>
				</nav>
				<CiudadContextProvider.Provider value={{ciudadState, setCiudad}}>
					<Routes>
						<Route path='/' element={<MiPrimerComponente />}/>
						<Route path='/array' element={<ComponenteArray />}/>
						<Route path='/props' element={
							<ComponenteProps ciudad="Córdoba" provincia="Córdoba" codPostal={1234}>
								<h2>España</h2>
							</ ComponenteProps>
						} />
						<Route path='/eventos' element={<ComponenteEventos />}/>
						<Route path='/estado' element={<ComponenteEstado />}/>
						<Route path='/effect' element={<ComponenteEffect />}/>
						<Route path='/fetch' element={<ComponenteFetch />}/>
						<Route path='/form' element={<ComponenteForm />}/>
						<Route path='/form/:ciudad' element={<ComponenteForm />}/>
						<Route path='/memo' element={<ComponenteMemo />}/>
						<Route path='/context' element={<ComponenteContext />}/>
						<Route path='*' element={<Componente404 />}/>
					</Routes>
				</CiudadContextProvider.Provider>
			</BrowserRouter>
		</>
	)
}
