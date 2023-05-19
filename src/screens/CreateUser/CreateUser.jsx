import React, { useState } from 'react';
import './style.css';

const CadastroCliente = () => {
  const [cliente, setCliente] = useState({
    nome: '',
    cpf: '',
    cartaoCredito: '',
    endereco: '',
    enderecoEntrega: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dados do cliente:', cliente);
    // Lógica para enviar os dados do cliente ao servidor ou fazer qualquer outra ação necessária
    // ...
  };

  return (
    <div>
      <h1>Cadastro de Cliente</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={cliente.nome}
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
          Cartão de Crédito:
          <input
            type="text"
            name="cartaoCredito"
            value={cliente.cartaoCredito}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Endereço:
          <input
            type="text"
            name="endereco"
            value={cliente.endereco}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Endereço de Entrega:
          <input
            type="text"
            name="enderecoEntrega"
            value={cliente.enderecoEntrega}
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