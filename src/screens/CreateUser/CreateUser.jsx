import React, { useState } from 'react';
import './CreateUser.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CadastroCliente = () => {
  const [cliente, setCliente] = useState({
    firstName: '',
    lastName: '',
    cpf: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };
  
  function removerPontuacaoCPF(cpf) {
    // Remove todos os pontos e traços do CPF usando expressões regulares
    return cpf.replace(/[.-]/g, '');
  }

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Dados do cliente:', JSON.stringify(cliente));
    // Lógica para enviar os dados do cliente ao servidor ou fazer qualquer outra ação necessária
    // ...
    
    let formatedCPF = removerPontuacaoCPF(cliente.cpf);
    cliente.cpf = formatedCPF;

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_token_here'
    };
    
    const request = {
      url: "http://localhost:8080/login/users",
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Accept": "application/json"
      },
      body: JSON.stringify(cliente)
    }

    console.log('request:');
    console.log(request);
    
    
    try {
      const response = await axios.post(request.url, JSON.stringify(cliente), { headers });
      
      if (response.status == 201) {
        console.log('POST request successful');

        alert("Usuário criado com sucesso")
        navigate('/login');
      

      } else {
        console.log('POST request failed');
        alert("Houve um problema ao criar o usuário")

        console.log(response);
      }

    } catch (error) {
      console.error('Error occurred during POST request:', error);
    }
  };
  
  return (
    <div className='container'>
      <h1>Cadastro de Cliente</h1>
      <form onSubmit={handleSubmit}>
      <label>
          Primeiro Nome:
          <input
            type="text"
            name="firstName"
            value={cliente.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Segundo Nome:
          <input
            type="text"
            name="lastName"
            value={cliente.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            value={cliente.cpf}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={cliente.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            name="password"
            value={cliente.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroCliente;