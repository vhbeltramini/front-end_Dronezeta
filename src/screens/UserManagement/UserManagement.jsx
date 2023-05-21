import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './UserManagement.css';


const UserManagement = () => {
  const [users, setUsers] = useState([]);

  const LoggedUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users');
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error('Error occurred while fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  async function removerUser(user) {
    try {
      const response = await axios.delete(`http://localhost:8080/users/${user.id}`);
      console.log(response.data);
      alert("Usuário deletado");
      window.location.reload();

    } catch (error) {
      console.error('Error occurred while deleting user:', error);
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
      <h2>Gerenciamento de Usuários</h2>
        <div className='users-controls-buttons'>
          <a href="/createUser" className="header-button">Criar Usuário</a>
        </div>
        <div>
            <ul>
            {users.map(user => (
                <li key={user.id}>
                {user.firstName} {user.lastName} | Email {user.email} | Role : {user.role} 
                <button onClick={() => removerUser(user)}>Deletar</button>
                </li>
            ))}
            </ul>
        </div>
    </div>
  );

    
  }

 
export default UserManagement;