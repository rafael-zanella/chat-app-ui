import styled from 'styled-components';
import {theme} from "../../../themes/theme";

const TypeArea = styled.div`
  border-top: 0.5px solid rgba(201, 201, 201, 0.356);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  padding: 20px;
`;

const Container = styled.div`
  border-radius: 20px;
  height: 100%;
  width: 100%;
  background-color: ${theme.secondary};
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

export { TypeArea };

export default Container;
