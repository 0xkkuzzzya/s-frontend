import styled from "styled-components";
import { SwapPageModalTo } from "../../../Modal/PageModal/SwapPage/SwapPageModalTo";

const Field = styled.div`
    width: 100%;
    height: 55px;
    background: #202020;
    border: 2px solid #3A3A3A;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    align-items: center;
`

const AmountOut = styled.a`
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-right: 15px;
`


export const SwapPageFieldTo = () => {
    return(
        <Field>
            <SwapPageModalTo/>
            <AmountOut>0</AmountOut>
        </Field>
    )
}