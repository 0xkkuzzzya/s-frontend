import styled from "styled-components";
import QubeLogo from '../../../assets/svg/QubeLogo.webp'
import { ConnectButton } from "../../Buttons/ConnectButton/ConnectButton";

const Header = styled.div`
    width: 100%;
    height: 80px;
    background: #202020;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 55px;
    height: 55px;
    margin-left: 60px;
`


export const MainHeader = () => {
    return(
        <Header>
            <Logo src={QubeLogo}/>
            <ConnectButton/> 
        </Header>
    )
}