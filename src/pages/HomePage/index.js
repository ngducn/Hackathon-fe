import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Form,
  Button,
  ListGroup,
  ButtonGroup,
} from "react-bootstrap";
import moment from 'moment'

import Map from "../../components/Map";

const url = process.env.REACT_APP_BACKEND_API;

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function SelectedPetitionInfoPanelSidebar(props) {
  if (props.petition) {
    console.log(props.petition);
  }
    return (
      <div>
        <h1>Selected Petition</h1>
      </div>
    );
}

function ListCard({ petition, onSelectPetition }) {
  return (
    <ListGroup.Item onClick={() => onSelectPetition(petition)} className="d-flex">
      <div className="m-1">
        <img src={petition.owner.imageUrl} height={100} width={100} />
      </div>
      <div className="m-1">
        <h6>{petition.owner.firstName + " " + petition.owner.lastName}</h6>
        <div>{petition.type}</div>
        <div>{petition.status}</div>
        <div>{moment(petition.createdAt).fromNow()}</div>
      </div>
    </ListGroup.Item>
  );
}

function HomePage() {
  const [petitions, setPetitions] = useState([]);
  const [allPetitions, setAllPetitions] = useState([]);
  const [selectedPetitionType, setSelectedPetitionType] = useState("receive");
  const [selectedPetition, setSelectedPetition] = useState(null);
  const [metaData, setMetaData] = useState({
    requestedCount: 0,
    completedCount: 0,
    providersWaiting: 0,
    mCount: 0,
    fCount: 0,
  })

  useEffect(() => {
    const fetchPetitions = async () => {
      const resp = await fetch(url + "/petitions");
      const json = await resp.json();
      let newPetitions = json.data.petitions;

      setAllPetitions(newPetitions);
      setPetitions(newPetitions);
      setMetaData({
        requestedCount: newPetitions.filter((p) => p.type === "receive").length,
        completedCount: newPetitions.filter((p) => p.status === "complete")
          .length,
        providersWaiting: newPetitions.filter((p) => p.type === "provide")
          .length,
        mCount: newPetitions.filter((p) => p.owner.gender === "m").length,
        fCount: newPetitions.filter((p) => p.owner.gender === "f").length,
      });
    };
    fetchPetitions();
  }, []);

  const onSelectPetitionType = ({ target: { value } }) => {
    setSelectedPetitionType(value);
    const filteredPetitions = allPetitions.filter((p) => p.type === value);
    setPetitions(filteredPetitions);
  };

  const onSelectPetition = (hm) => {
    const selected = allPetitions.filter((p) => p._id === hm._id);
    setPetitions(selected);
    setSelectedPetition(selected[0]);
  };


  const onFilterByGender = (hm) => {
    console.log({ go: hm.value });
        const selected = allPetitions.filter((p) => p.owner.gender === hm.target.value);
        setPetitions(selected);
  }

  return (
    <Row>
      <Col
        md="3"
        className="pl-5"
        style={{ maxHeight: "100vh", overflowY: "scroll" }}
      >
        <Form className="m-3">
          <Form.Control type="query" placeholder="Facemasks..." />
        </Form>
        <h3>{selectedPetitionType}</h3>
        <SelectedPetitionInfoPanelSidebar petition={selectedPetition} />
        <ButtonGroup aria-label="Basic example" className="m-3">
          <Button
            variant="danger"
            value={"receive"}
            onClick={onSelectPetitionType}
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
            variant="success"
            value={"relived"}
            onClick={onSelectPetitionType}
          >
            Relived {metaData.completedCount}
          </Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Basic example" className="m-3">
          <Button variant="success" value={"m"} onClick={onFilterByGender}>
            Men {metaData.mCount}
          </Button>
          <Button variant="success" value={"f"} onClick={onFilterByGender}>
            Women {metaData.fCount}
          </Button>
        </ButtonGroup>
        <ListGroup style={{ maxHeight: "100vh" }}>
          {shuffleArray(petitions).map((p) => (
            <ListCard petition={p} onSelectPetition={onSelectPetition} />
          ))}
        </ListGroup>
      </Col>
      <Col md="9">
        <Map
          petitions={petitions}
          selectedPetition={selectedPetition}
          setSelectedPetition={setSelectedPetition}
        />
      </Col>
    </Row>
  );
}

export default HomePage;
