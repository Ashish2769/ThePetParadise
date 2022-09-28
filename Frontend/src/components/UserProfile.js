import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Container, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthenticationService from "./services/AuthenticationService";

function UserProfile() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [fullname, SetFullname] = useState("");
  const [city, SetCity] = useState("");
  const [contactno, SetContactno] = useState("");
  const [mail, SetMail] = useState("");

  const id = AuthenticationService.getUserId();

  useEffect(() => {
    console.log(id + " this is id");
    fetch(`http://localhost:8080/petparadise/user/${id}`, {
      headers: { Authorization: `Bearer ${sessionStorage["jwt"]}` },
    })
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
        console.log("result : ", result);
      });
  }, []);

  return (
    <Container sx={{ marginTop: 25 }}>
      <Paper elevation={3} sx={{ width: "auto" }}>
        <Grid
          spacing={0}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6} justifyContent="center" alignItems="center">
            {" "}
            <Avatar
              src="/images/avatar1.png"
              sx={{
                width: 200,
                height: 200,
                alignContent: "center",
                marginX: "auto",
              }}
              color="action"
            />
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ minWidth: 275 }} variant="outlined">
              <CardContent>
                <br></br>
                <Typography
                  sx={{ fontSize: 25 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Name : {users.fullname}
                </Typography>
                <br></br>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  City: {users.city}
                </Typography>
                <br></br>
                <Typography
                  variant="body2"
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                >
                  Contact :{users.contactno}
                  <br />
                </Typography>
                <br></br>
                <Typography
                  variant="body2"
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                >
                  Mail :{users.email}
                  <br />
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
        </Grid>
      </Paper>
      <br></br>
      <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
        Note : Pet Paradise do not Accept any type of payments during/after
        adoption.<br></br>
        Dear User,as part of our free service , we keep logs of adoption took
        place through our site.<br></br>
        Your Unique Code has been sent to your Registered conatact number.{" "}
        <br></br>
        Please share that code *Only if you recieve Pet from Foster/NGO.
      </Typography>
      <br></br>
      <Button
        type="button"
        color="primary"
        variant="contained"
        size="large"
        onClick={() => navigate("/updateuser")}
      >
        Update
      </Button>
      &nbsp;
      &nbsp;
      <Button
        type="button"
        color="primary"
        variant="contained"
        size="large"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Container>
  );
}

export default UserProfile;
