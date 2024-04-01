import styled from "styled-components";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";

const Input = styled.input <{TextColor: string}>`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 20px;
    background: transparent;
    color: ${props => props.TextColor};
    font-size: 30px;
    padding-left: 30px;
    font-weight: 700;
`


export const SwapPageInput = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
        <Input TextColor={theme.TextColor} placeholder="0"></Input>
    )
}
