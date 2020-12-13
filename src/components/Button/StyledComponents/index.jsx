import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ background }) => background};;
  width: ${({ width }) => width};
  height: ${({ height }) => height || '40px'};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 0 15px;
  box-sizing: border-box;
  cursor: pointer;
  
  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    font-style: normal;
    text-decoration: none;
  }
`;


export default Container;
