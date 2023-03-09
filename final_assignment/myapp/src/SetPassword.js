import React from "react";
// import ReactDOM from 'react-dom';
// import { useNavigate, } from 'react-router-dom'
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import { Avatar } from '@mui/material';
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
const validationSchema = yup.object({
  username: yup
    .string("Enter your username")
    // .email('Enter a valid email')
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      "Must contain at least one number, one uppercase and lowercase letter, and at least 8 characters"
    )
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string("Enter your confirm password")
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  // input: {
  //   margin: "10px 0",

  // },
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

const SetPassword = () => {
    const navigate=useNavigate();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
       navigate('/')

      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <div class="container">
        <form
          class="form-container"
          className={classes.form}
          onSubmit={formik.handleSubmit}
        >
          <Typography className={classes.title} variant="h4">
                      Set your password!
          </Typography>
          <TextField
            // fullWidth
            id="username"
            name="username"
            label="UserName"
            className={classes.textfield}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            // fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            className={classes.textfield}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <br />

          <TextField
            // fullWidth
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            className={classes.textfield}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
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
      </div>
    </div>
  );
};
export default SetPassword;
