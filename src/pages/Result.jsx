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
    margin-bottom: 20px;
`

export default function Result() {

    return (
        <div className="animate__animated animate__fadeIn animate__slower">
            <Container>
                <ResultText>{ResultData[Math.floor(Math.random() * (348 - 0) + 0)].result}</ResultText>
                <SocialShareButton />
                <NextButton text="다시하기" retry />
            </Container>
        </div>
    )
}