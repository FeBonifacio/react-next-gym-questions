import { useForm } from "@/hooks/useForm";
import styled from "styled-components"

const PageForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        margin: 50px;

        label {
            font-weight: 600;
            font-size: 24px;
            font-family: sans-serif;
            padding: 5px;
            text-align: left !important;
        }

        input {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
            margin-bottom: 10px;
            color: var(--shapes-dark);
            background: transparent;
        }
    }
`;

const Button = styled.button`
    padding: 10px 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export default function Form() {
    const { values, handleChange, handleSubmit } = useForm();

    return (
        <PageForm>
            <form onSubmit={handleSubmit}>
                <label>NOME</label>
                <input type="text" name="nome" value={values.nome} onChange={handleChange} />
                <label>Email</label>
                <input type="text" name="email"  value={values.email} onChange={handleChange} />
                <label>Telefone</label>
                <input type="text" name="telefone"  value={values.telefone} onChange={handleChange} />
                <label>Idade</label>
                <input type="number" name="idade"  value={values.idade} onChange={handleChange} />
                <Button type="submit">ENVIAR</Button>
            </form>
        </PageForm>
    )
}
