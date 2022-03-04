import { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import styled from "styled-components";
import Store from "../Store";
import { Container } from "./Home";

const LoadingText = styled.p`
    color: white;
    font-size: 22px;
`

export default function Loading() {
    useEffect(() => {
        setTimeout(() => {
            Store.dispatch({ type: 'NEXTSTEP', stepLocation: 2 });
            }, 3000)
        }
    )
    
    return (
        <div className="animate__animated animate__fadeIn animate__slow">
            <Container>
                <LoadingText>우주의 기운을 모으고 있습니다</LoadingText>
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