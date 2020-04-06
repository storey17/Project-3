import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Jumbotron1 from "../../components/Jumbotron1/Jumbotron1";
import Nav from "../../components/Nav";

function NoMatch() {
  return (
    <Container fluid>
      <Nav/>
      <Jumbotron1/>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
