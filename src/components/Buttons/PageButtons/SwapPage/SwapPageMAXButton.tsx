import styled from "styled-components";

const Button = styled.div`
    width: 35px;
    height: 14px;
    font-size: 9px;
    font-weight: 700;
    color: #222;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;
    background: linear-gradient(to right, #6db8ff, #38a3ff);
    margin-right: 30px;
`


export const SwapPageMAXButton = () => {
    return(
        <Button>
            Max
        </Button>
    )
}