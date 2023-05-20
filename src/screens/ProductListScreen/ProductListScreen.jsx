import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductListScreen.css';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [tamanhos, setTamanhos] = useState({});
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

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
    const produtoSelecionado = produtos.find((produto) => produto.id === produtoId);

    const novoItem = {
      id: produtoId,
      nome: produtoSelecionado.name,
      preco: produtoSelecionado.price,
      tamanho: tamanhoSelecionado,
      quantidade: 1,
    };

    const updatedCart = [...cart, novoItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    console.log(`Produto ${produtoId} adicionado ao carrinho com tamanho ${tamanhoSelecionado}`);
    console.log(updatedCart);
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

  function getHasSizeFromProduct(product, size) {
    if (product != null && product.productStorages && product.productStorages.length > 0) {
      for (let i = 0; i < product.productStorages.length; i++) {
        console.log(product.productStorages[i].size)
        if(product.productStorages[i].size == size) {
          return true;
        }
      }
    }
    return false;
    
  }

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
              {getHasSizeFromProduct(produto, "P") &&  <button
                className={`tamanho-btn ${isTamanhoSelecionado(produto.id, 'P') ? 'selecionado' : ''}`}
                onClick={() => handleTamanhoClick(produto.id, 'P')}
              >
                P
              </button>}
              {getHasSizeFromProduct(produto, "M") &&  <button
                className={`tamanho-btn ${isTamanhoSelecionado(produto.id, 'M') ? 'selecionado' : ''}`}
                onClick={() => handleTamanhoClick(produto.id, 'M')}
              >
                M
              </button>}
              {getHasSizeFromProduct(produto, "G") &&  <button
                className={`tamanho-btn ${isTamanhoSelecionado(produto.id, 'G') ? 'selecionado' : ''}`}
                onClick={() => handleTamanhoClick(produto.id, 'G')}
              >
                G
              </button>}
            </div>
            <button onClick={() => adicionarNoCarrinho(produto.id)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;