import styled from "styled-components";
import { MainHeader } from "./headers/MainHeader/MainHeader";

const Container = styled.div`
    width: 100%;
    height: 100%;
`


export const MainIndex = () => {
    return(
        <Container>
            <MainHeader/>
        </Container>
    )
}