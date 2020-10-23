import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  return (
    <div>
      <button>teste</button>
    </div>
  )
}

Button.propTypes = {
  title: PropTypes.string,
}

export default Button
