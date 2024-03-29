import styled from "styled-components";

const Button = styled.div`
    width: 30px;
    height: 14px;
    font-size: 8px;
    font-weight: 700;
    color: #000;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;
    background: #3B9CFC;
    margin-right: 15px;
`


export const SwapPageMAXButton = () => {
    return(
        <Button>
            MAX
        </Button>
    )
}