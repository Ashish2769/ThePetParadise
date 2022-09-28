import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Paper,
  Typography,
  Container,
  Button,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import httpCommon from "../http-common";
import { Message, SetMeal } from "@mui/icons-material";

function AdoptionRequest() {
  const navigate = useNavigate();
  const location = useLocation();
  const [adoptRequest, setAdoptRequest] = useState();
  const [msgBody, setMsgBody] = useState();
  const [subject, setSubject] = useState();
  const [email, setEmail] = useState("ashishgk27@gmail.com");
  // const [email, setEmail] = useState("wankhedeswapnil492@gmail.com")
  //const {email} = location.state

  console.log(email);
  // console.log(msgBody);
  // console.log(subject);

  const sendAdoptionRequest = (event) => {
    event.preventDefault();
    {
      const dataToSubmit = {
        email,
        msgBody,
        subject,
      };
      fetch("http://localhost:8080/petparadise/user/sendMail", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${sessionStorage["jwt"]}`,
        },
        body: JSON.stringify(dataToSubmit),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          toast.success(" Email Sent to foster successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
          //alert("Pet Information added successfully")
        });
    }
  };

  

  return (
    <div>
      <div className="mb-3">
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
              <h1>Send Adoption Request</h1>
            </Typography>
            <br></br>
            <br></br>
            <Typography variant="h5" display="block" gutterBottom>
              Recipient:{" "}
              <TextField
                id="email"
                name="email"
                color="primary"
                disabled="true"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <br></br>
              <br></br>
              Subject : &nbsp;&nbsp;
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Write subject here"
                style={{ width: 200 }}
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
              <br></br>
              <br></br>
              Message : &nbsp;&nbsp;
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Write message here"
                style={{ width: 200 }}
                value={msgBody}
                onChange={(event) => setMsgBody(event.target.value)}
              />
            </Typography>
            <br></br>
            <br></br>

            <Button
              color="primary"
              type="submit"
              size="large"
              variant="contained"
              onClick={sendAdoptionRequest}
            >
              Send
            </Button>
            <br></br>
            <br></br>
            <br></br>
          </Paper>
        </Container>
        <br></br>
        <br></br>
        <Button
          type="button"
          color="primary"
          variant="contained"
          size="large"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default AdoptionRequest;
