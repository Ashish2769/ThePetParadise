import {
  FormControl,
  Grid,
  InputLabel,
  TextField,
  Typography,
  Box,
  MenuItem,
  Button,
} from "@mui/material";
import { Container } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React, { Component } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const [contactno, setcontactno] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  

  const navigate = useNavigate();
   

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (fullname.length === 0) {
      toast.error('please enter name')
    } else if (category.length === 0) {
      toast.error('please enter category')
    } else if (email.length === 0) {
      toast.error('please enter email')
    } else if (password.length === 0) {
      toast.error('please enter password')
    } else if (confirmpass.length === 0) {
      toast.error('please enter confirm password')
    } else if (password !== confirmpass) {
      toast.error('password does not match')
    }  else if (contactno.length === 0) {
      toast.error('please enter contact number')
    } else if (state.length === 0) {
      toast.error('please enter state')
    } else if (city.length === 0) {
      toast.error('please enter city')
    }  else if (pincode.length === 0) {
      toast.error('please enter pincode')
    } else if (address.length === 0) {
      toast.error('please enter address')
    } else {
    const dataToSubmit = {
      fullname,
      // category,
      email,
      password,
      contactno,
      city,
      state,
      pincode,
      address,
    };
    //"https://jsonplaceholder.typicode.com/users"
    //`http://localhost:8080/petparadise/signup/category/${category}`
    fetch(`http://localhost:8080/petparadise/signup/category/${category}`, 
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(dataToSubmit),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        toast.success('User Registered Successfully')
          navigate('/')
        //alert("User Registered Successfully");
      });
  }};


  return (
    // const {selectedOption} = this.states;
    <div className="RegistrationUser">
      <br></br>
      <ToastContainer/>
      <Typography variant="h6" display="block" gutterBottom>
        <br></br>
        <h1>REGISTRATION</h1>
      </Typography>
      <br></br>
      <br></br>
      <div>
        <Container>
          <br></br>

          <form
            method="post"
            action="#"
            className="LoginForm"
            onSubmit={handleFormSubmit}
          >
            <Grid container spacing={7}>
              <Grid item xs={6}>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      // error
                      id="fullname"
                      label="Full Name"
                      name="fullname"
                      color="secondary"
                      // helperText="Incorrect entry."
                      // required={true}
                      value={fullname}
                      onChange={(event) => setfullname(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>
                <div>
                  <Box
                    sx={{
                      width: 226,
                      paddingLeft: 20,
                      marginLeft: 0,
                      textAlign: "left",
                    }}
                  >
                    <FormControl fullWidth>
                      <InputLabel
                        color="secondary"
                        id="demo-simple-select-label"
                      >
                        Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        name="category"
                        label="Category"
                        color="secondary"
                        // required={true}
                        onChange={handleChange}
                      >
                        {/* <MenuItem value={1001}>ADMIN</MenuItem> */}
                        <MenuItem value={1002}>FOSTER</MenuItem>
                        <MenuItem value={1003}>ADOPTER</MenuItem>
                        <MenuItem value={1004}>VOLUNTEER</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <br></br>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      id="email"
                      label="Email"
                      type="email"
                      name="email"
                      color="secondary"
                      // required={true}
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      id="password"
                      label="Password"
                      type="password"
                      name="password"
                      color="secondary"
                      // required={true}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      id="confirmpass"
                      label="Confirm Password"
                      type="password"
                      name="confirmpass"
                      color="secondary"
                      // required={true}
                      value={confirmpass}
                      onChange={(event) => setConfirmPass(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>
              </Grid>
              <Grid item xs={6}>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      id="contactno"
                      label="Contact Number"
                      name="contactno"
                      type="number"
                      color="secondary"
                      // required={true}
                      value={contactno}
                      onChange={(event) => setcontactno(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      id="state"
                      label="State"
                      name="state"
                      color="secondary"
                      // required={true}
                      value={state}
                      onChange={(event) => setState(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      id="City"
                      label="City"
                      name="city"
                      color="secondary"
                      // required={true}
                      value={city}
                      onChange={(event) => setCity(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      id="pincode"
                      label="Pincode"
                      name="pincode"
                      color="secondary"
                      // required={true}
                      value={pincode}
                      onChange={(event) => setPincode(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      id="address"
                      label="Address"
                      name="address"
                      color="secondary"
                      // required={true}
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>
              </Grid>
            </Grid>
            <Button type="submit" color="secondary" variant="contained">
              Register
            </Button>

            <Link to="/" style={{ paddingLeft: 13, textDecoration: "none" }}>
              <Button type="button" color="secondary" variant="contained">
                Back
              </Button>
            </Link>
            <br></br>
            <br></br>
          </form>
        </Container>
      </div>
    </div>
  );
}

export default Register;
