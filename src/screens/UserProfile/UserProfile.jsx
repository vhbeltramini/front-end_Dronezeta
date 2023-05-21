import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './UserProfile.css';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [editedUser, setEditedUser] = useState(null);
    const LoggedUser = JSON.parse(localStorage.getItem("user"));
    const previousUserId = useRef(null);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
    
        const fetchUser = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/users/${LoggedUser.id}`);
            if (isMounted) {
              setUser(response.data);
              setEditedUser(response.data);
              previousUserId.current = LoggedUser.id; // Update the previous user ID
            }
          } catch (error) {
            console.error('Error occurred while fetching user:', error);
          }
        };
    
        if (user == null || (user != null && user.id && user.id !== previousUserId.current)) {
          fetchUser();
        }
    
        return () => {
          isMounted = false; // Clean up: set isMounted to false on component unmount
        };
    }, [LoggedUser]);
      
      

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedUser((prevUser) => ({
        ...prevUser,
        [name]: value,
        }));
    };
    const token = localStorage.getItem("token");
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
      

    const saveChanges = async () => {
        try {
        await axios.put(`http://localhost:8080/users/${LoggedUser.id}`, editedUser, {headers})
        ;
        setUser(editedUser);
        console.log('Changes saved successfully!');
        } catch (error) {
        console.error('Error occurred while saving changes:', error);
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }



    return (


      <div className='profile-wrapper' >
          <div className='users-controls-buttons'>
            {LoggedUser && LoggedUser.role && LoggedUser.role == 'ADMIN' && <a href="/userManagement" className="header-button">Gerenciar Usuários</a>}
          </div>
          <div className='profile-container'>
              <h1>Profile</h1>
              <label>
                  First Name:
                  <input
                  type="text"
                  name="firstName"
                  value={editedUser.firstName}
                  onChange={handleInputChange}
                  />
              </label>
              <label>
                  Last Name:
                  <input
                  type="text"
                  name="lastName"
                  value={editedUser.lastName}
                  onChange={handleInputChange}
                  />
              </label>
              <label>
                  CPF:
                  <input
                  type="text"
                  name="cpf"
                  value={editedUser.cpf}
                  onChange={handleInputChange}
                  />
              </label>
              <label>
                  Email:
                  <input
                  type="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleInputChange}
                  />
              </label>
              <label>
                  Address:
                  <input
                  type="text"
                  name="address"
                  value={editedUser.address}
                  onChange={handleInputChange}
                  />
              </label>
              <label>
                  Delivery Address:
                  <input
                  type="text"
                  name="deliveryAddress"
                  value={editedUser.deliveryAddress}
                  onChange={handleInputChange}
                  />
              </label>
              <button onClick={saveChanges}>Atualizar informações</button>
          </div>
        </div>


    );
};

export default ProfilePage;