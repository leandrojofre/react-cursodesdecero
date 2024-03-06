import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MiPrimerComponente } from './MiPrimerComponente.jsx'
import { ComponenteArray } from './ComponenteArray.jsx'
import { ComponenteProps } from './ComponenteProps.jsx'
import { ComponenteEventos } from './ComponenteEventos.jsx'
import { ComponenteEstado } from './ComponenteEstado,.jsx'
import { ComponenteEffect } from './ComponenteEffect.jsx'
import { ComponenteFetch } from './ComponenteFetch.jsx'
import { ComponenteForm } from './ComponenteForm.jsx'
import { RutasGenerales } from './RutasGenerales.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RutasGenerales></RutasGenerales>
    {/* <MiPrimerComponente />
    <ComponenteArray />
    <ComponenteProps ciudad="Córdoba" provincia="Córdoba" codPostal={1234}>
      <h2>España</h2>
    </ ComponenteProps>
    <ComponenteEventos />
    <ComponenteEstado />
    <ComponenteEffect />
    <ComponenteFetch />
    <ComponenteForm /> */}
  </React.StrictMode>,
)
