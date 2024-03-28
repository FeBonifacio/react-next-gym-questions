"use client"
import { useRouter } from 'next/navigation';
import { useForm } from '@/hooks/useForm';
import styled from 'styled-components';
import useLoader from '@/hooks/useLoader'; // Importe o hook useLoader

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

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
      text-align: left;
    }

    input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      margin-bottom: 10px;
      color: white;
      background: transparent;
    }
  }

  @media (max-width: 768px) {
    form {
      margin: 20px;
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

const Form = () => {
  const router = useRouter();
  const { values, handleChange, handleSubmit } = useForm();
  const loading = useLoader(); // Utilize o hook useLoader para controlar o estado de carregamento

  const handleNavigate = () => {
    router.push("/questions");
  };

  return (
    <>
      {loading ? (
        <Loader>
          <p>Carregando...</p>
        </Loader>
      ) : (
        <PageForm>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" value={values.nome} onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={values.email} onChange={handleChange} />
            <label htmlFor="telefone">Telefone</label>
            <input type="text" id="telefone" name="telefone" value={values.telefone} onChange={handleChange} />
            <label htmlFor="idade">Idade</label>
            <input type="number" id="idade" name="idade" value={values.idade} onChange={handleChange} />
            <Button type="submit" onClick={handleNavigate}>
              Enviar
            </Button>
          </form>
        </PageForm>
      )}
    </>
  );
};

export default Form;
