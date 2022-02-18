import "./reset.css";
import styled from "styled-components";
import BackgroundImage from "./images/space.jpg";
import "animate.css";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 100%;
  background: url(${BackgroundImage}) center center no-repeat;
  background-size: cover;
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
