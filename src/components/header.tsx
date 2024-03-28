"use client"
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    background: var(--shapes-dark);
    align-items: center;
`;

const Logo = styled.h1`
    font-family: sans-serif;
    font-size: 35px;
    display: flex;
    align-items: center;
    
    
    a {
        text-decoration: none;
        color: var(--logo-color);
    }

    @media (max-width: 768px) {
        a {
            font-size: 1.5rem;
        }
    }
`;

const Span = styled.p`
    display: flex;
    align-items: center;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: var(--logo-color);

    @media (max-width: 768px) {
        display: none;
    }
`;


export default function Header() {
    return (
        <Container>
            <Logo><a href="/">ACADEMIA</a></Logo>
            <Span>MUDE A SUA VIDA HOJE</Span>
        </Container>
    );
}
