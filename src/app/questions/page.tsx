"use client"
import React from "react";
import quiz from "../../assets/data/quiz.json";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Content = styled.div`
    font-size: 40px;
    font-weight: 800;
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var();
    padding: 20px 0 20px;
`;

const QuizItems = styled.div`
    width: 400px; 
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: gray;
    border-radius: 5px;
    padding: 40px;
    height: 100%;

    h2 {
        font-size: 28px;
        font-weight: 600;
        font-family: sans-serif;
    }
`;

const ButtonQuiz = styled.div`
    padding: 10px;

    button {
        width: 150px; 
        min-width: 150px;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

        &:hover {
            background-color: #0056b3; /* Cor de fundo mais escura no hover */
        }
    }
`;

export default function Question() {
    return (
        <Container>
            <Content>{quiz.title}</Content>
            {quiz.questions.map((quiz: any) => (
                <QuizItems key={quiz.id}>
                    <h2>{quiz.question}</h2>
                    {quiz.options.map((option: any) => (
                        <ButtonQuiz key={option.id}>
                            <button 
                                type="button"
                                id={option.alias}
                                value={option.id}
                                onClick={() => console.log(option.id)}
                            >
                                {option.name}
                            </button>
                        </ButtonQuiz>
                    ))}
                </QuizItems>
            ))}
        </Container>
    )

}