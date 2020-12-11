import styled from 'styled-components';
import Logo from './Logo'
import Nav from './Nav';
import { theme } from "../../../themes/theme";


const ExtraItems = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 30px;
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
