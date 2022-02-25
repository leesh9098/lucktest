import { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import styled from "styled-components";
import Store from "../Store";
import { Container } from "./Home";
import countapi from "countapi-js";

const LoadingText = styled.p`
    color: white;
    font-size: 30px;
`

export default function Loading() {
    useEffect(() => {
        countapi.update('usercount', 'users', 1)
        setTimeout(() => {
            Store.dispatch({ type: 'NEXTSTEP', stepLocation: 2 });
            }, 2000)
        }
    )
    
    return (
        <div className="animate__animated animate__fadeIn animate__slow">
            <Container>
                <LoadingText>결과 분석중</LoadingText>
            </Container>
            <Oval
                color="red"
                secondaryColor="brown"
                height={50}
                width={50}
                strokeWidth={5}
                wrapperStyle={{ justifyContent: 'center' }}
            />
        </div>
    )
}