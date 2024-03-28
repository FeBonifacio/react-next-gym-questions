import React, { useEffect } from "react";
import styled from "styled-components";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
}

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;

`;

const ModalContent = styled.div`
    background-color: white;
    border-radius: 5px;
    padding: 30px;

    @media (max-width: 768px) {
        width: 60%;
    }
`;


const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (!isOpen) return;
            const target = event.target as HTMLElement;
            if (!target.closest(".modal-content")) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <ModalOverlay>
            <ModalContent className="modal-content">
                {title && <h2>{title}</h2>}
                {children}
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;
