import React, { useState } from 'react';
import { TextField, Button, Typography, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  button: {
    width: "50%",
  },
  title: {
    color: "blue",
  }
});
function LoginPage() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
   
    if (email === 'user@example.com' && password === 'password') {
      console.log('Login successful!');
     
    } else {
      console.log('Login failed.');
      
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.form}><Typography variant="h5"className={classes.title}>Login Page</Typography>
      <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      <Button variant="contained" color="primary" type="submit">Log in</Button>
    </form></div>
  );
}

export default LoginPage;
