import "./reset.css";
import styled from "styled-components";

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 100%;
    background-color: skyblue;
`

function App(props) {
  
  return (
    <Wrap>
      {props.stepNumber}    
    </Wrap>
  );
}

export default App;
