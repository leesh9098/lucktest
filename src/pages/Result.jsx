import React from "react";
import styled from "styled-components";
import NextButton from "../components/button/NextButton";
import SocialShareButton from "../components/button/SocialShareButton";
import { ResultData } from "../data/ResultData";
import { Container } from "../routes/Home";

const ResultText = styled.p`
    color: white;
    font-size: 26px;
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
    width: 100%;
    height: 500px;
    padding: 10px;
    background-color: rgb(90, 0, 99);
    border: 7px solid rgb(53, 0, 58);
    border-radius: 20px;
    box-sizing: border-box;
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
                    <ResultText>{ResultData[Math.floor(Math.random() * (348 - 0) + 0)].result}</ResultText>
                    <SocialShareButton />
                    <NextButton text="다시하기" retry />
                </ResultContainer>
            </Container>
        </div>
    )
}