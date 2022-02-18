import Store from "../../Store";
import styled from "styled-components";
import Bgm from "../../data/0. 시작.mp3";

export const NextBtn = styled.button`
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 50px;
    background-color: white;
    border-radius: 50px;
    cursor: pointer;
    box-sizing: border-box;
    word-break: keep-all;
    white-space: pre-wrap;
`

export const bgm = new Audio(Bgm);

export default function NextButton(props) {

    const nextStep = () => {
        if (props.stepLocation === 0) {
            bgm.play();
        }
        Store.dispatch({ type: 'NEXTSTEP', stepLocation: props.stepLocation });
    }

    const returnHome = () => {
        Store.dispatch({ type: 'RESET' });
    }

    return (
        <>
            {
                props.retry ?
                    <NextBtn onClick={returnHome}>
                        {props.text}
                    </NextBtn>
                :
                    <NextBtn onClick={nextStep}>
                        {props.text}
                    </NextBtn>
            }
        </>
    )
}