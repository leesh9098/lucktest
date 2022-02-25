import React from "react";
import styled from "styled-components";
import NextButton from "../components/button/NextButton";
import { Container, Text, TextContainer } from "./Home";

export const InputConcern = styled.input`
    width: 220px;
    height: 50px;
    padding-left: 20px;
    border-radius: 20px;
    margin-bottom: 10px;
    box-sizing: border-box;
`

export const RedText = styled.p`
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    color: red;
    text-align: center;
    word-break: keep-all;
    margin: 0 auto;
    margin-bottom: 30px;
`

export default class Explain extends React.Component {
    state = {
        stepLocation: 1
    }

    render() {
        return (
            <div className="animate__animated animate__fadeIn animate__slower">
                <Container>
                    <Text>10~20초 동안</Text>
                    <TextContainer>당신의 질문에 집중하세요.</TextContainer>
                    <Text>질문은 한번에 하나씩,</Text>
                    <TextContainer>완전한 문장으로</TextContainer>
                    <Text>(예: "이번에 취업이 될까요?")</Text>
                </Container>
                <Container>
                    <InputConcern id="concern" placeholder="당신의 고민을 적어주세요" required />
                    <RedText>*질문은 기록 및 저장되지 않습니다.</RedText>
                    <NextButton size="220px" text="> 질문하기" stepLocation={this.state.stepLocation} />
                </Container>
            </div>
        );
    }
}