import React, { useState } from 'react';
import './ProductListScreen.css';
import teste from './../../assets/products/1.png';

const Produtos = () => {
  const [tamanhos, setTamanhos] = useState({});

  const produtos = [
    {
      id: 1,
      nome: 'Produto 1',
      preco: 19.99,
      imagem: teste,
    },
    {
      id: 2,
      nome: 'Produto 2',
      preco: 29.99,
      imagem: teste,
    },
    // Adicione mais produtos aqui
  ];

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
      <div className="produtos-grid">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-item">
            <img src={produto.imagem} alt={produto.nome} />
            <h2>{produto.nome}</h2>
            <p>R$ {produto.preco}</p>
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
