import styled from "styled-components";
import { SwapPageMAXButton } from "../../../Buttons/PageButtons/SwapPage/SwapPageMAXButton";
import { SwapPageModal } from "../../../Modal/PageModal/SwapModal";

const Field = styled.div`
    width: 100%;
    height: 100px;
    border: 2px solid #3A3A3A;
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
    margin-left: 20px;
`



export const SwapPageField = () => {
    return(
        <Field>
            <SwapPageModal/>
            <Avaible>
                <AvaibleText>Avaible: 0 ATOM</AvaibleText>
                <SwapPageMAXButton/>
            </Avaible>
        </Field>
    )
}