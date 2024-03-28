"use client"
import React, { useState } from "react";
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
        width: 150px; 
        min-width: 150px;
        padding: 25px 30px;
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
                <p>{`${localStorage.getItem('nome')}! 
                    Você deu um grande passo para sua saúde.
                    Entraremos em contato para agendar o treino!`}
                    </p>
            </Modal>
        </>
    );
}

export default Question;
