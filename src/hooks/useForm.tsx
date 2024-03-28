import { ChangeEvent, FormEvent, useState } from "react";

export function useForm() {
    // Definir estados para os valores dos inputs
    const [values, setValues] = useState({
        nome: '',
        email: '',
        telefone: '',
        idade: ''
    });

    // Função para atualizar os valores
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    // Envio do formulário
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Verificar se está no navegador antes de acessar o localStorage
        if (typeof window !== 'undefined') {
            localStorage.setItem('nome', values.nome);
            localStorage.setItem('email', values.email);
            localStorage.setItem('telefone', values.telefone);
            localStorage.setItem('idade', values.idade);
        }

        // Limpar os valores do formulário
        setValues({
            nome: '',
            email: '',
            telefone: '',
            idade: '',
        });
    };

    return {
        values,
        handleChange,
        handleSubmit
    };
}
