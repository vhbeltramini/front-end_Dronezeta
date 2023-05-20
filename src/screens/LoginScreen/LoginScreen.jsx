import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./LoginScreen.css"

var globalLoggedUser = {
  firstName: '',
  lastName: '',
  cpf: '',
  email: '',
  password: '',
  address: '',
  deliveryAddress: '',
  paymentMethodList: '',
  role: '',
};

const LoginScreen = () => {

  const [loggedUser, setLoggedUser] = useState({
    firstName: '',
    lastName: '',
    cpf: '',
    email: '',
    password: '',
    address: '',
    deliveryAddress: '',
    paymentMethodList: '',
    role: '',
  });
  
  
  const handleLoggedUserState = (event) => {
    const { name, value } = event.target;
    setLoggedUser((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

    const [loginSucesso, setLoginSucesso] = useState(false)
    const [loginFalhou, setLoginFalhou] = useState(false)
 
  const { updateApiData, apiData } = useContext(ApiContext);


  console.log("apiData");
  console.log(apiData);
 
 
  const loginHandler = async (event) => {

      event.preventDefault();
  
      const headers = {
        'Content-Type': 'application/json',
      };
  
      const request = {
        url: "http://localhost:8080/login",
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Accept": "application/json"
        },
        body: JSON.stringify(login)
      }
  
      console.log('request:');
      console.log(request);
      
      
      try {
        const response = await axios.post(request.url, request.body, { headers });
        
        if (response.status == 200) {
          
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          

          console.log(globalLoggedUser)
          if (globalLoggedUser.role != '') {
            updateApiData(globalLoggedUser)
          }


          console.log('POST request successful');
          setLoginSucesso(true);
          setTimeout(() => {
            navigate('/products');
          }, 2000);

        } else {
          console.log('POST request failed');
          console.log(response);
          setLoginFalhou(false);
        }
  
      } catch (error) {
        console.error('Error occurred during POST request:', error);
      }
  }

  const navigate = useNavigate();
 
  function signInHandler() {
    navigate('/createUser');
  }

  const user = JSON.parse(localStorage.getItem("user"));
  if (user.role != '') {
    console.log("user from local storage")
    console.log(user)
    return (
      <div className="container">
        <div className="Login">
          <h1>Você está logado</h1>
        </div>
      </div>
    )
  }
  return (
    
    <div className="container">
      <div className="Login">
        {loginSucesso && <div className="SucessoMsg"> Autenticado com sucesso!</div> }
          {loginFalhou && <div className="FalhouMsg"> A autenticação falhou, confira seu login e senha.</div>}
        <div className="LoginForm">
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={login.email} onChange={handleChange}/>
        </div>
        <div>
            <label>Senha:</label>
            <input type="password" name="password" value={login.password} onChange={handleChange}/>
        </div>
        <div className="LoginButtons">
          <button type="button" name="login" onClick={loginHandler}>Entrar</button>
          <button type="button" name="signin" onClick={signInHandler}>Cadastrar</button>
        </div>
        </div>
      </div>
    </div>

  );
}

export default LoginScreen;
