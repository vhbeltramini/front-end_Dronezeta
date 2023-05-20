import React, { useState } from 'react';
import './CreateProduct.css'

const ProductForm = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null);
  const [tamanho, setTamanho] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  const handleImagemChange = (event) => {
    setImagem(event.target.files[0]);
  };

  const handleTamanhoChange = (event) => {
    setTamanho(event.target.value);
  };

  const handlePrecoChange = (event) => {
    setPreco(event.target.value);
  };

  const handleQuantidadeChange = (event) => {
    setQuantidade(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // salvar produto no banco;

    setNome('');
    setDescricao('');
    setImagem(null);
    setTamanho('');
    setPreco('');
    setQuantidade('');
  };

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" value={nome} onChange={handleNomeChange} />
        </div>
        <div>
            <label htmlFor="descricao">Descrição:</label>
            <textarea id="descricao" value={descricao} onChange={handleDescricaoChange} />
        </div>
        <div>
            <label htmlFor="imagem">Imagem:</label>
            <input type="file" id="imagem" onChange={handleImagemChange} />
        </div>
        <div>
            <label htmlFor="tamanho">Tamanho:</label>
            <input type="text" id="tamanho" value={tamanho} onChange={handleTamanhoChange} />
        </div>
        <div>
            <label htmlFor="preco">Preço:</label>
            <input type="text" id="preco" value={preco} onChange={handlePrecoChange} />
        </div>
        <div>
            <label htmlFor="quantidade">Quantidade:</label>
            <input type="text" id="quantidade" value={quantidade} onChange={handleQuantidadeChange} />
        </div>
        <button type="submit">Cadastrar</button>
        </form>
    </div>
  );
};

export default ProductForm;