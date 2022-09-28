import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function AdopterList() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(
      "http://localhost:8080/petparadise/admin/adopters",
      //"https://jsonplaceholder.typicode.com/users"
      //"http://localhost:8080/petparadise/pet/availablepets"
      {
        headers: { Authorization: `Bearer ${sessionStorage['jwt']}` },
      }
    );
    setUsers(await response.json());
    console.log(response);
  };

  //[] is used to avoid infinite loop
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Adopter List </h1>
      <br></br>
      <TableContainer component={Paper} align="center" elevation={3}>
        <Table sx={{ maxWidth: 1200 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="left">Contact</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">City</StyledTableCell>
              <StyledTableCell align="left">State</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <StyledTableRow key={row.fullname}>
                <StyledTableCell component="th" scope="row">
                  {row.fullname}
                </StyledTableCell>
                <StyledTableCell align="left">{row.contactno}</StyledTableCell>
                <StyledTableCell align="left">{row.email}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.city}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.state}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
    </Container>
  );
}

export default AdopterList;
