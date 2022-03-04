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
    width: 180px;
    margin: 0 auto;
`

export const LogoImage = styled.img`
    width: 100%;
`

export const Title = styled.p`
    font-size: 36px;
    font-weight: bold;
    color: white;
    text-align: center;
`

export const TextContainer = styled.p`
    width: 100%;
    font-size: 18px;
    line-height: 30px;
    font-weight: bold;
    color: white;
    text-align: center;
    word-break: keep-all;
    margin: 0 auto;
    margin-bottom: 10px;
`

export const Text = styled.p`
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    line-height: 30px;
    color: white;
    text-align: center;
    word-break: keep-all;
    margin: 0 auto;
`

export const SmallText = styled.p`
    font-size: 13px;
    color: white;
`

export default class Home extends React.Component {
    state = {
        stepLocation: 0,
        hitCount: 0
    }

    componentDidMount() {
        window.localStorage.setItem("userId", Math.random().toString(36).substring(2, 9))
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
                    <TextContainer>우주는 알고 있습니다.</TextContainer>
                </Container>
                <Container>
                    <SmallText>{`현재 총 ${this.state.hitCount}명이 참여했습니다.`}</SmallText>
                </Container>
                <NextButton size="190px" text="> 시작하기" stepLocation={this.state.stepLocation} />
            </div>
        );
    }
}