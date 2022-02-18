import "./reset.css";
import styled from "styled-components";
import "animate.css";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`

function App(props) {
  
  return (
    <Wrap>
      {props.stepNumber}    
    </Wrap>
  );
}

export default App;
