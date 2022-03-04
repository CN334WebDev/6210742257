import React from "react";
import { Carousel, Card } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Card bg="dark" style={{ width: "80%" }} className="card-container">
        <Card.Header>
          <div class="text-uppercase fs-6 fw-bold">Software Project</div>
        </Card.Header>
        <Card.Body className="cardbody-container">
          <Card.Title>
            <b class="text-capitalize fs-6 device-container">JavaScript</b>{" "}
            <b class="text-capitalize fs-6 device-container">React Js</b>{" "}
            <b class="text-capitalize fs-6 device-container">
              Visual Studio Code
            </b>{" "}
          </Card.Title>
          <Card.Text>
            <Carousel variant="dark" interval={null} indicators={false}>
              <Carousel.Item>
                <div className="rectangle"></div>
                <Carousel.Caption>
                  <h5>First slide label</h5>
                  <p class="text-uppercase-end fs-6 fw-light">
                    Nulla vitae elit libero, a pharetra augue mollis
                    interdum.Nulla vitae elit libero, a pharetra augue mollis
                    interdum.Nulla vitae elit libero, a pharetra augue mollis
                    interdum.Nulla vitae elit libero, a pharetra augue mollis
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="rectangle"></div>
                <Carousel.Caption>
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis
                    interdum.Nulla vitae elit libero, a pharetra augue mollis
                    interdum.Nulla vitae elit libero, a pharetra augue mollis
                    interdum.Nulla vitae elit libero, a pharetra augue mollis
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
