"use client"
import styled from "styled-components"

const PageForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FormItem = styled.div`
    display: flex;
    margin: 50px;
    flex-direction: column;

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
    }
`

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
    return (
        <PageForm>
            <FormItem>
                <label>NOME</label>
                <input type="text" placeholder="nome" />
                <label>Email</label>
                <input type="text" placeholder="Email" />
                <label>telefone</label>
                <input type="number" placeholder="Telefone" />
                <label>Idade</label>
                <input type="number" placeholder="Idade" />
                <Button>ENVIAR</Button>
            </FormItem>
        </PageForm>

    )
}