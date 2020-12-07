import React from 'react'
import PropTypes from 'prop-types'
import Container from './StyledComponentes';


const Input = ({ width, height, type, placeholder, showIcon, icon, fontColor }) => {

  const Icon = () => showIcon && icon

  return (
    <div>
      <Container width={width} height={height} fontColor={fontColor}>
        <Icon />
        <input type={type} placeholder={placeholder}/>
      </Container>
    </div>
  )
}

Input.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.element,
  fontColor: PropTypes.string,
}

export default Input
