"use client"
import React from "react";
import styled from "styled-components";
import useLoader from '@/hooks/useLoader'; // Importe o hook useLoader
import Link from 'next/link';

interface ContainerProps {
    loading: boolean;
}

const Container = styled.div<ContainerProps>`
    display: ${({ loading }) => (loading ? "none" : "flex")};
    padding: 20px;
    justify-content: space-between;
    background: var(--shapes-dark);
    align-items: center;
`;

const LogoText = styled.h1`
    color: var(--logo-color);
    cursor: pointer;
    font-family: sans-serif;
    font-size: 35px;
    display: flex;
    align-items: center;
    transition: all 0.3s;
    text-decoration: underline;
    text-decoration-color: #000;

    &:hover {
        color: white;
    }

    @media (max-width: 768px) {
        font-size: 1.5rem;
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
    const loading = useLoader(); // Utilize o hook useLoader para controlar o estado de carregamento

    return (
        <Container loading={loading}>
            <Link href="/" passHref>
                <LogoText>ACADEMIA</LogoText>
            </Link>
            <Span>MUDE A SUA VIDA HOJE</Span>
        </Container>
    );
}
