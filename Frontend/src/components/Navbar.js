import React, { useEffect } from "react";
import {
  Tab,
  Tabs,
  Toolbar,
  AppBar,
  styled,
  Menu,
  alpha,
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuItem from "@mui/material/MenuItem";
import PetsIcon from "@mui/icons-material/Pets";
import AuthenticationService from "./services/AuthenticationService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toolbarStyle = {
  minHeight: "60px",
  background: "2E3B55",
};

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(0),
    minWidth: 140,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function NavMenu() {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const open = Boolean(anchorEl);

  const [users, setUsers] = useState([]);
  // let {id} = useParams();
  // useEffect(() => {
  //   localStorage.setItem("cont", id);

  //   console.log(id+" this is id");
  //   fetch(`http://localhost:8080/petparadise/user/${id}`)
  //   .then((res) => res.json())
  //   .then((result) => {
  //     setUsers(result);
  //   });
    
  //   console.log("ucid "+users.ucid);
  //   console.log("ucid "+users.userid);
  // }, []);

  const role = AuthenticationService.getUserRole();
       

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    toast.success(" Our Volunteer will contact you soon... Thank you!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleServiceClose = () => {
    setAnchorEl(null);
  }

  const handleLogout = () => {
     // go to signin page
     sessionStorage.removeItem('jwt')
     sessionStorage.removeItem('user_email')
     sessionStorage.removeItem('user_role')
     sessionStorage.removeItem('user_id')
     navigate('/')

     // send the action to let the user signout
     // dispatch(signout())
    //localStorage.removeItem("cont");
    //localStorage.clear();
    //navigate("/");
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <ToastContainer/>
      <AppBar position="fixed" style={{ background: "#2E3B55" }} maxHeight={30}>
        <Box sx={{ flexGrow: 1 }}>
          <Toolbar style={toolbarStyle}>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              <h3>
                {" "}
                <PetsIcon sx={{ fontSize: 40 }} /> Pet Paradise
              </h3>
            </Typography>
          </Toolbar>
        </Box>

        {/* {(users.ucid === 1001 || users.ucid === 1002 || users.ucid === 1003 || users.ucid === 1004) ? ( */}
        {(role === '[ROLE_ADMIN]' || role === '[ROLE_FOSTER]' || role === '[ROLE_ADOPTER]' || role === '[ROLE_VOLUNTEER]') ? (
        <Toolbar>
          <Tabs
            textColor="white"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="primary"
          >
            {/* {(users.ucid === 1001 || users.ucid === 1002 || users.ucid === 1003 || users.ucid === 1004) ? ( */}
            {(role === '[ROLE_ADMIN]' || role === '[ROLE_FOSTER]' || role === '[ROLE_ADOPTER]' || role === '[ROLE_VOLUNTEER]') ? (
            <Tab
              onClick={() => {
                navigate("/home");
              }}
              name = "home" 
              label="HOME"
            />
              ) : (" ") } 

            {/* {users.ucid === 1003 ? ( */}
            {role === '[ROLE_FOSTER]' ? (
            <Tab
              onClick={() => {
                navigate("/addpet");
              }}
              label="ADD PET"
            />
             ) : ( " ")} 
            
             {role === '[ROLE_FOSTER]' ? (
            <Tab
              onClick={() => {
                navigate("/viewpet");
              }}
              label="VIEW YOUR PET"
            />
             ) : ( " ")} 

             {role === '[ROLE_ADMIN]' ? ( 
            <Tab
              onClick={() => {
                navigate("/adopterlist");
              }}
              label="ADOPTER LIST"
            />
              ) : ( " ")} 

             {role === '[ROLE_ADMIN]' ? ( 
            <Tab
              onClick={() => {
                navigate("/fosterlist");
              }}
              label="FOSTER LIST"
            />
              ) : ( " ")} 

              {role === '[ROLE_ADMIN]' ? ( 
            <Tab
              onClick={() => {
                navigate("/volunteerlist");
              }}
              label="VOLUNTEER LIST"
            />
           ) : ( " ")} 

              {role === '[ROLE_ADMIN]' ? ( 
            <Tab
              onClick={() => {
                navigate("/donationdetails");
              }}
              label="DONATION DETAILS"
            />
              ) : ( " ")} 

            {role === '[ROLE_ADMIN]' || role === '[ROLE_VOLUNTEER]' ? ( 
            <Tab
              onClick={() => {
                navigate("/serviceRequests");
              }}
              label="SERVICE REQUESTS"
            />
            ) : ( " ")} 

            {( role === '[ROLE_FOSTER]' || role === '[ROLE_ADOPTER]') ? (
            <Tab
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="inherit"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
              style={{
                borderRadius: 5,
                padding: "6px 20px",
                fontSize: "16px",
              }}
              label="SERVICES"
            />
              ) : ( " ")} 

            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleServiceClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                Training
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                Grooming
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                Insurance
              </MenuItem>
            </StyledMenu>
          </Tabs>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 2 }}
          ></Typography>

          
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Avatar1" src="/images/avatar1.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={ () => navigate("/profile")} disableRipple>
                Profile
              </MenuItem>
              <MenuItem disabled>
                WishList
              </MenuItem>
              <MenuItem onClick={handleLogout} disableRipple>
                Logout
              </MenuItem>
            </Menu>
          </Box>
              
        </Toolbar>
          ) : ( " ")} 
      </AppBar>
      <br></br>
      <br></br>
      
    </div>
  );
}
