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
    align-items: center;
    margin-bottom: 20px;
`

const AvaibleText = styled.a`
    font-size: 13px;
    color: #888888;
    font-weight: 500;
    margin-left: auto;
    margin-right: 5px;
`

const AvaibleDollar = styled.a`
    font-size: 15px;
    color: #888888;
    font-weight: 500;
    margin-left: 30px;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 20px;
`



export const SwapPageFieldFrom = () => {
        
    const [theme, setTheme] = useToggleTheme()

    return(
        <Field BorderField={theme.BorderField}>
            <Container>
                <SwapPageInput/>
                <SwapPageModalFrom/>
            </Container>
            <Avaible>
                <AvaibleDollar>$0</AvaibleDollar>
                <AvaibleText>0 ATOM</AvaibleText>
                <SwapPageMAXButton/>
            </Avaible>
        </Field>
    )
}