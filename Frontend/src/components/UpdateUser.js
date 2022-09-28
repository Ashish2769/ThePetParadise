import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import AuthenticationService from "./services/AuthenticationService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function UpdateUser() {
    const navigate = useNavigate();
    const [contactno, setContactno] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [state, setState] = useState("");


    const userid = AuthenticationService.getUserId();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(userid);
        const dataToSubmit = {
          contactno,
          password,
          address,
          city,
          pincode,
          state,
        };
        fetch(
          `http://localhost:8080/petparadise/user/update/${userid}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${sessionStorage["jwt"]}`,
            },
            body: JSON.stringify(dataToSubmit),
          }
        )
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            toast.success("User Profile Updated Successfully", {
              position: toast.POSITION.TOP_CENTER,
            });
            //alert("Pet Information added successfully")
          });
      };


  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ToastContainer />
      <form method="put" action="#" onSubmit={handleFormSubmit}>
        <Container>
          <br></br>
          <Paper elevation={3}>
            <Typography variant="h6" display="block" gutterBottom>
              <h1>Update User Profile</h1>
            </Typography>
            <Grid container spacing={7}>
              <Grid item xs={6}>
                <br></br>
                <div class="form-row">
                  <br></br>
                  <TextField
                    id="contactno"
                    label="Contact No"
                    name="contactno"
                    color="primary"
                    value={contactno}
                    onChange={(event) => setContactno(event.target.value)}
                  />
                </div>
                <br></br>
                <div class="form-row">
                  <br></br>
                  <TextField
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    color="primary"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <br></br>
                <div class="form-row">
                  <br></br>
                  <TextField
                    id="address"
                    label="Address"
                    name="address"
                    color="primary"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                  />
                </div>
                <br></br>
              </Grid>
              <Grid item xs={6}>
              <br></br>
                <div class="form-row">
                  <br></br>
                  <TextField
                    id="city"
                    label="City"
                    name="city"
                    color="primary"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                  />
                </div>
                <br></br>
                <div class="form-row">
                  <br></br>
                  <TextField
                    id="pincode"
                    label="Pincode"
                    type="number"
                    name="pincode"
                    color="primary"
                    value={pincode}
                    onChange={(event) => setPincode(event.target.value)}
                  />
                </div>
                <br></br>
                <div class="form-row">
                  <br></br>
                  <TextField
                    id="state"
                    label="State"
                    name="state"
                    color="primary"
                    value={state}
                    onChange={(event) => setState(event.target.value)}
                  />
                </div>
                <br></br>
               
              </Grid>
            </Grid>
            <Button
              type="submit"
              color="primary"
              size="large"
              variant="contained"
            >
              Save & Update
            </Button>
            &nbsp;&nbsp;&nbsp;
            <br></br>
            <br></br>
            <br></br>
          </Paper>
        </Container>
      </form>
     
      <br></br>
      <br></br>
      <Button onClick={() => navigate(-1)} color="primary" variant="contained" size="large">
        Back
      </Button>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default UpdateUser