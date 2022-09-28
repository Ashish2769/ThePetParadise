import React  from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, TextField, Typography, Button, Paper } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Donate() {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   setTimeout(() => {
  //     navigate("/success");
  //   }, 3000);
  // };

  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [contactno, setcontactno] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [cname, setCname] = useState("");
  const [cnum, setCnum] = useState("");
  const [ctype, setCtype] = useState("");
  const [edate, setEdate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (name.length === 0) {
      toast.error('please enter name')
    } else if (email.length === 0) {
      toast.error('please enter email')
    } else if (contactno.length === 0) {
      toast.error('please enter contact number')
    } else if (state.length === 0) {
      toast.error('please enter state')
    } else if (city.length === 0) {
      toast.error('please enter city')
    } else if (address.length === 0) {
      toast.error('please enter address')
    } else if (cname.length === 0) {
      toast.error('please enter card holder name')
    } else if (cnum.length === 0) {
      toast.error('please enter card number')
    } else if (ctype.length === 0) {
      toast.error('please enter card type')
    } else if (edate.length === 0) {
      toast.error('please enter expiry date')
    } else if (cvv.length === 0) {
      toast.error('please enter CVV')
    } else if (amount.length === 0) {
      toast.error('please enter amount')
    }  else {
    const dataToSubmit = {
      name,
      email,
      contactno,
      city,
      state,
      address,
      amount,
    };
    //"https://jsonplaceholder.typicode.com/users"
    //`http://localhost:8080/petparadise/signup/category/${category}`
    fetch("http://localhost:8080/petparadise/donor/savedonor", 
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        // Authorization: `Bearer ${sessionStorage['jwt']}`
      },
      body: JSON.stringify(dataToSubmit),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        toast.success('Donation Successful')
          navigate('/success')
      });
  }};

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <ToastContainer/>
      <Typography variant="h6" display="block" gutterBottom>
        <br></br>
        <h1>Personal Information</h1>
      </Typography>
      <br></br>
      <br></br>
      <form 
      method="post"
      action="#"
      onSubmit={handleFormSubmit}>
      <div>
        <Container>
          <br></br>

          <Paper elevation={3}>
            <Grid container spacing={7}>
              <Grid item xs={6}>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      id="fullname"
                      label="Full Name"
                      name="name"
                      color="primary"
                      // required={true}
                      value={name}
                      onChange={(event) => setname(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      id="email"
                      label="Email"
                      type="email"
                      name="email"
                      color="primary"
                       required={true}
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      id="contactno"
                      label="Contact Number"
                      name="contactno"
                      color="primary"
                      // required={true}
                      value={contactno}
                      onChange={(event) => setcontactno(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>
              </Grid>
              <Grid item xs={6}>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      id="state"
                      label="State"
                      name="state"
                      color="primary"
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
                      color="primary"
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
                      id="address"
                      label="Address"
                      name="address"
                      color="primary"
                      // required={true}
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>
              </Grid>
            </Grid>
            <br></br>
            <br></br>
          </Paper>
        </Container>
        <br></br>

        <Typography variant="h6" display="block" gutterBottom>
          <br></br>
          <h1>Card Details</h1>
        </Typography>
        <br></br>
        <br></br>
        <Container>
          <br></br>

          <Paper elevation={3}>
            <Grid container spacing={7}>
              <Grid item xs={6}>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      id="hname"
                      label="Card Holder Name"
                      name="fullname"
                      color="primary"
                      // required={true}
                      value={cname}
                      onChange={(event) => setCname(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      id="cnumber"
                      label="Card Number"
                      type="text"
                      name="cnum"
                      color="primary"
                      // required={true}
                      value={cnum}
                      onChange={(event) => setCnum(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      id="cardtype"
                      label="Card Type"
                      name="ctype"
                      color="primary"
                      // required={true}
                      value={ctype}
                      onChange={(event) => setCtype(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>
              </Grid>
              <Grid item xs={6}>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      id="expdate"
                      label="Expiry Date (MM/YY)"
                      name="edate"
                      color="primary"
                      // required={true}
                      value={edate}
                      onChange={(event) => setEdate(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      id="cvv"
                      label="CVV"
                      type="password"
                      name="cvv"
                      color="primary"
                      // required={true}
                      value={cvv}
                      onChange={(event) => setCvv(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>

                <div class="form-row">
                  <div class="form-group col-md-4">
                    <TextField
                      id="amount"
                      label="Amount (Rs.)"
                      name="amount"
                      color="primary"
                      // required={true}
                      value={amount}
                      onChange={(event) => setAmount(event.target.value)}
                    />
                  </div>
                </div>
                <br></br>
              </Grid>
            </Grid>
            <Button
              //onClick={handleClick}
              type="submit"
              color="primary"
              variant="contained"
              size="large"
            >
              Pay Now
            </Button>
            <br></br>
            <br></br>
            {/* <Box sx={{ width: "100%", alignItems: "center" }}>
              <CircularProgress />
            </Box> */}
            <br></br>
          </Paper>
        </Container>
      </div>
      </form>
      <br></br>
      <br></br>
      <Link to="/" style={{ paddingLeft: 13, textDecoration: "none" }}>
        <Button type="button" color="primary" variant="contained">
          Back
        </Button>
      </Link>
      <br></br>
      <br></br>
    </div>
  );
}

export default Donate;
