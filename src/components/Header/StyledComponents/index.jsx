import styled from 'styled-components';
import Logo from './Logo'
import Nav from './Nav';
import { theme } from "../../../themes/theme";


const ExtraItems = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 30px;

  
  svg {
    :nth-child(1) {
      width: 20px;
      height: 20px;
    }
    
    :nth-child(2) {
      fill: white;
      width: 22px;
      height: 22px;
    }
  }

`;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.primary};
  height: ${theme.headerSize};
`;

export { Logo };
export { Nav };
export { ExtraItems };

export default Container;
