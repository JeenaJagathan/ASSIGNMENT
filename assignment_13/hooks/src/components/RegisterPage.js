import React, { useState } from 'react';
import { TextField, Button, Box, makeStyles, Typography } from '@material-ui/core';
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
function RegistrationPage() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle registration logic here
    if (password !== confirmPassword) {
      console.log('Passwords do not match.');
      // display error message to user
    } else {
      console.log('Registration successful!');
      // redirect user to dashboard or homepage
    }
  };

  return (
    <Box display="flex" justifyContent="center">
       <form onSubmit={handleSubmit} className={classes.form}><Typography variant="h5"className={classes.title}>Registration Page</Typography><br/>
        <TextField label="Name" type="text" fullWidth value={name} onChange={(e) => setName(e.target.value)} /><br/>
        <TextField label="Email" type="email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
        <TextField label="Password" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
        <TextField label="Confirm Password" type="password" fullWidth value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br/>
        <Button variant="contained" color="primary"fullWidth  type="submit">Register</Button><br/>
      </form>
    </Box>
  );
}

export default RegistrationPage;
