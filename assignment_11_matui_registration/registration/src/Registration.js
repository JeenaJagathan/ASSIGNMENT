import React from "react";
import { Avatar, Button, FormControlLabel,  NativeSelect, Radio, RadioGroup,  TextField } from "@mui/material";
function Registration() {
 
  return (
    <div>
        <div class="container">
        <h1> Register Now!</h1>
        <Avatar src="/broken-image.jpg" />
      <form name="registration" class="form-container">
        <table>
          <tr>
            <td>
            Name:
            </td>
            <td>
            <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
            </td>
          </tr>
          <tr>
            <td>
              <label for="email">Email:</label>
            </td>
            <td>
            <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
            </td>
          </tr>
          <tr>
            <td>
              <label for="password">Password:</label>
            </td>
            <td>
            <TextField
                  id="outlined-basic"
                  type="password"
                  label="Password"
                  variant="outlined"
                />
            </td>
          </tr>
          <tr>
            <td>
              <label for="phoneNumber">Phone Number:</label>
            </td>
            <td>
            <TextField
                  id="outlined-basic"
                  label="PhoneNumber"
                  variant="outlined"
                  type="number"
                />
            </td>
          </tr>
          <tr>
            <td>
              <label for="gender">Gender:</label>
            </td>
            <td>
            <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
            </td>
          </tr>
          <tr>
            <td>
              <label for="language">language</label>
            </td>
            <td>
              
            <NativeSelect
    defaultValue={""}
    inputProps={{
      name: 'language',
      id: 'uncontrolled-native',
    }}
  >
    <option value={""}>Select language</option>
    <option value={"English"}>English</option>
    <option value={"Hindi"}>Hindi</option>
    <option value={"Malayalam"}>Malayalam</option>
  </NativeSelect>
 
            </td>
          </tr>
          <tr>
            <td colspan="2">
            <Button variant="contained">Register</Button>
              
            </td>
            </tr>
        </table>
      </form>
    </div> </div>
  );
}

export default Registration;
