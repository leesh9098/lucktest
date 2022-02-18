import React from "react";
import styled from "styled-components";
import NextButton from "../components/button/NextButton";
import countapi from "countapi-js";
import TrepickLogo from "../images/Logo.png"

export const Container = styled.div`
    margin-bottom: 50px;
`

export const Logo = styled.div`
    width: 143px;
`

export const LogoImage = styled.img`
    width: 100%;
`

export const Title = styled.p`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
`

export const Text = styled.p`
    text-align: center;
`

export const NumberOfUser = styled.p`

`

export default class Home extends React.Component {
    state = {
        stepLocation: 0,
        hitCount: this.props.hitCount
    }

    componentDidMount() {
        countapi.get('usercount', 'users')
        .then(res => this.setState({ hitCount: res.value }))
    }

    render() {
        return (
            <>
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
                    <NumberOfUser>{`현재 총 ${this.state.hitCount}명이 참여했습니다.`}</NumberOfUser>
                </Container>
                <NextButton text="> 시작하기" stepLocation={this.state.stepLocation} />
            </>
        );
    }
}