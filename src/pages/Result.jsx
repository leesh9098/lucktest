import styled from "styled-components";
import { Wrap } from "../App";
import { ResultData } from "../data/ResultData";
import { Container } from "../routes/Home";

const ResultText = styled.p`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
`
const ShareText = styled.p`
    font-weight: bold;
    text-align: center;
`

export default function Result() {

    return (
        <Wrap>
            <Container>
                <ResultText>{ResultData[Math.floor(Math.random() * (10 - 0) + 0)]}</ResultText>
                <ShareText>친구에게 테스트 공유하기</ShareText>
            </Container>
        </Wrap>
    )
}