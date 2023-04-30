import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Shared/LeftNav/LeftNav";
import RightNav from "../Shared/RightNav/RightNav";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>

          <Col lg={6}>
            <h2>This is main </h2>
          </Col>

          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
