import { Typography, Card, CardMedia, Button, Link } from "@mui/material";
import React from "react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { alignProperty } from "@mui/material/styles/cssUtils";
import { AlignHorizontalCenter, PaddingOutlined } from "@mui/icons-material";


function PaymentSuccess() {
    const navigate = useNavigate();
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Stack sx={{ width: '100%', alignItems: 'center' }}  spacing={2}>
      <Alert severity="success"><Typography variant="h5" display="block" color="green" gutterBottom>
        <h1>!! Payment Successful !!</h1>
      </Typography></Alert>
      </Stack>
      <br></br>
      <Typography variant="h5" display="block" color="blue" gutterBottom>
        Thank You for your Support...
        <InsertEmoticonIcon />
      </Typography>
      <br></br>
      <Card sx={{ display: "flex" }} elevation={3}>
        <CardMedia
          component="img"
          
          image="./images/Registerpetparadise.png"
        />
      </Card>
      <br></br>
        <br></br>
        
                <Button onClick={() => navigate(-2)} type="button" color="primary" variant="contained">
                  Back
                </Button>
        <br></br>
        <br></br>
    </div>
  );
}

export default PaymentSuccess;
