import styled, { css } from 'styled-components';
import {theme} from "../../../themes/theme";

const HidePicture = css`
  :not(:nth-child(1)) {
    margin-top: 0;
  }
  header {
    display: none;
  }

  p {
    margin-left: 60px;
  }
`;

const LoggedAccount = css`
  justify-content: flex-end;
 
  header {
    display: none;
  }
    
  p {
    background-color: #EFA985;
    color: #FEFCFB;
  }
`;


const Container = styled.div`
  display: flex;
  :not(:nth-child(1)) {
    margin-top: 20px;
  }
  
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50px;
    }
    
    span {
      font-size: 12px;
      font-weight: 600;
      color: ${theme.fontColorPrimary};
      letter-spacing: 0.5px;
    }
  }
  
  p {
    border-radius: 20px;
    background-color: #4D426D;
    color: ${theme.fontColorPrimary};
    max-width: 60%;
    padding: 20px;
    margin-left: 10px;
  }
  
  ${({ showPicture }) => !showPicture && HidePicture};
  ${({ isLoggedAccount }) => isLoggedAccount && LoggedAccount};   
`;

export default Container;
