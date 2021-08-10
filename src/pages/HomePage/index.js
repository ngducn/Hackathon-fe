import React, { useState, useEffect } from "react";
import { Form, Col, Row, ButtonGroup, Button, } from "react-bootstrap";

import Map from "../../components/Map";

const url = process.env.REACT_APP_BACKEND_API

function HomePage() {
  const [allPetitions, setAllPetitions] = useState([])
  const [petitions, setPetitions] = useState([])
  const [selectedPetitionType, setSelectedPetitionType] = useState("receive");


  useEffect( () => {
    const fetchPetitions = async () => {
      const resp = await fetch(url + '/petitions')
      const json = await resp.json()
      setAllPetitions(json)
      setPetitions(json)
    }
    fetchPetitions()
  }, [])

  const onSelectPetitionType = ({target: { value }}) => {
    setSelectedPetitionType(value);
    const filteredPetitions = allPetitions.filter(p => p.type === value)
    setPetitions(filteredPetitions);
  }

  return (
    <Row>
      <Col md="3" className="p-1">
        <Form className="m-3">
          <Form.Control type="query" placeholder="Facemasks..." />
        </Form>
        <ButtonGroup aria-label="Basic example" className="m-3">
          <Button onClick={onSelectPetitionType} value={'receive'} variant="danger">Requests</Button>
          <Button onClick={onSelectPetitionType} value={'provide'} variant="info">Available</Button>
          <Button onClick={onSelectPetitionType} value={'relived'} variant="success">Relived</Button>
        </ButtonGroup>
      </Col>
      <Col md="9">
        <Map petitions={petitions} />
      </Col>
    </Row>
  );
}

export default HomePage;
