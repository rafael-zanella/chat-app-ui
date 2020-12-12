import styled from 'styled-components';
import {theme} from "../../../themes/theme";

const Container = styled.div`
  border-radius: 20px;
  height: 100%;
  width: 100%;
  background-color: ${theme.secondary};
  padding: 0;
 
  
  section {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    padding: 20px;
    overflow-y: scroll;
    height: 100%;
    
    ::-webkit-scrollbar {
      width: 5px;
    }
    
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    
    ::-webkit-scrollbar-track-piece:end {
      margin-bottom: 20px;
    }
    
    ::-webkit-scrollbar-track-piece:start {
      margin-top: 20px;
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: #686284;
      border-radius: 20px;
      height: 20px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: #c0bdd5;
    }
  }
  
`;

export default Container;
