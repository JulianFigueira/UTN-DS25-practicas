import { useState } from "react";
import { useNavigate } from "react-router-dom" ;
import { setToken } from "../helpers/auth" ;


//MAILS DE PRUEBA REGISTRADOS.

//julian@example.com. Contra: Prueba1
//ana@example.com. Contra: Secreta2

 function LoginPage () {
 const navigate = useNavigate ();
 const [email, setEmail ] = useState ("");
 const [password , setPassword ] = useState ("");
 async function handleSubmit (e) {
 e.preventDefault ();
 try {
 const res = await fetch("http://localhost:3000/api/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password }),
});

const json = await res.json();

if (!res.ok) {
  alert(json.error || "Login fallido");
  return;
}

setToken(json.data.token);
navigate("/catalog");

 } catch (err) {
 alert("Login fallido" );
 }
 }
 return (
 <form onSubmit ={handleSubmit }>
 <h2>Login</h2>
 <input value={email} onChange ={e => setEmail (e.target.value)}
placeholder ="Email" />
 <input type="password" value={password } onChange ={e =>
setPassword (e.target.value)} placeholder ="Password" />
 <button type="submit" >Ingresar </button>
 </form>
 );
}

export default LoginPage;