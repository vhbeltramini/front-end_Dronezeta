import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductListScreen.css';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [tamanhos, setTamanhos] = useState({});

  const LoggedUser = JSON.parse(localStorage.getItem('user'));


  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products');
        console.log(response.data);
        setProdutos(response.data);
      } catch (error) {
        console.error('Error occurred while fetching products:', error);
      }
    };

    fetchProdutos();
  }, []);

  const adicionarNoCarrinho = (produtoId) => {
    const tamanhoSelecionado = tamanhos[produtoId];
    console.log(`Produto ${produtoId} adicionado ao carrinho com tamanho ${tamanhoSelecionado}`);
  };

  const handleTamanhoClick = (produtoId, tamanho) => {
    setTamanhos((prevState) => ({
      ...prevState,
      [produtoId]: tamanho,
    }));
  };

  const isTamanhoSelecionado = (produtoId, tamanho) => {
    return tamanhos[produtoId] === tamanho;
  };

  return (
    <div className="produtos-container">
      <h1>Produtos</h1>
      <div className="buttons">
        {LoggedUser && LoggedUser.role == 'ADMIN' &&  <a href="/createProduct" className="header-button">Adicionar produtos</a>}
      </div>
      <div className="produtos-grid">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-item">
            <img src={produto.photoUrl} alt={produto.nome} />
            <h2>{produto.name}</h2>
            <p>R$ {produto.price}</p>
            <div className="tamanho-container">
              <button
                className={`tamanho-btn ${isTamanhoSelecionado(produto.id, 'P') ? 'selecionado' : ''}`}
                onClick={() => handleTamanhoClick(produto.id, 'P')}
              >
                P
              </button>
              <button
                className={`tamanho-btn ${isTamanhoSelecionado(produto.id, 'M') ? 'selecionado' : ''}`}
                onClick={() => handleTamanhoClick(produto.id, 'M')}
              >
                M
              </button>
              <button
                className={`tamanho-btn ${isTamanhoSelecionado(produto.id, 'G') ? 'selecionado' : ''}`}
                onClick={() => handleTamanhoClick(produto.id, 'G')}
              >
                G
              </button>
            </div>
            <button onClick={() => adicionarNoCarrinho(produto.id)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;