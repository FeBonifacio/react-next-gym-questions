import React, { useState } from "react";
import quiz from "../assets/data/quiz.json";

export function useQuestions() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number[] | null>(Array.isArray(quiz.questions) ? Array(quiz.questions.length).fill(null) : null);

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            console.log("Avançou para a próxima pergunta. Índice da próxima pergunta:", currentQuestionIndex + 1);
        }
    };

    // const handleOptionClick = (optionId: number) => {
    //     const option = selectedOption ?? [];
        
    //     if (option[currentQuestionIndex] === undefined) {
    //         const updatedOptions = [...option];
    //         updatedOptions[currentQuestionIndex] = optionId;
    //         setSelectedOption(updatedOptions);
    //         console.log("Opção selecionada:", optionId);

    //         handleNextQuestion(); // Chama a função para avançar para a próxima pergunta
    //     } else {
    //         console.log("Você já respondeu essa pergunta.");
    //         return; // Evita que a função continue após o clique em uma opção já respondida
    //     }
    // };

    return {
        handleNextQuestion,
        // handleOptionClick,
        currentQuestion: quiz.questions[currentQuestionIndex],
        currentQuestionIndex,
        selectedOption
    };
}
