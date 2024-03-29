import styled from "styled-components";
import { SwapPage } from "./Pages/Swap/SwapPage";
import { MainHeader } from "./Headers/MainHeader/MainHeader";

const Container = styled.div`
    width: 100%;
    height: 100%;

`


export const MainIndex = () => {
    return (
        <Container>
            <MainHeader />
            <SwapPage />
        </Container>
    )
}