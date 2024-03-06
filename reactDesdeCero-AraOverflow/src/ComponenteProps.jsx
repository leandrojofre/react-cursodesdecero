import React from 'react'
import { PropTypes } from 'prop-types'

export const ComponenteProps = ({ciudad, provincia, codPostal, children}) => {
	return (
		<>
			<h3>Componente Props</h3>
			<div>{ciudad}</div>
			<div>{provincia}</div>
			<div>{codPostal}</div>
			<div>{children}</div>
		</>
	)
}

ComponenteProps.propTypes = {
	ciudad: PropTypes.string.isRequired,
	provincia: PropTypes.string,
	codPostal: PropTypes.number
}
