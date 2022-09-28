import {
  BottomNavigation,
  CardContent,
  Divider,
  Fade,
  Popper,
  Typography,
  Button,
  Card,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import PetsIcon from "@mui/icons-material/Pets";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { pink, green } from "@mui/material/colors";

function Footer() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  return (
    <BottomNavigation
      showLabels
      style={{ background: "#2E3B55", minHeight: "180px" }}
    >
      <div className="text-center" style={{ bottom: 0 }}>
        <Typography
          color="white"
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          <br></br>
          © 2022 All Rights Reserved &nbsp; <PetsIcon
            sx={{ fontSize: 15 }}
          />{" "}
          PET PARADISE
        </Typography>
        <Button onClick={handleClick}>
          <div>
            <Typography
              variant="subtitle1"
              color="yellow"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <InfoIcon sx={{ fontSize: 15 }} /> HELP CENTRE
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
          </div>
        </Button>
        <div>
          <br></br>
          <Typography
            color="white"
            variant="h6"
            component="div"
            align="center"
            sx={{ flexGrow: 1 }}
          >
            FOLLOW US ON &nbsp;&nbsp;
            <a href="https://www.instagram.com/" target="_blank">
              <InstagramIcon sx={{ fontSize: 30, color: pink[500] }} />{" "}
            </a>
            &nbsp;&nbsp;
            <a href="https://www.facebook.com/" target="_blank">
              <FacebookIcon color="primary" sx={{ fontSize: 30 }} />{" "}
            </a>
            &nbsp;&nbsp;
            <a href="https://web.whatsapp.com/" target="_blank">
              <WhatsAppIcon
                color="success"
                sx={{ fontSize: 25, color: green[400] }}
              />{" "}
            </a>
            &nbsp;&nbsp;
            <a href="https://twitter.com/" target="_blank">
              <TwitterIcon color="primary" sx={{ fontSize: 25 }} />{" "}
            </a>
          </Typography>
        </div>

        <Popper id={id} open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Box sx={{ border: 0, p: 1, bgcolor: "primary" }}>
                <Card sx={{ minWidth: 80, minHeight: 50 }} variant="outlined">
                  <CardContent>
                    <br></br>
                    <Typography
                      sx={{ fontSize: 15 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Contact: 1800-123-0025
                      <br></br>
                      <br></br>
                      <Divider />
                      <br></br>
                      Mail : help.petparadise0827@gmail.com
                    </Typography>
                    <br></br>
                  </CardContent>
                </Card>
              </Box>
            </Fade>
          )}
        </Popper>
      </div>
      <div></div>
    </BottomNavigation>
  );
}

export default Footer;
