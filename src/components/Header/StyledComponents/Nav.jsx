import styled from 'styled-components';


const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  color: white;
  column-gap: 50px;
  
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    column-gap: 30px;

    li {
      padding: 3px;
      cursor: pointer;
      
      :nth-child(1) {
        color: orange;
        border-bottom: 2px solid orange;
      }
    }
  }
`;

export default Nav;