import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import RequestForm from "../RequestFrom";

import logo from "./logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const history = useHistory();

  const HandleClickOpen = () => {
    console.log(typeof localStorage.getItem("isLoggedIn"));
    if (localStorage.getItem("isLoggedIn") === "true") {
      console.log("if");
      setOpen(true);
    } else {
      console.log("else");
      alert("Please log in to use this function.");
      history.push("/login");
    }
  };

  return (
    <>
      <Navbar
        className="nav-bar justify-content-md-center "
        variant="dark"
        expand="lg"
      >
        <Link style={{ textDecoration: "none" }} as={Link} to={`/`}>
          <Navbar.Brand>
            <img
              src={logo}
              alt=""
              width="32"
              height="32"
              className="d-inline-block align-top"
            />
            SOSmap
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Nav className="mr-auto ">
            <Nav.Link href="#aboutus">About us</Nav.Link>
            <Nav.Link href="#successstories">Success stories</Nav.Link>
            <Nav.Link href="/requests">Requests</Nav.Link>
          </Nav>
          <div className=" justify-content-md-center">
            <Nav className="mr-auto justify-content-end">
              <Button
                variant="outlined"
                color="danger"
                onClick={HandleClickOpen}
              >
                Make a request
              </Button>
              <Nav.Link href="/login">LogIn</Nav.Link>
              <Nav.Link href="/signup">Sign up</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>

      <RequestForm open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
