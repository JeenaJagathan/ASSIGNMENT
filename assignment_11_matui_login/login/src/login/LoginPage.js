import { Button, TextField } from "@mui/material";
import React from "react";

function LoginPage() {
  return (
    <>
      <div class="container">
        <div class="form-container">
          <form>
          <h2>Welcome</h2>
            <table>
              <tr>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </tr>
              <tr>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
              
                />
              </tr>
              <br />
              <tr>
                <Button variant="contained">LOGIN</Button>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
