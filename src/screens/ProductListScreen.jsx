import React from 'react';

const products = [
  { name: 'Product 1', price: 9.99 },
  { name: 'Product 2', price: 19.99 },
  { name: 'Product 3', price: 29.99 },
];

function ProductListScreen() {
  return (
    <div>
      <main>
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.name}>
              <strong>{product.name}</strong> - ${product.price}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default ProductListScreen;
