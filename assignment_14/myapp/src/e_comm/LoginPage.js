import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
const validationSchema = yup.object({
  username: yup.string("Enter your username").required("UserName is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
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
  link: {
    color: "blue",
  },
  textfield: {
    width: "50%",
  },
});

const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate("/sidebar");
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <Typography variant="h4" className={classes.title}>
          Welcome!
        </Typography>
        <br />
        <TextField
          className={classes.textfield}
          id="username"
          name="username"
          label="UserName"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <br />
        <TextField
          className={classes.textfield}
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <br />
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
      <br />
      <Link to="/registration" className={classes.link}>
        Create A New Account Now!
      </Link>
    </div>
  );
};
export default LoginPage;
