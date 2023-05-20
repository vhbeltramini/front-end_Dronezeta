import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./style.css"

function LoginScreen() {
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [loginSucesso, setLoginSucesso] = useState(false)
    const [loginFalhou, setLoginFalhou] = useState(false)
 
 
    function usuarioHandler(event) {
        setUsuario(event.target.value)
    }
 
 
    function senhaHandler(event) {
        setSenha(event.target.value)
    }
 
 
    function loginHandler() {
      if (usuario === 'admin' && senha === '1234') {
          console.log('sucesso');
          setLoginSucesso(true);
          setLoginFalhou(false);
      } else {
          console.log('falhou');
          setLoginFalhou(true);
          setLoginSucesso(false);
      }
  }

  const navigate = useNavigate();

 
  function signInHandler() {
    navigate('/createUser');
  }
    
  return (
    <div className="Login">
       {loginSucesso && <div className="SucessoMsg"> Autenticado com sucesso!</div> }
         {loginFalhou && <div className="FalhouMsg"> A autenticação falhou, 
     confira seu login e senha.</div>}
       <div className="LoginForm">
       <div>
         <label>Usuário:</label>
         <input type="text" name="usuario" value={usuario} onChange={usuarioHandler}/>
       </div>
       <div>
          <label>Senha:</label>
           <input type="password" name="senha" value={senha} onChange={senhaHandler}/>
       </div>
       <div className="LoginButtons">
        <button type="button" name="login" onClick={loginHandler}>
          Entrar</button>
        <button type="button" name="signin" onClick={signInHandler}>
          Cadastrar</button>
       </div>
       </div>
     </div>

  );
}

export default LoginScreen;
