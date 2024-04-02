import styled from "styled-components";
import { SwapPageModalTo } from "../../../Modal/PageModal/SwapPage/SwapPageModalTo";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";

const Field = styled.div <{BorderField: string, ToField: string}>`
    width: 100%;
    height: 70px;
    background: ${props => props.ToField};
    border: ${props => props.BorderField};
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    align-items: center;
`

const AmountOut = styled.a `
    color: #888888;
    font-size: 25px;
    font-weight: 700;
    margin-left: 30px;
`


export const SwapPageFieldTo = () => {
            
    const [theme, setTheme] = useToggleTheme()

    return(
        <Field BorderField={theme.BorderField} ToField={theme.ToField}>
            <AmountOut>0</AmountOut>
            <SwapPageModalTo/>
        </Field>
    )
}