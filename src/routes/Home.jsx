import React from "react";
import styled from "styled-components";
import NextButton, { bgm } from "../components/button/NextButton";
import countapi from "countapi-js";
import TrepickLogo from "../images/Logo.png"

export const Container = styled.div`
    text-align: center;
    margin-bottom: 50px;
`

export const Logo = styled.div`
    width: 143px;
    margin: 0 auto;
`

export const LogoImage = styled.img`
    width: 100%;
`

export const Title = styled.p`
    font-size: 30px;
    font-weight: bold;
    color: white;
    text-align: center;
`

export const Text = styled.p`
    width: 300px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-align: center;
    word-break: keep-all;
    margin: 0 auto;
    margin-bottom: 10px;
`

export const SmallText = styled.p`
    color: white;
`

export default class Home extends React.Component {
    state = {
        stepLocation: 0,
        hitCount: 0
    }

    componentDidMount() {
        countapi.get('usercount', 'users')
        .then(res => this.setState({ hitCount: res.value }))
        if (!bgm.paused) {
            bgm.pause();
            bgm.currentTime = 0;
        }
    }

    render() {
        return (
            <div className="animate__animated animate__fadeIn anlmate__slower">
                <Container>
                    <Logo>
                        <LogoImage src={TrepickLogo} alt="로고 이미지" />
                    </Logo>
                </Container>
                <Container>
                    <Title>인생 해결책</Title>
                </Container>
                <Container>
                    <Text>답을 구하시나요?</Text>
                    <Text>우주는 알고 있습니다.</Text>
                </Container>
                <Container>
                    <SmallText>{`현재 총 ${this.state.hitCount}명이 참여했습니다.`}</SmallText>
                </Container>
                <NextButton text="> 시작하기" stepLocation={this.state.stepLocation} />
            </div>
        );
    }
}