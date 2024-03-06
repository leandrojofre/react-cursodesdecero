import React from 'react'
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

export const RutasGenerales = () => {
	return (
		<>
			<h2>RutasGenerales</h2>
			<BrowserRouter>
				<nav>
					<ul>
						<li><NavLink to={'/'}>MiPrimerComponente</NavLink></li>
						<li><NavLink to={'/array'}>ComponenteArray</NavLink></li>
						<li><NavLink to={'/props'}>ComponenteProps</NavLink></li>
						<li><NavLink to={'/eventos'}>ComponenteEventos</NavLink></li>
						<li><NavLink to={'/estado'}>ComponenteEstado</NavLink></li>
						<li><NavLink to={'/effect'}>ComponenteEffect</NavLink></li>
						<li><NavLink to={'/fetch'}>ComponenteFetch</NavLink></li>
						<li><NavLink to={'/form'}>ComponenteForm</NavLink></li>
					</ul>
				</nav>

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
					<Route path='*' element={<Componente404 />}/>
				</Routes>
			</BrowserRouter>
		</>
	)
}
