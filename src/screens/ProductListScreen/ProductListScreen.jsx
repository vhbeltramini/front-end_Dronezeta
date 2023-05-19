import React from 'react';
import prod1 from './../../assets/products/1.png';
import './style.css'

const products = [
  { name: 'Product 1', price: 9.99 },
  { name: 'Product 2', price: 19.99 },
  { name: 'Product 3', price: 29.99 },
];

function ProductListScreen() {
  const handleAddToCart = (product) => {
    console.log(`Product added to cart: ${product.name}`);
    // Aqui você pode adicionar a lógica para adicionar o produto ao carrinho
  };

  return (
    <div>
      <main>
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.name}>
              <img src={prod1} alt="Product" />
              <strong>{product.name}</strong> - ${product.price}
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default ProductListScreen;
