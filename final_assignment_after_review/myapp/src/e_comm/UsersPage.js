import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import SideBar from "./SideBar";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      city: "",
      suite: "",
      zipcode: "",
    },
    company: {
      name: "",
    },
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAddUser = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.startsWith("address.")) {
      setNewUser((prevUser) => ({
        ...prevUser,
        address: {
          ...prevUser.address,
          [name.split(".")[1]]: value,
        },
      }));
    } else if (name.startsWith("company.")) {
      setNewUser((prevUser) => ({
        ...prevUser,
        company: {
          ...prevUser.company,
          [name.split(".")[1]]: value,
        },
      }));
    } else {
      setNewUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setNewUser({
      name: "",
      email: "",
      phone: "",
      website: "",
      address: {
        street: "",
        city: "",
        suite: "",
        zipcode: "",
      },
      company: {
        name: "",
      },
    });
    setOpenDialog(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <SideBar style={{ width: "100px" }} />
      <TableContainer component={Paper} style={{ flex: 5, marginTop: "64px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.website}</TableCell>
                <TableCell>
                  {user.address.street},{user.address.city},{user.address.suite}
                  ,{user.address.zipcode}
                </TableCell>
                <TableCell>{user.company.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button
          variant="contained"
          onClick={handleAddUser}
          style={{ margin: "16px" }}
        >
          Add User
        </Button>
      </TableContainer>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={newUser.name}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Phone"
            name="phone"
            value={newUser.phone}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Website"
            name="website"
            value={newUser.website}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Street"
            name="address.street"
            value={newUser.address.street}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="City"
            name="address.city"
            value={newUser.address.city}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Suite"
            name="address.suite"
            value={newUser.address.suite}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Zipcode"
            name="address.zipcode"
            value={newUser.address.zipcode}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Company"
            name="company.name"
            value={newUser.company.name}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UsersPage;


