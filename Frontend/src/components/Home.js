import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue, pink, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationService from "./services/AuthenticationService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import httpCommon from "../http-common";

export default function Home() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pets, setPets] = useState([]);
  const [petimage, setPetImage] = useState([]);
  const [imageid, setImageid] = useState([]);
  const [user, setUser] = useState([]);

  const getPets = () => {
    console.log("in getpets()");
    httpCommon
      .get("/petparadise/availablepets", {
        headers: { Authorization: `Bearer ${sessionStorage["jwt"]}` },
      })
      .then((response) => {
        console.log(response.data);
        setPets(response.data);
      })
      .catch((error) => {
        toast.error("error while fetching pets ", error);
      });
  };

  //[] is used to avoid infinite loop
  useEffect(() => {
    getPets();
  }, []);

  const userid = AuthenticationService.getUserId();

  console.log("userid: " + userid);
  // http://localhost:8080/petparadise/user/6
  const getUser = () => {
    console.log("in getUser()");
    httpCommon
      .get("petparadise/user/" + userid, {
        headers: { Authorization: `Bearer ${sessionStorage["jwt"]}` },
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        // toast.error("error while fetching pets ", error);
      });
  };

  //[] is used to avoid infinite loop
  useEffect(() => {
    getUser();
  }, []);

  const handleChange = (e, p) => {
    console.log(e, p);
    setPage(p);
  };

  // const getPetDetails = (petid) => {
  //   navigate("/petdetails", {
  //     state: {petid: petid},
  //   })
  // }
  const getPetDetails = (curElem, imageUrl) => {
    navigate("/petdetails", {
      state: { curElem: curElem, imageUrl: imageUrl },
    });
  };

  return (
    <div>
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ToastContainer />
        <Typography variant="h5" display="block" gutterBottom>
          <h3>Hello {user.fullname}, Welcome to Pet Paradise</h3>
        </Typography>
        <Grid container spacing={0}>
          {pets.map((curElem) => {
            const imageUrl =
              "http://localhost:8080/petparadise/user/getimage/" +
              `${curElem.petid}`;
            return (
              <div key={curElem.id}>
                {/* <Grid container spacing={10}> */}
                <Grid item xs={12} margin={5}>
                  <Card sx={{ maxWidth: 300 }} elevation={3}>
                    <CardHeader
                      avatar={
                        <Avatar
                          sx={{ bgcolor: pink[500] }}
                          aria-label="recipe"
                        ></Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={<h1>{curElem.name}</h1>}
                      subheader="September 25, 2022"
                    />
                    <CardMedia
                      component="img"
                      height="200"
                      // image="https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&w=600"
                      // image={curElem.imagePath}
                      image={imageUrl}
                      alt="Unable to load image"
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontSize={"large"}
                      >
                        {curElem.petBreed.breedName}{" "}
                        {curElem.petcategory.pcname}, age: {curElem.age} months,{" "}
                        {curElem.location}, {curElem.user.state}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <Button
                        sx={{ flexGrow: 1 }}
                        size="large"
                        // onClick={() => getPetDetails(curElem.petid)}
                        onClick={() => getPetDetails(curElem, imageUrl)}
                      >
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                {/* </Grid> */}
                <br></br>
              </div>
            );
          })}
          {/* })} */}
        </Grid>
        <br></br>
        <br></br>

        {/* <h1>current page is {page}</h1> */}
        <Pagination
          count={10}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          color="primary"
          size="large"
          onChange={handleChange}
        />
        <br></br>
        <br></br>
      </Container>
    </div>
  );
}


