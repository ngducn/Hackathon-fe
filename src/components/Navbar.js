import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";

import i18n from "i18next";
import { useTranslation } from "react-i18next";
import "../translations/i18n";

export default function Navbarr() {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">{t("codevid_relief")}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">{t("activity")}</Nav.Link>
              <Nav.Link href="#link">{t("requests")}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
