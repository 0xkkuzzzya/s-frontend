import styled from "styled-components";
import { SwapPageLink } from "./SwapPageLink";

const Header = styled.div`
    width: 100%;
    display: flex;
    display: flex;
    flex-direction: column;
`

const HeaderText = styled.a`
    font-size: 26px;
    color: #fff;
    font-weight: 500;
`

const HeaderDescription = styled.a`
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    margin-top: 20px;
`


export const SwapPageHeader = () => {

    const text = "Switch to Orderbook >";

    return(
        <Header>
            <HeaderText>Swap</HeaderText>
            <SwapPageLink to="/orderbook">
                <HeaderDescription>{text}</HeaderDescription>
            </SwapPageLink>
        </Header>
    )
}