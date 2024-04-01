import styled from "styled-components";
import { SwapPageMAXButton } from "../../../Buttons/PageButtons/SwapPage/SwapPageMAXButton";
import { SwapPageModalFrom } from "../../../Modal/PageModal/SwapPage/SwapPageModalFrom";
import { SwapPageInput } from "./SwapPageInput";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";

const Field = styled.div <{BorderField: string}>`
    width: 100%;
    height: 100px;
    border: ${props => props.BorderField};
    border-radius: 20px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Avaible = styled.div`
    width: 100%;
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 7px;
`

const AvaibleText = styled.a`
    font-size: 12px;
    color: #888888;
    font-weight: 500;
    margin-left: 15px;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 15px;
`



export const SwapPageFieldFrom = () => {
        
    const [theme, setTheme] = useToggleTheme()

    return(
        <Field BorderField={theme.BorderField}>
            <Container>
                <SwapPageModalFrom/>
                <SwapPageInput/>
            </Container>
            <Avaible>
                <AvaibleText>Avaible: 0 ATOM</AvaibleText>
                <SwapPageMAXButton/>
            </Avaible>
        </Field>
    )
}