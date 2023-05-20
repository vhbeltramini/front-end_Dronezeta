import React, { useState } from 'react';
import './CreateUser.css';
import axios from 'axios';

const CadastroCliente = () => {
  const [cliente, setCliente] = useState({
    firstName: '',
    lastName: '',
    cpf: '',
    email: '',
    role: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

  const [postData, setPostData] = useState({
    title: '',
    body: ''
  });
  
  
  function removerPontuacaoCPF(cpf) {
    // Remove todos os pontos e traços do CPF usando expressões regulares
    return cpf.replace(/[.-]/g, '');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Dados do cliente:', JSON.stringify(cliente));
    // Lógica para enviar os dados do cliente ao servidor ou fazer qualquer outra ação necessária
    // ...
    
    cliente.role = 'client';
    let formatedCPF = removerPontuacaoCPF(cliente.cpf);
    cliente.cpf = formatedCPF;

    const request = {
      url: "http://localhost:8080/login/user",
      mode: 'no-cors',
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
      const response = await axios.post(request.url, request);
      
      if (response.ok) {
        // Request was successful
        console.log('POST request successful');
        // Perform any further actions or handle the response data here
      } else {
        // Request was not successful
        console.log('POST request failed');
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