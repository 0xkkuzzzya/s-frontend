import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import { ReactNode } from "react";
import { useToggleTheme } from "../../../hooks/useToggleTheme";

const LinkText = (Link)
const LinkBLock = styled(LinkText)`
    text-decoration: none;
    font-weight: 700;
    outline: none;
    font-size: 15px;
    margin-top: 10px;
    @media (max-width: 1110px) {
        font-size: 15px;
    }
    @media (max-width: 730px) {
        font-size: 13px;
        line-height: 1.2rem;
        font-weight: 600;
    }
`

interface Props {
    to: string;
    children: ReactNode;
}

export const SwapPageLink = ({children, to}: Props) => {

    const [theme, setTheme] = useToggleTheme()

    return(
        <LinkBLock 
        to={to}
        style={{
            transition: '.2s ease-in-out',
        }}
        >
            {children}
        </LinkBLock>
    )
}