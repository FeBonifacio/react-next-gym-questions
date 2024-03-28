import React, { useState } from "react";
import quiz from "../assets/data/quiz.json";

export function useQuestions() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number[] | null>(Array.isArray(quiz.questions) ? Array(quiz.questions.length).fill(null) : null);

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            console.log("Avançou para a próxima pergunta. Índice da próxima pergunta:", currentQuestionIndex + 1);
        } else {
            
        }
    };

    return {
        handleNextQuestion,
        currentQuestion: quiz.questions[currentQuestionIndex],
        currentQuestionIndex,
        selectedOption
    };
}
