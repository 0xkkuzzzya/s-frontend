import styled from "styled-components";
import { SwapPageHeader } from "../../Header/PageHeaders/SwapPageHeader";
import { SwapPageFieldFrom } from "./Field/SwapPageFieldFrom";
import { SwapPageFieldTo } from "./Field/SwapPageFieldTo";
import { SwapPageInfo } from "./SwapPageInfo";
import { SwapPageConfirm } from "../../Buttons/PageButtons/SwapPage/SwapPageConfirm";
import { useToggleTheme } from "../../../hooks/useToggleTheme";

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

const SwapFieldButton = styled.div <{SwapButton: string, BorderField: string}>`
    width: 40px;
    height: 40px;
    border: ${props => props.BorderField};
    background: ${props => props.SwapButton};
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

    const [theme, setTheme] = useToggleTheme()

    return(
        <Container>
            <SwapPageHeader/>
            <SwapPageFieldFrom/>
            <SwapFieldButton BorderField={theme.BorderField} SwapButton={theme.SwapButton}/>
            <SwapPageFieldTo/>
            <SwapPageInfo/>
            <SwapPageConfirm/>
        </Container>
    )
}