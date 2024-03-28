"use client"
import React, { useState, useEffect } from "react";
import quiz from "../../assets/data/quiz.json";
import { useQuestions } from "../../hooks/useQuestions";
import styled from "styled-components";
import Modal from "../../components/modal/resultModal";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;

    h2 {
        font-size: 2.5rem;
        color: var(--shapes);
        font-weight: 600;
    }
`;

const ButtonQuiz = styled.div`
    padding: 10px;

    button {
        width: 100%; 
        padding: 15px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

        &:hover {
            background-color: #0056b3;
        }
    }
`;

const Question: React.FC = () => {
    const { handleNextQuestion, currentQuestionIndex } = useQuestions();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Verifica se o código está sendo executado no lado do cliente antes de acessar o localStorage
        if (typeof window !== 'undefined') {
            const nome = localStorage.getItem('nome');
            if (nome) {
                handleShowModal();
            }
        }
    }, []); // Executa apenas uma vez no início

    const handleModalClose = () => {
        setShowModal(false);
    }

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleNextQuestionAndShowModal = () => {
        handleNextQuestion();
        if (currentQuestionIndex === quiz.questions.length - 1) {
            handleShowModal();
        }
    };

    return (
        <>
            <Container>
                <h2>{quiz.questions[currentQuestionIndex].question}</h2>
                {quiz.questions[currentQuestionIndex].options.map((option, index) => (
                    <ButtonQuiz key={option.id}>
                        <button 
                            type="button"
                            onClick={handleNextQuestionAndShowModal}
                        >
                            {option.name}
                        </button>
                    </ButtonQuiz>
                ))}
            </Container>
            <Modal 
                isOpen={showModal} 
                onClose={handleModalClose} 
                title="Parabéns!"
            >
                <p>{`${typeof window !== 'undefined' && localStorage.getItem('nome')}! 
                    Você deu um grande passo para sua saúde.
                    Entraremos em contato para agendar o treino!`}
                    </p>
            </Modal>
        </>
    );
}

export default Question;
