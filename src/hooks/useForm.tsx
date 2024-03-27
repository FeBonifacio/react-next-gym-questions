import { ChangeEvent, FormEvent, useState } from "react";

export function useForm() {
    //definir estados para os valores dos inputs
    const [values, setValues] = useState({
        nome: '',
        email: '',
        telefone: '',
        idade: ''
    });

    // função para atualizar os valores
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    // envio do form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        localStorage.setItem('nome', values.nome);
        localStorage.setItem('email', values.email);
        localStorage.setItem('telefone', values.telefone);
        localStorage.setItem('idade', values.idade);

        // limpar
        setValues({
            nome: '',
            email: '',
            telefone: '',
            idade: '',
        });

        alert('Cadastro realizado !')
    };

    return {
        values,
        handleChange,
        handleSubmit
    };
}
