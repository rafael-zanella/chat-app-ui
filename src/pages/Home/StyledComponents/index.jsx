import styled from 'styled-components';
import {theme} from "../../../themes/theme";

const Main = styled.main`
  background-color: ${theme.primary};
  width: 100%;
  height: calc(100% - ${theme.headerSize});
  display: flex;
  box-sizing: border-box;
  column-gap: 20px;
`;

const Page = styled.div`
  background-color: ${theme.primary};
  border-radius: 20px;
  max-width: 90vw;
  width: 100%;
  max-height: 98vh;
  height: 100%;
  padding: 0 20px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100vw;
 height: 100vh;
 overflow: hidden;
 background-color: #DCD7EC;
`;

export { Page, Main };
export default Container;
