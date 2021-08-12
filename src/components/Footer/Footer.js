import React from "react";
import { Box, Container, Row, Column, FooterLink } from "./Footerstyle";
import logo from "./logo.png";

const Footer = () => {
  return (
    <>
      <Box className="bg-lightpink">
        <Container>
          <Row>
            <Column>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">How SOSmap works</FooterLink>
              <FooterLink href="#">FAQs</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </Column>
            <Column>
              <FooterLink href="#">Partner with us</FooterLink>
              <FooterLink href="#">Investor Relations</FooterLink>
              <FooterLink href="#">Legal Notices</FooterLink>
              <FooterLink href="#">Teaching</FooterLink>
            </Column>
            <Column>
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Jobs</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </Column>
            <Column>
              <FooterLink href="#">
                <i className="fab fa-facebook-square"></i>
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram"></i>
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter"></i>
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-youtube"></i>
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </FooterLink>
            </Column>
          </Row>
          <div
            style={{
              marginTop: "15px",
              fontSize: "30px",
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "black" }}>SOSmap</p>
            <img
              src={logo}
              alt=""
              width="40"
              height="40"
              className="d-inline-block align-top"
              style={{ color: "black" }}
            />
          </div>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
