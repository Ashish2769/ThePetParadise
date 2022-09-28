import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Container, Grid, Button } from "@mui/material";
import {useNavigate} from "react-router-dom"


export default function Blogs() {
    const navigate = useNavigate();
  return (
    <Container>
     
      <br></br>
      <br></br>
      <br></br>
      <Typography variant="h5" display="block"><h1>Stories</h1></Typography>
      <br></br>
      <br></br>
      <Grid>
        <Card sx={{ display: "flex" }} elevation={3}>
          <CardMedia
            component="img"
            sx={{ width: 300 }}
            image="./images/cats.jpg"
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h4">
                Shivani Topare
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                component="div"
                textAlign="justify"
              >
                <br></br>
                <Divider />
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"This First blog
                that gives insight of our events like successfully conducted
                adoption through our platform. Here you will come to know how
                volunteers contributing to our online Pet adoption community by
                working with NGOs and helping pets. Also you can find that how
                different kind of donations motivate us to take care of all Pets
                throughout the country. "How donation works for number of Pets
                in form of desired things. Pet Paradise provides platform where
                you can donate desired things for pets to the specific NGO. Pet
                Paradise makes sure that this donation will reach to NGO who is
                in need to take care of their Pets. Donation can be things that
                needs for pets like shelter material ,different food for pets,
                some medical kit specific to pets , or it can be a money which
                will donators directly transfer to that specific NGO by looking
                details of NGO on Pet Paradise platform."
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid>
        <Card sx={{ display: "flex" }} elevation={3}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h4">
                Akilesh Dalvi
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                component="div"
                textAlign="justify"
              >
                <br></br>
                <Divider />
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Pet Paradise
                provides online pet adoption platform to conduct smooth process
                of adoption of pets. Here if adopter is interesting in pet
                adoption he/she can see all available pets for adoption and can
                accordingly connect with different foster and NGOs. To connect
                with pet owners he/she needs to register by providing adopter
                details like name, email,location etc. on pet Paradise as
                Adopter. After registration adopter can get pet owner details to
                interact with pet owner for smooth adoption process."
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 300 }}
            image="./images/dll.jpg"
            alt="Live from space album cover"
          />
        </Card>
      </Grid>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid>
        <Card sx={{ display: "flex" }} elevation={3}>
          <CardMedia
            component="img"
            sx={{ width: 300 }}
            image="./images/blog3.jpeg"
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h4">
                Rushikesh Lad
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                component="div"
                textAlign="justify"
              >
                <br></br>
                <Divider />
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Glad to tell
                about our first successful pet adoption done through our online
                Pet Paradise adoption platform. One of the visitor Prathamesh of
                our platform who is looking pet for adoption simply register and
                apply for dog adoption. After interaction take place between the
                NGO who is owner of that specific Pet for which adopter
                interested and contact for adoption, with mutual conversation
                NGO gave their pet to adopter and at same time owner updated on
                our platform about pet get adopted."
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid>
        <Card sx={{ display: "flex" }} elevation={3}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h4">
                Prathamesh Rokade
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                component="div"
                textAlign="justify"
              >
                <br></br>
                <Divider />
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Pet Paradise
                provides opportunity to become a Volunteer who can take care of
                Pets and make difference in their lives. To become a Volunteer
                he/she needs to do registration on Pet Paradise platform by
                simply providing their details. So different NGOs can reach to
                Volunteers and and can collaborate to do some work to helps
                Pets. Volunteers can also view available NGOs and can contact
                them to fullfil any need of Volunteer work. Volunteers
                opportunities include task like volunteer at adoption event,
                Assist at different animal shelter,Training and socializing
                dogs,etc."
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 300 }}
            image="./images/blog6.jpeg"
            alt="Live from space album cover"
          />
        </Card>
      </Grid>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid>
        <Card sx={{ display: "flex" }} elevation={3}>
          <CardMedia
            component="img"
            sx={{ width: 300 }}
            image="./images/blog5.jpeg"
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h4">
                Bhairavi Bhole
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                component="div"
                textAlign="justify"
              >
                <br></br>
                <Divider />
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Volunteers role
                is always important with responsibility of pet care. As
                some of volunteers registered themselves before to work with
                NGOs now helping at different NGOs to take care of pets.
                 In this hot summer , volunteers are makes sure that
                pets will get enough amount of water to drink and no of shelters
                available for pets. This information is shared by NGO
                with our Pet Paradise Community."
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <Button onClick={()=> navigate(-1)} variant='contained' size="large">Back</Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Container>
  );
}
