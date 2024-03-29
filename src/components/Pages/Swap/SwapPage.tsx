import styled from "styled-components";
import { SwapPageHeader } from "../../Headers/PageHeaders/SwapPageHeader";
import { SwapPageField } from "./Field/SwapPageField";

const Container = styled.div`
    width: 450px;
    height: 100%;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SwapPage = () => {
    return(
        <Container>
            <SwapPageHeader/>
            <SwapPageField/>
        </Container>
    )
}