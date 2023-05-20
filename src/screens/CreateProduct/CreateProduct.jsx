import React, { useState, useContext } from 'react';
import axios from 'axios';
import './CreateProduct.css';


const ProductForm = () => {
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState(null);
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhotoUrlChange = (event) => {
    setPhotoUrl(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const productStorage = { quantity, size };
    const productData = { name, price, productStorages: [productStorage], photoUrl };

    const url = "http://localhost:8080/products";

    try {
      const response = await axios.post(url, productData, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log('response:', response.data);

      if (response.status === 200) {
        console.log('POST request successful');
      } else {
        console.log('POST request failed');
        console.log(response);
      }

    } catch (error) {
      console.error('Error occurred during POST request:', error);
    }

    // setName('');
    // setPhotoUrl(null);
    // setSize('');
    // setPrice('');
    // setQuantity('');
  };

  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user from local storage")
  console.log(user)
  console.log(user.role)
  if (user.role != 'ADMIN') {
    console.log(user.role);
    return (
      <div className="container">
        <div className="Login">
          <h1>Você não possui permissões para cadastrar produtos, solicite a um administrador</h1>
        </div>
      </div>
    )
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="photoUrl">Imagem:</label>
          <input type="text" id="photoUrl" value ={photoUrl} onChange={handlePhotoUrlChange} />
        </div>
        <div>
          <label htmlFor="size">Tamanho:</label>
          <input type="text" id="size" value={size} onChange={handleSizeChange} />
        </div>
        <div>
          <label htmlFor="price">Preço:</label>
          <input type="text" id="price" value={price} onChange={handlePriceChange} />
        </div>
        <div>
          <label htmlFor="quantity">Quantidade:</label>
          <input type="text" id="quantity" value={quantity} onChange={handleQuantityChange} />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default ProductForm;