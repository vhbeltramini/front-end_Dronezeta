import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './MyOrders.css';


const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  const LoggedUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/orders/user/${LoggedUser.id}`);
        console.log(response.data);
        setOrders(response.data);
        setOrders(orders.sort((a, b) => a.totalValue - b.totalValue))

      } catch (error) {
        console.error('Error occurred while fetching users:', error);
      }
    };

    fetchOrders();
  }, []);

  

  // if (LoggedUser != null && LoggedUser.role != 'ADMIN') {
  //   return (
  //     <div className="container">
  //       <div className="container">
  //         <h1>Você não possui permissões acessar esta tela</h1>
  //       </div>
  //     </div>
  //   )
  // }
  if (orders == null || orders.length == 0) {
    return (
      <div className="container">
        <div className="message">
          <h1>Você não possui ordens de compras</h1>
        </div>
      </div>
    )
  }
  return (
    <div className='container'>
      <h2>Histórico de Pedidos</h2>
        <div>
            <ul>
            {orders.map(orders => (
                <li key={orders.id}>
                N de Produtos : {orders.productsQuantity} | Valor total: {orders.totalValue}  
                </li>
            ))}
            </ul>
            <ul>
            {orders.map(orders => (
                <li key={orders.id}>
                Data {orders.data}
                </li>
            ))}
            </ul>
        </div>
    </div>
  );

    
  }

 
export default MyOrders;