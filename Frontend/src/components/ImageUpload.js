import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import {Paper, Typography, Container, Button} from "@mui/material"

import httpCommon from "../http-common";

function ImageUpload() {
  const navigate = useNavigate();
  const location = useLocation();
  const [imageFile, setImageFile] = useState();
  const [petid, setPetid] = useState(0);

  useEffect(() => {
    const {petid} = location.state
    setPetid(petid)
    console.log(petid)
  })


  const uploadImageofPet = (event) => {
    event.preventDefault();
    const body = new FormData();
    // add the file
    body.set("imageFile", imageFile);
    console.log("in upload product image");
    httpCommon
      // .post('/image/product/upload/' + petid, body, {
      .post('/petparadise/pet/uploadimage/' + petid, body, {
        headers: { Authorization: `Bearer ${sessionStorage["jwt"]}` },
        "Content-Type": "multipart/form-data",
      })
      .then((response) => {
        console.log(response.data);
        toast.success("successfully added Image");
      })
      .catch((error) => {
        toast.error("error while uploading IMAGE ", error);
      });
  };

  const handleSubmit = () => {
  //alert("Pet Added Successfully")
  toast.success(" Pet Added Successfully", {
    position: toast.POSITION.TOP_RIGHT,
  });
  navigate("/home")
}

  return (
        <div className='mb-3'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Container>
            <Paper elevation={3}>
                <br></br>
            <Typography variant="h6" display="block" gutterBottom>
             <h1>Upload Pet Image</h1>
           </Typography>
            <br></br>
            <br></br>
        <label>Select Image to UPLOAD</label>
        <input
          onChange={(e) => {
            // set the selected file in the state
            setImageFile(e.target.files[0])
          }}
          className='form-control'
          type='file'
        />

        <Button
          className='btn btn-outline-success'
          variant="contained"
          onClick={(e) => {
            uploadImageofPet(e)
          }}>
          Upload
        </Button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Button
            color="primary"
            size="large"
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          
          <br></br>
          <br></br>
          <br></br>
        </Paper>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
  );
}

export default ImageUpload;
