import styled from 'styled-components';


const Container = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height || '50px'};
  display: flex;
  align-items: center;
  column-gap: 10px;
  background-color: ${({ background }) => background};
  border-radius: 50px;
  padding: ${({ padding }) => padding};
  position: relative;
  
  svg {
    width: 30px;
    height: 30px;
    path{
      fill: #736994;
    }
  }
  
  input {
    height: 50%;
    width: 100%;
    outline-style: none;
    background-color: transparent;
    border: none;
    font-size: 14px;
    color: ${({ fontColor }) => fontColor};
    ::placeholder{
      color: #736994;
    }
  }
  
  &:focus {
    svg {
      path{
        fill: #fafafa;
      }
    }
  }
`;


export default Container;
