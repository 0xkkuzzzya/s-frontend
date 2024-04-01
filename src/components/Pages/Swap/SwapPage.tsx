import styled from "styled-components";
import { SwapPageHeader } from "../../Header/PageHeaders/SwapPageHeader";
import { SwapPageFieldFrom } from "./Field/SwapPageFieldFrom";
import { SwapPageFieldTo } from "./Field/SwapPageFieldTo";
import { SwapPageInfo } from "./SwapPageInfo";
import { SwapPageConfirm } from "../../Buttons/PageButtons/SwapPage/SwapPageConfirm";
import { useToggleTheme } from "../../../hooks/useToggleTheme";
import { SwapFieldButton } from "../../Buttons/PageButtons/SwapPage/SwapFieldButtun";

const Container = styled.div`
    width: 400px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 500px) {
        width: 90%;
    }
`



export const SwapPage = () => {
    return(
        <Container>
            <SwapPageHeader/>
            <SwapPageFieldFrom/>
            <SwapFieldButton/>
            <SwapPageFieldTo/>
            <SwapPageInfo/>
            <SwapPageConfirm/>
        </Container>
    )
}