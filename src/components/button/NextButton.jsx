import Store from "../../Store";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

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

export default function NextButton(props) {
    // const navigate = useNavigate();

    const nextStep = () => {
        Store.dispatch({ type: 'NEXTSTEP', stepLocation: props.stepLocation });
    }

    const returnHome = () => {
        Store.dispatch({ type: 'RESET' });
    }

    // const showResult = () => {
    //     navigate("/result");
    // }

    return (
        <>
            {
                props.retry ?
                    <NextBtn onClick={returnHome}>
                        {props.text}
                    </NextBtn>
                :
                    // props.result ?
                    //     <NextBtn onClick={showResult}>
                    //         {props.text}
                    //     </NextBtn>
                    // :
                        <NextBtn onClick={nextStep}>
                            {props.text}
                        </NextBtn>
            }
        </>
    )
}