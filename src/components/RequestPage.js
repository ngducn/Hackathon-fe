import React from "react";
import { Card, Button, Container, Row, Col, ProgressBar } from "react-bootstrap";


const RequestPage = () => {

    return (
        <Container style={{marginTop:"1rem"}}>
            <h1 style={{textAlign:"center"}}>Donation requests</h1>
            <Row>
                <Col xs={12} md={6} lg={3}>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" style={{height:"180px"}} src="https://www.thelist.com/img/gallery/the-most-dramatic-celebrity-transformations-of-the-past-decade/intro-1575646375.jpg" />
  <Card.Body>
    <Card.Title>Thao</Card.Title>
    <p style={{fontSize:"small"}}>Need 300.000đ</p>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" href="/Banktransfer">Donate now</Button>
  </Card.Body>
  <p style={{fontSize:"small"}}>210.000đ to go</p>
  <ProgressBar variant="danger" now={30} label={"30%"} />
</Card>
   </Col>

   <Col xs={12} md={6} lg={3}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" style={{height:"180px"}} src="https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,h_128,dpr_3/https://assets.app.engoo.com/images/01Ozk4hLgN392LCt8bDYUV.jpeg" />
  <Card.Body>
    <Card.Title>Tina</Card.Title>
    <p style={{fontSize:"small"}}>Need 600.000đ</p>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" href="/Banktransfer">Donate now</Button>
  </Card.Body>
  <p style={{fontSize:"small"}}>540.000đ to go</p>
  <ProgressBar variant="danger" now={10} label={"10%"} />
</Card>
 </Col>

 <Col xs={12} md={6} lg={3}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" style={{height:"180px"}} src="https://assets.teenvogue.com/photos/5f4a51db79acd104fca38e4e/16:9/w_2560%2Cc_limit/GettyImages-927248486.jpg" />
  <Card.Body>
    <Card.Title>Patrick</Card.Title>
    <p style={{fontSize:"small"}}>Need 500.000đ</p>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" href="/Banktransfer">Donate now</Button>
  </Card.Body>
  <p style={{fontSize:"small"}}>100.000đ to go</p>
  <ProgressBar variant="danger" now={80} label={"80%"} />
</Card>
</Col>

<Col xs={12} md={6} lg={3}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" style={{height:"180px"}} src="https://image.ajunews.com/content/image/2021/01/28/20210128100823226218.jpg" />
  <Card.Body>
    <Card.Title>Anna</Card.Title>
    <p style={{fontSize:"small"}}>Need 200.000đ</p>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" href="/Banktransfer">Donate now</Button>
  </Card.Body>
  <p style={{fontSize:"small"}}>100.000đ to go</p>
  <ProgressBar variant="danger" now={50} label={"50%"} />
</Card>
</Col>

</Row>
</Container>
    )
}

export default RequestPage