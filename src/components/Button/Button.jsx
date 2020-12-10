import React from 'react'
import PropTypes from 'prop-types'
import Container from "./StyledComponents";

const Button = ({ title, width, height, background }) => {
  return (
    <Container width={width} height={height} background={background}>
      <h1>{title}</h1>
    </Container>
  )
}

Button.propTypes = {
  title: PropTypes.string,
}

export default Button
