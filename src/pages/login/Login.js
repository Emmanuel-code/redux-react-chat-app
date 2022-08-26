import { Button, IconButton, Input } from "@material-ui/core";
import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [name, setName] = useState('');
  
  const history = useHistory();
  const signIn = (e) => {
    e.preventDefault()
         setName("");
         history.push("/home");    
        
  };
  return (
    <div className="login">
      <div className="login__container">
        <h1>Enter your name to enter chat</h1>
        <Input className='input__field' type="text" placeholder='name goes here' value={ name } onChange={(e)=>setName(e.target.value)} />
        <Button className="button" type="submit" onClick={signIn}>
          ENTER
        </Button>
      </div>
       
    </div>
  );
}

export default Login;
