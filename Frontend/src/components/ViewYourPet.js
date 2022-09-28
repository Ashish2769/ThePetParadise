import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import AuthenticationService from "./services/AuthenticationService";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import httpCommon from "../http-common";

function ViewYourPet() {
  const navigate = useNavigate();
  const [btnState, setBtnState] = useState(false);
  const [users, setUsers] = useState([]);
  const [petid, setPetid] = useState();
  const [petImage, setPetImage] = useState([]);

  const userid = AuthenticationService.getUserId();


  const getUsers = async () => {
    const response = await fetch(
      `http://localhost:8080/petparadise/pet/mypets/${userid}`,
      {
        headers: { Authorization: `Bearer ${sessionStorage["jwt"]}` },
      }
    );
    setUsers(await response.json());
    console.log("response is : ", response);
    // setPetid(response)
  };

  //[] is used to avoid infinite loop
  useEffect(() => {
    getUsers();
  }, []);


  const handleDelete = (petid, e) => {
    e.preventDefault();
    fetch(
       `http://localhost:8080/petparadise/pet/delete/${petid}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${sessionStorage["jwt"]}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        toast.success(" Pet Information DELETED successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
        //alert("Pet Information added successfully")
      });
  };

  const updatePetDetails = (petid, temp) => {
    navigate("/updatepet",{
      state: {petid: petid, temp: temp},
    })
  }
  
  return (
    <div>
      <div>
        {users.map((temp) => {
          const imageUrl =
            "http://localhost:8080/petparadise/user/getimage/" + `${temp.petid}`;
          return (
            <Container align="center">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Grid item xs={12}>
                <Card sx={{ maxWidth: 700 }} elevation={3}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      sx={{ width: 500 }}
                      // image={temp.imagePath}
                      image={imageUrl}
                     alt="Unable to upload image"
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h6">
                          <h1>{temp.name}</h1>
                        </Typography>
                        <Typography
                          variant="h6"
                          display="block"
                          component="div"
                          textAlign="justify"
                          align="right"
                        >
                          <br></br>
                          <Divider />
                          <h1>Pet Details:</h1>
                          Pet Id
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                          &nbsp;{temp.petid}
                          <br></br>
                          Name
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                          {temp.name}
                          <br></br>
                          Type
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                          {temp.petcategory.pcname}
                          <br></br>
                          Breed
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                          {temp.petBreed.breedName}
                          <br></br>
                          Gender
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                          {temp.gender}
                          <br></br>
                          Age (in months) : {temp.age}
                          <br></br>
                          Vaccinated
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                          {temp.vaccination}
                          <br></br>
                          Location
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                          {temp.location}
                          <br></br>
                          Adopted
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                          {temp.owned}
                          <br></br>
                          <br></br>
                        </Typography>
                      </CardContent>
                    </Box>
                    <Button
                      type="button"
                      color="secondary"
                      variant="contained"
                      size="large"
                     // onClick={() => navigate("/updatepet")}
                      onClick={() => updatePetDetails(temp.petid, temp)}
                    >
                      Update
                    </Button>
                    &nbsp;&nbsp;
                    <Button
                      type="button"
                      color="secondary"
                      variant="outlined"
                      size="large"
                      onClick={(e) => handleDelete(temp.petid, e)}
                    >
                      Delete
                    </Button>
                    <Typography align="right">
                      {/* <Fab
                    color="primary"
                    aria-label="edit"
                    title="Edit"
                    onClick={() => navigate("/updatepet")}
                  >
                    <EditIcon />
                  </Fab> */}
                      <br></br>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <br></br>
              <br></br>
            </Container>
          );
        })}
      </div>
    </div>
  );
}

export default ViewYourPet;
