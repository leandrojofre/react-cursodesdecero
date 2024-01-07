import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MiPrimerComponente } from './MiPrimerComponente.jsx'
import { ComponenteArray } from './ComponenteArray.jsx'
import { ComponenteProps } from './ComponenteProps.jsx'
import { ComponenteEventos } from './ComponenteEventos.jsx'
import { ComponenteEstado } from './ComponenteEstado,.jsx'
import { ComponenteEffect } from './ComponenteEffect.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MiPrimerComponente />
    <ComponenteArray />
    <ComponenteProps ciudad="Córdoba" provincia="Córdoba" codPostal={1234}>
      <h2>España</h2>
    </ ComponenteProps>
    <ComponenteEventos />
    <ComponenteEstado />
    <ComponenteEffect />
  </React.StrictMode>,
)
