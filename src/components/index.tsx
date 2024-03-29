import styled from "styled-components";
import { MainHeader } from "./Headers/MainHeader/MainHeader";
import { SwapPage } from "./Pages/Swap/SwapPage";

const Container = styled.div`
    width: 100%;
    height: 100%;

`


export const MainIndex = () => {
    return(
        <Container>
            <MainHeader/>
            <SwapPage/>
        </Container>
    )
}