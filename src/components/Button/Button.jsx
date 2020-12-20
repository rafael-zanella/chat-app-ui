import React from 'react'
import PropTypes from 'prop-types'
import Container from "./StyledComponents";

const Button = ({ title, width, height, background, Icon }) => {
  return (
    <Container width={width} height={height} background={background}>
       <Icon />
      <h1>{title}</h1>
    </Container>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  background: PropTypes.string,
}

Button.defaultProps = {
  width: '30px',
  height: '15px',
  background: '#FFFFFF',
}

export default Button
