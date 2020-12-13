import styled from 'styled-components';
import { theme } from "../../../themes/theme";

const Line = styled.span `
  width: 60%;
  height: 0.1px;
  background-color: rgba(220,215,236,0.1);
  align-self: center;
  border-radius: 50px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  section {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50px;
  }
  
  h1 {
    font-weight: 500;
    font-size: 16px;
    color: ${theme.fontColorPrimary};
  }
  
  p {
    font-size: 14px;
    color: rgba(220,215,236,0.6);
  }
  
  span {
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.5px;
    color: ${theme.fontColorPrimary};
  }
`;

const Box = styled.ul`
  background-color: ${theme.secondary};
  width: 100%;
  border-radius: 15px;
  list-style: none;
  padding: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Container = styled.div`
  background-color: ${theme.primary};
  max-width: 350px;
  height: calc(100vh - ${theme.headerSize});
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export { Box, Item, Line };

export default Container;
