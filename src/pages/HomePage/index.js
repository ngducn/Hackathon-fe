import React, { useState, useEffect } from "react";
import { ListGroup, Form, Col, Row, ButtonGroup, Button } from "react-bootstrap";

import Map from "../../components/Map";

const url = process.env.REACT_APP_BACKEND_API

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array
}

function ListCard({ petition, onSelectPetition }) {
  return (
    <ListGroup.Item onClick={() => onSelectPetition(petition)}>
      {petition.owner.firstName + " " + petition.owner.lastName}
    </ListGroup.Item>
  );
}

function HomePage() {
  const [petitions, setPetitions] = useState([])
  const [allPetitions, setAllPetitions] = useState([])
  const [selectedPetitionType, setSelectedPetitionType] = useState("receive");
  const [selectedPetition, setSelectedPetition] = useState("receive");
  const [metaData, setMetaData] = useState({
    requestedCount: 0,
    completedCount: 0,
    providersWaiting: 0,
  })


  useEffect( () => {
    const fetchPetitions = async () => {
      const resp = await fetch(url + '/petitions')
      const json = await resp.json()
      const { petitions: newPetitions } = json.data
      setAllPetitions(newPetitions)
      setPetitions(newPetitions)
      setMetaData({
        requestedCount: newPetitions.filter((p) => p.type === "receive").length,
        completedCount: newPetitions.filter((p) => p.status === "complete")
          .length,
        providersWaiting: newPetitions.filter((p) => p.type === "provide")
          .length,
      });
    }
    fetchPetitions()
  }, [])

  const onSelectPetitionType = ({target: { value }}) => {
    setSelectedPetitionType(value);
    const filteredPetitions = allPetitions.filter(p => p.type === value)
    setPetitions(filteredPetitions);
  }

  const onSelectPetition = (hm) => {
    // setSelectedPetition()
    console.log('Hi', hm);
  }

  return (
    <Row>
      <Col
        md="3"
        className="p-1"
        style={{ maxHeight: "100vh", overflowY: "scroll" }}
      >
        <Form className="m-3">
          <Form.Control type="query" placeholder="Facemasks..." />
        </Form>
        <ButtonGroup aria-label="Basic example" className="m-3">
          <Button
            onClick={onSelectPetitionType}
            value={"receive"}
            variant="danger"
          >
            Requests {metaData.requestedCount}
          </Button>
          <Button
            variant="info"
            value={"provide"}
            onClick={onSelectPetitionType}
          >
            Available {metaData.requestedCount}
          </Button>
          <Button
            onClick={onSelectPetitionType}
            value={"relived"}
            variant="success"
          >
            Relived {metaData.completedCount}
          </Button>
        </ButtonGroup>
        <ListGroup style={{ maxHeight: "100vh" }}>
          {shuffleArray(petitions).map((p) => (
            <ListCard petition={p} onSelectPetition={onSelectPetition} />
          ))}
        </ListGroup>
      </Col>
      <Col md="9">
        <Map petitions={petitions} />
      </Col>
    </Row>
  );
}

export default HomePage;
