import React, { useState, useEffect } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  TextField,
  Box,
  MenuItem,
  Button,
  Select,
  Paper,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AuthenticationService from "./services/AuthenticationService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdatePet() {
  const navigate = useNavigate()
  const locate = useLocation()
  const [petid, setPetid] = useState("");
  const [gender, setGender] = React.useState("");
  const [vaccination, setVaccination] = React.useState("");
  const [owned, setOwned] = useState("");
  const [name, setName] = useState("");
  const [pcid, setPcid] = useState(" ");
  const [breedid, setBreedid] = useState(" ");
  const [location, setLocation] = useState(" ");
  const [age, setAge] = useState(" ");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const {petid} = locate.state
    const {temp} = locate.state

    console.log("petid: ",petid)
    setPetid(petid)
    setName(temp.name)
    setLocation(temp.location)
    setAge(temp.age)
    setGender(temp.gender)
    setVaccination(temp.vaccination)
    setOwned(temp.owned)
  },[])


  const handleCategory = (event) => {
    setPcid(event.target.value);
  };
  const handleChanged = (event) => {
    setBreedid(event.target.value);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handleChange = (event) => {
    setVaccination(event.target.value);
  };

  const handleStatus = (event) => {
    setOwned(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(petid);
    const dataToSubmit = {
      name,
      location,
      age,
      gender,
      vaccination,
      owned,
    };
    fetch(
      `http://localhost:8080/petparadise/pet/update/${petid}`,

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

        toast.success(" Pet Information Updated successfully", {
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
              <h1>Update Pet Information</h1>
            </Typography>
            <Grid container spacing={7}>
              <Grid item xs={6}>
                <div class="form-row">
                  <br></br>
                  <TextField
                    id="name"
                    label="Pet's Name"
                    name="name"
                    color="primary"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <br></br>
                <div class="form-row">
                  <br></br>
                  <TextField
                    id="location"
                    label="Location"
                    name="location"
                    color="primary"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                  />
                </div>
                <br></br>
                <div class="form-row">
                  <br></br>
                  <TextField
                    id="age"
                    label="Age (Months)"
                    type="number"
                    name="age"
                    color="primary"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                  />
                </div>
                <br></br>
                <br></br>
              </Grid>
              <Grid item xs={6}>
                <br></br>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={gender}
                    onChange={handleGender}
                  >
                    <FormControlLabel
                      value="F"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="M"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>

                <br></br>
                <br></br>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    Vaccinated
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="vaccination"
                    value={vaccination}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                <br></br>
                <br></br>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    Status
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={owned}
                    onChange={handleStatus}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Adopted"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="Not Adopted"
                    />
                  </RadioGroup>
                </FormControl>
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
  );
}

export default UpdatePet;
