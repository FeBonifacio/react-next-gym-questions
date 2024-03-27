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
    color: var(--logo-color);
`;

const Span = styled.p`
    display: flex;
    align-items: center;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: var(--logo-color);
`;

const Divider = styled.div`
    width: 100%;
    height: 5px;
    background: linear-gradient(to top, var(--secondary-text), transparent, var(--secondary-text));
`;

export default function Header() {
    return (
        <>
        <Container>
            <Logo>ACADEMIA</Logo>
            <Span>MUDE A SUA VIDA HOJE</Span>
        </Container>
        <Divider />
        </>
        
        
    );
}
