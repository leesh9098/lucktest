import React from "react";
import styled from "styled-components";
import NextButton from "../components/button/NextButton";
import SocialShareButton from "../components/button/SocialShareButton";
import { Container, InsertImage, Text, TextContainer } from "../routes/Home";
import { ResultData } from "../data/ResultData";
import Resultimg from "../images/resultimage.jpg";

const ResultText = styled.p`
    color: rgb(255, 234, 0);
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    word-break: keep-all;
`

const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 280px;
    padding: 20px 10px;
    background-color: rgb(70, 0, 78);
    box-shadow: 0px 5px 10px 5px rgba(255, 120, 255, .3);
    border-radius: 20px;
    box-sizing: border-box;
    margin-bottom: 30px;
    @media screen and (min-width: 768px) {
        width: 480px;
    }
`

export default function Result() {

    return (
        <div className="animate__animated animate__fadeIn animate__slower">
            <Container>
                <ResultContainer>
                    <TextContainer>당신의 질문에 대한 답은</TextContainer>
                    <ResultText>{ResultData[Math.floor(Math.random() * (348 - 0) + 0)].result}</ResultText>
                    <Container>
                        <InsertImage src={Resultimg} alt="이미지" />
                    </Container>
                    <Container>
                        <Text>오늘 하루 만큼은 제시해드린</Text>
                        <Text>해결책에 따라 살아보시는게 어떨까요?</Text>
                    </Container>
                    <SocialShareButton />
                </ResultContainer>
                <NextButton size="220px" text="테스트 다시하기" retry />
            </Container>
        </div>
    )
}