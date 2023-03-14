import React, { useState, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
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
  },
});
function ProfilePage() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
   
    setName("John Doe");
    setEmail("johndoe@example.com");
  }, []);

  return (
    <div className={classes.form}>
      <Typography variant="h5" className={classes.title}>
        Profile
      </Typography>
      <Typography variant="body1">Name: {name}</Typography>
      <Typography variant="body1">Email: {email}</Typography>
    </div>
  );
}

export default ProfilePage;
