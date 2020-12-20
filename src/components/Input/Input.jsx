import React from 'react'
import PropTypes from 'prop-types'
import Container from './StyledComponentes';


const Input = ({ width, height, type, placeholder, showIcon, Icon, fontColor, background, padding }) => {

  return (
    <Container 
      width={width} 
      height={height} 
      fontColor={fontColor} 
      background={background}
      padding={padding}
    >
      { showIcon && <Icon /> }
      <input type={type} placeholder={placeholder}/>
    </Container>
  )
}

Input.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  Icon: PropTypes.element,
  fontColor: PropTypes.string,
  padding: PropTypes.string,
}

Input.defaultProps = {
  showIcon: false,
  width: '200px',
  height: '30px',
  type: 'text',
  placeholder: 'placeholder',
  background: '#5C4F82',
  padding: '0 15px',
}

export default Input
