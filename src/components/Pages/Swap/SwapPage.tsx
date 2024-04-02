import styled from "styled-components";
import { SwapPageHeader } from "../../Header/PageHeaders/SwapPageHeader";
import { SwapPageFieldFrom } from "./Field/SwapPageFieldFrom";
import { SwapPageFieldTo } from "./Field/SwapPageFieldTo";
import { SwapPageInfo } from "./SwapPageInfo";
import { SwapFieldButton } from "../../Buttons/PageButtons/SwapPage/SwapFieldButtun";
import { SwapModalTransaction } from "../../Modal/PageModal/ModalTransaction/SwapPageTransaction/SwapModalTransaction";

const Container = styled.div`
    width: 400px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 500px) {
        width: 90%;
        margin-top: 35px;
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
            <SwapModalTransaction/>
        </Container>
    )
}