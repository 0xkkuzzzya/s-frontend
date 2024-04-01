import styled from "styled-components";

const Cotainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
`

const Info = styled.a`
    color: #BABABA;
    font-weight: 400;
    font-size: 17px;
`


export const SwapPageInfo = () => {
    return(
        <Cotainer>
            <Info>Route:</Info>
            <Info>Slippage:</Info>
        </Cotainer>
    )
}