import React from "react";
import NextButton from "../components/button/NextButton";
import { Container, Text } from "./Home";

export default class Explain extends React.Component {
    state = {
        stepLocation: 1
    }

    render() {
        return (
            <>
                <Container>
                    <Text>10~20초 동안 당신의 질문에 집중하세요.</Text>
                    <Text>질문은 한번에 하나씩, 완전한 문장으로</Text>
                    <Text>(예: "이번에 취업이 될까요?")</Text>
                </Container>
                <Container>
                    <NextButton text="질문에 대한 답을 볼 준비가 되었으면 버튼을 누르세요." stepLocation={this.state.stepLocation} />
                </Container>
            </>
        );
    }
}