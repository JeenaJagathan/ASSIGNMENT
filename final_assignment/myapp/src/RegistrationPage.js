import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { RadioGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Radio } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .test("at-symbol", 'Email must contain "@" symbol', function (value) {
      return value.includes("@");
    }),
  phoneNumber: yup
    .string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Phone number is required"),
  age: yup.number().required("Age is required"),
  //   gender: yup.string().required("Gender is required"),
  skills: yup.string().required("Skills are required"),
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
const RegistrationPage = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      age: "",
      gender: "",
      skills: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate("/setpassword");

      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <div class="container">
        {/* <Avatar src="/broken-image.jpg" /> */}
        <form
          name="registration"
          className={classes.form}
          onSubmit={formik.handleSubmit}
        >
          <Typography variant="h4" className={classes.title}>
            Register Now!
          </Typography>
          {/* First Name: */}
          <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            className={classes.textfield}
            // variant="outlined"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          {/* Last Name: */}
          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            className={classes.textfield}
            // variant="outlined"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          {/* Email: */}
          <TextField
            id="email"
            name="email"
            label="Email"
            className={classes.textfield}
            // variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          {/* Phone Number: */}
          <TextField
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            className={classes.textfield}
            // variant="outlined"
            type="number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
          {/* Age: */}
          <TextField
            id="age"
            name="age"
            label="Age"
            className={classes.textfield}
            // variant="outlined"
            type="number"
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
          />
          Gender:
          <center>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </center>
          {/* Skills: */}
          <TextField
            id="skills"
            name="skills"
            label="Skills"
            className={classes.textfield}
            // variant="outlined"
            value={formik.values.skills}
            onChange={formik.handleChange}
            error={formik.touched.skills && Boolean(formik.errors.skills)}
            helperText={formik.touched.skills && formik.errors.skills}
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
export default RegistrationPage;

