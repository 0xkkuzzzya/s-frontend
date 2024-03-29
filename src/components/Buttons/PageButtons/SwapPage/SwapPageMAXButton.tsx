import styled from "styled-components";

const Button = styled.div`
    width: 30px;
    height: 12px;
    border: 2px solid #3B9CFC;
    font-size: 8px;
    color: #3B9CFC;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;
    background: transparent;
    margin-right: 20px;
`


export const SwapPageMAXButton = () => {
    return(
        <Button>
            MAX
        </Button>
    )
}