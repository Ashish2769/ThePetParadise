import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Grid, TextField } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HttpsIcon from "@mui/icons-material/Https";
import PetsIcon from "@mui/icons-material/Pets";
import ReviewsIcon from "@mui/icons-material/Reviews";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Button from "@mui/material/Button";
import { useNavigate, Link } from "react-router-dom";
import "./LoginStyle.css";
import AuthenticationService from "./services/AuthenticationService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("login") != null) {
  //     navigate("/home");
  //   }
  // });

  const [email, setEmail] = useState("");
  const [pwd, setpwd] = useState("");
  //const [output, setOutput] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    if (email.length === 0) {
      console.log("Enter email");
      toast.error("please enter email");
    } else if (pwd.length === 0) {
      console.log("Enter password");
      toast.error("please enter password");
    } else {
      AuthenticationService.authenticateUser(email, pwd)
        .then((response) => {
          console.log("auth success", response);
          AuthenticationService.storeUserDetails(
            response.data.jwt,
            email,
            response.data.role,
            response.data.id
          );
          console.log("welcome");
          // setlogin(true)
          // setauthenticated(true)
          const role = AuthenticationService.getUserRole();
          if (role === "[ROLE_ADMIN]") {
            console.log("Admin logged in");
            toast.success(" ADMIN logged in successfully", {
              position: toast.POSITION.TOP_CENTER,
            });
            navigate(`/home`);
          } else if (role === "[ROLE_FOSTER]") {
            toast.success(" FOSTER logged in successfully", {
              position: toast.POSITION.TOP_CENTER,
            });
            navigate("/home");
          } else if (role === "[ROLE_ADOPTER]") {
            toast.success(" ADOPTER logged in successfully", {
              position: toast.POSITION.TOP_CENTER,
            });
            navigate("/home");
          } else if (role === "[ROLE_VOLUNTEER]") {
            toast.success(" Volunteer logged in successfully", {
              position: toast.POSITION.TOP_CENTER,
            });
            navigate("/home");
          }
        })
        .catch((error) => {
          toast.error("wrong email id OR password");
          console.log("auth failed ", error.message);
        });
    }
  };

  const ToUser = () => {
    navigate("/newuser");
  };


  return (
    <div className="LoginUser">
      <ToastContainer
      // position="top-center"
      // autoClose={5000}
      // hideProgressBar={false}
      // newestOnTop={false}
      // closeOnClick
      // rtl={false}
      // pauseOnFocusLoss
      // draggable
      // pauseOnHover
      />
      <br></br>
      <Container>
        <Typography variant="h6" display="block" gutterBottom>
          {" "}
          <br></br>
          <h1>SIGN IN</h1>
        </Typography>
        <br></br>
        <Grid container spacing={7}>
          <Grid item xs={6}>
            {" "}
            <form
              method="post"
              action="#"
              className="LoginForm"
              onSubmit={handleFormSubmit}
            >
              <br></br>
              <AccountBoxIcon sx={{ fontSize: 50 }} color="action" />{" "}
              <TextField
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                color="secondary"
                value={email}
                //required={true}
                onChange={(event) => setEmail(event.target.value)}
              />
              <br></br>
              <br></br>
              <HttpsIcon sx={{ fontSize: 50 }} color="action" />{" "}
              <TextField
                type="Password"
                id="Password"
                name="pwd"
                label="Password"
                variant="outlined"
                color="secondary"
                //required={true}
                value={pwd}
                onChange={(event) => setpwd(event.target.value)}
                autoComplete="on"
              />
              <br></br>
              <Link
                to="/forgotpassword"
                className="text-primary"
                style={{ textDecoration: "none" }}
              >
                Forgot Password?
              </Link>
              <br></br>
              <br></br>
              <Button
                // onClick={Clickedevent}
                variant="contained"
                type="submit"
                style={{
                  borderRadius: 20,
                  backgroundColor: "#6C0BA9",
                  padding: "10px 30px",
                  fontSize: "16px",
                }}
              >
                LOGIN
              </Button>
              <br></br>
              <br></br>
              <Button
                onClick={ToUser}
                color="secondary"
                variant="outlined"
                size="medium"
              >
                CREATE ACCOUNT
              </Button>
              <br></br>
              <br></br>
            </form>
          </Grid>
          <br></br>
          <Grid item xs={6}>
            <form className="LoginForm">
              <br></br>
              <br></br>
              <br></br>
              <Button
                sx={{
                  width: 360,
                  paddingLeft: 10,
                  marginLeft: 0,
                  alignItems: "flex-start",
                  alignSelf: "flex-start",
                }}
                variant="outlined"
                color="secondary"
                onClick={() => navigate("/aboutus")}
              >
                {" "}
                ABOUT US &nbsp; &nbsp;{" "}
                <PetsIcon sx={{ fontSize: 25 }} color="#6C0BA9" spacing={7} />
              </Button>
              <br></br>
              <br></br>
              <br></br>
              <Button
                sx={{
                  width: 360,
                  paddingLeft: 10,
                  marginLeft: 0,
                  alignItems: "flex-start",
                  alignSelf: "flex-start",
                }}
                variant="outlined"
                color="secondary"
                onClick={() => navigate("/blogs")}
              >
                {" "}
                BLOGS &nbsp; &nbsp;{" "}
                <ReviewsIcon
                  sx={{ fontSize: 25 }}
                  color="secondary"
                  spacing={7}
                />
              </Button>
              <br></br>
              <br></br>
              <br></br>
              <Button
                sx={{
                  width: 360,
                  paddingLeft: 10,
                  marginLeft: 0,
                  alignItems: "flex-start",
                  alignSelf: "flex-start",
                }}
                variant="outlined"
                color="secondary"
                onClick={() => navigate("/donate")}
              >
                {" "}
                DONATE TO NGO &nbsp; &nbsp;{" "}
                <VolunteerActivismIcon
                  sx={{ fontSize: 25 }}
                  color="secondary"
                  spacing={7}
                />
              </Button>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
