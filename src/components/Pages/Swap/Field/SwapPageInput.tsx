import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 20px;
    background: transparent;
    color: #fff;
    text-align: right;
    font-size: 20px;
    padding-right: 15px;
    font-weight: 700;
`


export const SwapPageInput = () => {
    return(
        <Input placeholder="0"></Input>
    )
}
