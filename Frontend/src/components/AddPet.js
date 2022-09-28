import React, { useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import AuthenticationService from "./services/AuthenticationService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddPet() {
  //let {id} = useParams();
  const navigate = useNavigate();
  const [gender, setGender] = React.useState("F");
  const [vaccination, setVaccination] = React.useState("Yes");
  const [owned, setOwned] = useState("");
  const [name, setName] = useState("");
  const [pcid, setPcid] = useState(" ");
  const [breedid, setBreedid] = useState(" ");
  const [location, setLocation] = useState(" ");
  const [age, setAge] = useState(" ");
  const [petid, setPetid] = useState(" ");

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

  const uploadImage = () => {
    navigate("/imageupload", {
      state: {petid: petid},
    })
  }

  const userid = AuthenticationService.getUserId();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (name.length === 0) {
      toast.error("please enter pet name");
    } else if (location.length === 0) {
      toast.error("please enter location");
    } else if (age.length === 0) {
      toast.error("please enter age");
    } else {
      const dataToSubmit = {
        name,
        location,
        age,
        gender,
        vaccination,
        //owned,
      };

      fetch(
        //"https://jsonplaceholder.typicode.com/users",
        `http://localhost:8080/petparadise/pet/addpet/userid/${userid}/petcategory/${pcid}/breed/${breedid}`,
        {
          method: "POST",
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
          setPetid(res.petid)
          console.log(res.petid)
          toast.success(" Pet Information added successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
          //alert("Pet Information added successfully")
        });
    }
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
      <form method="post" action="#" onSubmit={handleFormSubmit}>
        <Container>
          <br></br>
          <Paper elevation={3}>
            <Typography variant="h6" display="block" gutterBottom>
              <h1>Pet Information</h1>
            </Typography>
            <Grid container spacing={7}>
              <Grid item xs={6}>
                <div class="form-row">
                  <br></br>
                  <TextField
                    id="fullname"
                    label="Pet's Name"
                    name="name"
                    color="primary"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
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
                      <InputLabel color="primary" id="demo-simple-select-label">
                        Pet Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="petTypeSelect"
                        value={pcid}
                        label="pettype"
                        name="pettype"
                        color="primary"
                        onChange={handleCategory}
                      >
                        <MenuItem value={56}>DOG</MenuItem>
                        <MenuItem value={57}>CAT</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <br></br>
                <Box
                  sx={{
                    width: 226,
                    paddingLeft: 20,
                    marginLeft: 0,
                    textAlign: "left",
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel color="primary" id="breedlabel">
                      Pet Breed
                    </InputLabel>

                    {pcid === 56 ? (
                      <Select
                        labelId="demo-simple-select-label"
                        id="petbreed"
                        value={breedid}
                        label="Pet Breed"
                        onChange={handleChanged}
                      >
                        <MenuItem value={11}>German Shephred</MenuItem>
                        <MenuItem value={12}>Labrador</MenuItem>
                        <MenuItem value={13}>Boxers</MenuItem>
                        <MenuItem value={14}>Siberian</MenuItem>
                        <MenuItem value={15}>Pug</MenuItem>
                        <MenuItem value={16}>Maltese Dog</MenuItem>
                        <MenuItem value={17}>Dobermann</MenuItem>
                      </Select>
                    ) : (
                      " "
                    )}

                    {pcid === 57 ? (
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={breedid}
                        label="Pet Breed"
                        onChange={handleChanged}
                      >
                        <MenuItem value={500}>Persian</MenuItem>
                        <MenuItem value={501}>Scottish</MenuItem>
                        <MenuItem value={502}>Ragdoll </MenuItem>
                        <MenuItem value={503}>Bengal Cat</MenuItem>
                        <MenuItem value={504}>Siamese</MenuItem>
                        <MenuItem value={505}>Munchkin</MenuItem>
                      </Select>
                    ) : (
                      " "
                    )}
                  </FormControl>
                </Box>
                <br></br>
                <div class="form-row">
                  <TextField
                    id="location"
                    label="Location"
                    type="text"
                    name="location"
                    color="primary"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                  />
                </div>
                <br></br>

                <br></br>
                <br></br>
              </Grid>
              <Grid item xs={6}>
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
                {/* <label>Select Image to UPLOAD</label>
                <br></br>
                <br></br>
                <input
                  onChange={(e) => {
                    // set the selected file in the state
                    // setImageFile(e.target.files[0])
                  }}
                  className="form-control"
                  type="file"
                /> */}
                
                {/* <FormControl>
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
                    value="true"
                    control={<Radio />}
                    label="Adopted"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="Not Adopted"
                  />
                </RadioGroup>
              </FormControl> */}
              </Grid>
            </Grid>
            <br></br>
            <Button
              type="submit"
              color="primary"
              size="large"
              variant="contained"
            >
              Save
            </Button>
            &nbsp;&nbsp;&nbsp;
          <Button
            color="primary"
            size="large"
            variant="contained"
            // onClick={() => navigate("/imageupload")}
            onClick={uploadImage}
          >
            Next<NavigateNextIcon/>
          </Button>
            <br></br>
            <br></br>
            <br></br>
          </Paper>
        </Container>
      </form>

      <br></br>
      <br></br>
    </div>
  );
}

export default AddPet;
