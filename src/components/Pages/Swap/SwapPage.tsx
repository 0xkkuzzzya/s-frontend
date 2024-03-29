import styled from "styled-components";
import { SwapPageHeader } from "../../Headers/PageHeaders/SwapPageHeader";
import { SwapPageFieldFrom } from "./Field/SwapPageFieldFrom";
import { SwapPageFieldTo } from "./Field/SwapPageFieldTo";
import { SwapPageInfo } from "./SwapPageInfo";
import { SwapPageConfirm } from "../../Buttons/PageButtons/SwapPage/SwapPageConfirm";

const Container = styled.div`
    width: 400px;
    height: 100%;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 500px) {
        width: 90%;
    }
`

const SwapFieldButton = styled.div`
    width: 40px;
    height: 40px;
    border: 2px solid #3A3A3A;
    background: #161616;
    position: absolute;
    margin-top: 11.4em;
    border-radius: 15px;
    @media (max-width: 500px) {
        width: 40px;
        height: 40px;
        margin-top: 11.5em;
    }
`

export const SwapPage = () => {
    return(
        <Container>
            <SwapPageHeader/>
            <SwapPageFieldFrom/>
            <SwapFieldButton></SwapFieldButton>
            <SwapPageFieldTo/>
            <SwapPageInfo/>
            <SwapPageConfirm/>
        </Container>
    )
}