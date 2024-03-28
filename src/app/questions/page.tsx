"use client"
import React, { useEffect, useState } from "react";
import quiz from "../../assets/data/quiz.json";
import { useQuestions } from "../../hooks/useQuestions";
import styled from "styled-components";
import Modal from "../../components/modal/resultModal";
import useLoader from '@/hooks/useLoader'; // Importe o hook useLoader

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
        width: 150px; /* Defina o tamanho fixo desejado */
        height: 50px; /* Defina a altura desejada */
        padding: 0; /* Remova o preenchimento interno */
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        text-align: center; /* Centralize o texto horizontalmente */
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

button:hover {
    background-color: #0056b3;
}
`;

const Question: React.FC = () => {
    const { handleNextQuestion, currentQuestionIndex } = useQuestions();
    const [showModal, setShowModal] = useState(false);
    const loading = useLoader(); // Utilize o hook useLoader para controlar o estado de carregamento

    useEffect(() => {
        if (!loading && typeof window !== 'undefined') {
            const nome = localStorage.getItem('nome');
            if (nome) {
                handleShowModal();
            }
        }
    }, [loading]); 

    const handleModalClose = () => {
        setShowModal(false);
    }

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleNextQuestionAndShowModal = () => {
        handleNextQuestion();
        const nextQuestionIndex = currentQuestionIndex + 1;
    
        if (nextQuestionIndex === quiz.questions.length) {
            handleShowModal();
        }
    };

    return (
        <>
            {loading ? (
                <div>
                    <p>Carregando...</p>
                </div>
            ) : (
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
            )}
            {!loading && (
                <Modal 
                    isOpen={showModal} 
                    onClose={handleModalClose} 
                    title="Parabéns!"
                >
                    {/* Correção: Verifica se está no navegador antes de acessar o localStorage */}
                    <p>{`${typeof window !== 'undefined' && localStorage.getItem('nome')}! 
                        Você deu um grande passo para sua saúde.
                        Entraremos em contato para agendar o treino!`}
                    </p>
                </Modal>
            )}
        </>
    );
}    

export default Question;
