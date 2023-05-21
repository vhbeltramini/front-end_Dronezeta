import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './DeleteProduct.css';


const DeleteProduct = () => {
  const [products, setProducts] = useState([]);

  const LoggedUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products');
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Error occurred while fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  async function removerProduto(product) {
    try {
      const response = await axios.delete(`http://localhost:8080/products/${product.id}`);
      console.log(response.data);
      alert("Produto deletado");
      window.location.reload();

    } catch (error) {
      console.error('Error occurred while deleting products:', error);
    }
  }

  if (LoggedUser != null && LoggedUser.role != 'ADMIN') {
    return (
      <div className="container">
        <div className="container">
          <h1>Você não possui permissões acessar esta tela</h1>
        </div>
      </div>
    )
  }
  return (
    <div className='container'>
      <h2>Gerenciamento de Produtos</h2>
        <div className='users-controls-buttons'>
          <a href="/createProduct" className="header-button">Criar Produto</a>
        </div>
        <div>
            <ul>
            {products.map(product => (
                <li key={product.id}>
                {product.name} | R$ {product.price}  
                <button onClick={() => removerProduto(product)}>Deletar</button>
                </li>
            ))}
            </ul>
        </div>
    </div>
  );

    
  }

 
export default DeleteProduct;