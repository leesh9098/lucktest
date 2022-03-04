import Store from "../../Store";
import styled from "styled-components";
import Bgm from "../../data/0. 시작.mp3";
import axios from "axios";
import countapi from "countapi-js";

export const NextBtn = styled.button`
    display: block;
    width: ${props => props.size};
    height: 50px;
    border: none;
    border-radius: 50px;
    background-color: white;
    border-radius: 50px;
    cursor: pointer;
    box-sizing: border-box;
    word-break: keep-all;
    white-space: pre-wrap;
    margin: 0 auto;
    font-size: 16px;
`

export const bgm = new Audio(Bgm);

export default function NextButton(props) {

    const nextStep = () => {
        if (document.getElementById("concern")) {
            if (document.getElementById("concern").value === "") {
                alert("고민을 입력해주세요");
            } else {
                axios.post("https://devapi.trepick.com/event-log", {
                    storyName: "인생 해결책",
                    userId: window.localStorage.getItem("userId"),
                    attendeeInfo: {
                        userReview: `입력텍스트: ${props.userInput}, 해답: `,
                    }
                })
                .then((success) => {
                    console.log(success);
                })
                .catch((err) => {
                    console.log(err);
                })
                Store.dispatch({ type: 'NEXTSTEP', stepLocation: props.stepLocation, answer: props.answer });
                countapi.update('usercount', 'users', 1)
            }
        } else {
            Store.dispatch({ type: 'NEXTSTEP', stepLocation: props.stepLocation });
        }
        if (props.stepLocation === 0) {
            bgm.play();
        }
    }

    const returnHome = () => {
        Store.dispatch({ type: 'RESET' });
    }

    return (
        <>
            {
                props.retry ?
                    <NextBtn onClick={returnHome} size={props.size}>
                        {props.text}
                    </NextBtn>
                :
                    <NextBtn onClick={nextStep} size={props.size}>
                        {props.text}
                    </NextBtn>
            }
        </>
    )
}