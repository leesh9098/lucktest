import React from "react";
import styled from "styled-components";
import NextButton from "../components/button/NextButton";
import { Container, Text } from "./Home";

export const InputConcern = styled.input`
    width: 280px;
    height: 40px;
    padding-left: 20px;
    border-radius: 20px;
    margin-bottom: 20px;
`

export default class Explain extends React.Component {
    state = {
        stepLocation: 1
    }

    render() {
        return (
            <div className="animate__animated animate__fadeIn animate__slower">
                <Container>
                    <Text>10~20초 동안 당신의 질문에 집중하세요.</Text>
                    <Text>질문은 한번에 하나씩, 완전한 문장으로</Text>
                    <Text>(예: "이번에 취업이 될까요?")</Text>
                </Container>
                <Container>
                    <InputConcern id="concern" placeholder="당신의 고민을 적어주세요" required />
                    <NextButton text="> 다음" stepLocation={this.state.stepLocation} />
                </Container>
            </div>
        );
    }
}