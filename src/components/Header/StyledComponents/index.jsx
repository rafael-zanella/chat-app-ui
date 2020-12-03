import styled from 'styled-components';
import Logo from './Logo'
import Nav from './Nav';


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
  background-color: #4D426D;
  padding: 5px 15px;
`;
 
export { Logo };
export { Nav };
export { ExtraItems };

export default Container;
