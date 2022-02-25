import React from "react";
import styled from "styled-components";
import NextButton from "../components/button/NextButton";
import SocialShareButton from "../components/button/SocialShareButton";
import { ResultData } from "../data/ResultData";
import { Container, TextContainer } from "../routes/Home";

const ResultText = styled.p`
    color: white;
    font-size: 23px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 100px;
    word-break: keep-all;
`

const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 350px;
    padding: 10px;
    background-color: rgb(70, 0, 78);
    box-shadow: 0px 5px 10px 5px rgba(255, 120, 255, .3);
    border-radius: 20px;
    box-sizing: border-box;
    margin-bottom: 30px;
    @media screen and (min-width: 768px) {
        width: 480px;
        height: 500px;
    }
`

export default function Result() {

    return (
        <div className="animate__animated animate__fadeIn animate__slower">
            <Container>
                <ResultContainer>
                    <TextContainer>당신의 질문에 대한 답은</TextContainer>
                    <ResultText>{ResultData[Math.floor(Math.random() * (348 - 0) + 0)].result}</ResultText>
                    <SocialShareButton />
                </ResultContainer>
                <NextButton size="220px" text="테스트 다시하기" retry />
            </Container>
        </div>
    )
}