import styled from "styled-components";
import { Routes, Route } from 'react-router-dom';
import { SwapPage } from "./Pages/Swap/SwapPage";
import { MainHeader } from "./Header/MainHeader/MainHeader";
import { useToggleTheme } from "../hooks/useToggleTheme";

const Container = styled.div <{backgroundColor: string}>`
    display: flex;
    flex-direction: column;
    background: ${props => props.backgroundColor};
`

const PageContainer = styled.div`
    height: calc(-80px + 100vh);
    display: flex;
    justify-content: center;
`


export const MainIndex = () => {

    const [theme, setTheme] = useToggleTheme()

    return (
        <Container backgroundColor={theme.backgroundColor}>
            <MainHeader />
            <PageContainer>
                <Routes>
                    <Route path="/orderbook" element={<></>} />
                    <Route path="/pools" element={<></>} />
                    <Route path="/" element={<SwapPage />} />
                    <Route path="/futures" element={<></>} />
                    <Route path="/deposit" element={<></>} />
                </Routes>
            </PageContainer>
        </Container>
    )
}