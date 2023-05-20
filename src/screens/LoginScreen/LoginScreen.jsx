import { useState } from "react";
import "./LoginScreen.css"

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
       <div>
        <button type="button" name="login" onClick={loginHandler}>
          Login</button>
       </div>
       </div>
     </div>

  );
}

export default LoginScreen;
