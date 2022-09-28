import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import httpCommon from "../http-common";
import { toast } from "react-toastify";
import userEvent from "@testing-library/user-event";
import AuthenticationService from "./services/AuthenticationService";



function PetDetails() {
    const navigate = useNavigate();
    console.log(useParams());
    const location = useLocation()
    const [pets, setPets] = useState([]);
    const [petImage, setPetImage] = useState([]);
    


    const [petid, setPetid] = useState()
    const [name, setname] = useState()
    const [pettype, setPetType] = useState()
    const [breed, setBreed] = useState()
    const [gender, setGender] = useState()
    const [age, setAge] = useState()
    const [vaccination, setVaccination] = useState()
    const [locate, setLocate] = useState()
    const [fullname, setFullname] = useState()
    const [contactno, setContactno] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [imageUrl, setImageUrl] = useState()



    //const [petid, setPetid] = useState();
  
    const role = AuthenticationService.getUserRole();

    useEffect(() =>{
        const { curElem } = location.state
        const {imageUrl} = location.state
      //  getPetDetails(curElem)
      setPetid(curElem.petid)
      setname(curElem.name)
      setPetType(curElem.petcategory.pcname)
      setBreed(curElem.petBreed.breedName)
      setGender(curElem.gender)
      setAge(curElem.age)
      setVaccination(curElem.vaccination)
      setLocate(curElem.location)
      setFullname(curElem.user.fullname)
      setContactno(curElem.user.contactno)
      setEmail(curElem.user.email)
      setAddress(curElem.user.address)
      setCity(curElem.user.city)
      setState(curElem.user.state)
      setImageUrl(imageUrl)


    },[])

    useEffect(() =>{
        const { petid } = location.state
        
       // getPetDetails(petid)
    },[])


    // const getPetDetails = (petid) => {
    //   console.log("in getpetdetails()")
    //   httpCommon
    //   .get('/petparadise/showpet/' + petid, {
    //     headers: {Authorization: `Bearer ${sessionStorage['jwt']}` },
    //   })
    //   .then((response) => {
    //     console.log(response.data)
    //     setPets(response.data)
    //   })
    //   .catch((error) => {
    //     //toast.error('error while fetching Pet details', error)
    //   })
    // } 
    
    useEffect(() => {
      const {petid} = location.state
      getPetImage(petid)
    },[])

    const getPetImage = (petid) => {
      console.log("in getpetimage()")
      httpCommon
      .get('/petparadise/user/getimage/' + petid, {
        headers: {Authorization: `Bearer ${sessionStorage['jwt']}` },
      })
      .then((response) => {
        console.log("petimage: ",response.data)
        setPetImage(response.data)
      })
      .catch((error) => {
        //toast.error('error while fetching Pet details', error)
      })
    } 

    const handleAdoptionRequest = (email, event) =>{
      event.preventDefault()
      navigate("/sendAdoptionRequest", {
        state: {email: email},
      })
    }


  return (
    <div>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
    <Container align="center">
        <br></br>
        <Typography variant='h5' display="block" gutterBottom>
            <h1>Adopt Me</h1>    
        </Typography>
      
      <br></br>
      <div>
     {/* { const imageUrl =
           // `http://localhost:8080/petparadise/pet/getimage/${curElem.petid}`
            'http://localhost:8080/petparadise/user/getimage/'+`${pets.petid}`
            return (  */}
              <div>
      <Grid item xs={12}>
        <Card sx={{ maxWidth: 800 }} elevation={3}>
          <CardContent>
            <CardMedia
              component="img"
              sx={{ width: 500 }}
              
              image={imageUrl}
             // image={petImage}
               
              alt="Unable to load image"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h6">
                  <h1>{pets.name}</h1>
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

                   Pet Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {petid}
                  <br></br>
                  Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {name}
                  <br></br>
                  Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {pettype}
                  <br></br>
                  Breed &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {breed}
                  <br></br>
                  Gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {gender}
                  <br></br>
                  Age &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {age} months
                  <br></br>
                  Vaccinated : {vaccination}
                  <br></br>
                  Location &nbsp;&nbsp;&nbsp;&nbsp;: {locate}
                  <br></br>
                  <br></br>
                  <Divider />
                  <h1>Contact Info:</h1>

                  Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {fullname}
                  <br></br>
                  Phone No : {contactno}
                  <br></br>
                  Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {email}
                  <br></br>
                  Address &nbsp;&nbsp;&nbsp;: {address}, {city}, {state}
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
            </Box>

            {role === '[ROLE_ADOPTER]' ? (
            <Button
              type="button"
              color="primary"
              variant="contained"
              size="large"
             onClick={(e) =>{handleAdoptionRequest(email, e)} }
            >
              Send Request
            </Button>
            ) : ( " ")} 

            &nbsp;&nbsp;
            <Button
              type="button"
              color="primary"
              variant="outlined"
              size="large"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
          </CardContent>
        </Card>
      </Grid>
     
      </div>
       {/* )} */}
      </div>
      <br></br>
      <br></br>
      <br></br>
    </Container>
    </div>
  );
  
}

export default PetDetails;
