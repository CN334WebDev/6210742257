import React from "react";
import {
  Carousel,
  Card,
  Image,
  Button,
  Accordion,
  useAccordionButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";

// import components
import ProjectFrom from "./ProjectFrom";

const setingIcon = "https://img.icons8.com/color/48/ffffff/gear.png";
const githubIcon = "https://img.icons8.com/glyph-neue/128/000000/github.png";
const demoIcon =
  "https://img.icons8.com/ios-filled/100/000000/trial-version.png";
const dateIcon =
  "https://img.icons8.com/material-rounded/96/000000/thursday.png";

function CreateToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
      class="btn-create"
      role="button"
    >
      {children}
    </button>
  );
}

function EditToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
      class="btn-edit"
      role="button"
    >
      {children}
    </button>
  );
}

const Home = () => {
  return (
    <div className="card-container">
      <Card bg="dark" style={{ width: "100%", marginLeft: "1%" }}>
        <Card.Header>
          <Accordion defaultActiveKey="0">
            <CreateToggle eventKey="1">Create</CreateToggle>{" "}
            <b class="text-uppercase fs-6 fw-bold" style={{ marginLeft: "1%" }}>
              Software Project
            </b>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ProjectFrom />
              </Card.Body>
            </Accordion.Collapse>
          </Accordion>
        </Card.Header>
        <Card.Body className="cardbody-container">
          <Card.Title>
            <b class="text-capitalize fs-6 device-container">
              <Image id="device-icon" src={setingIcon} />
              JavaScript
            </b>{" "}
            <b class="text-capitalize fs-6 device-container">
              <Image id="device-icon" src={setingIcon} />
              React Js
            </b>{" "}
            <b class="text-capitalize fs-6 device-container">
              <Image id="device-icon" src={setingIcon} />
              Vs Code
            </b>
          </Card.Title>
          <Card.Text>
            <Carousel variant="dark" interval={null} indicators={false}>
              <Carousel.Item>
                <div className="rectangle">
                  <h5>Project Name</h5>
                </div>
                <Carousel.Caption>
                  <p class="text-uppercase-end fs-6 fw-light">
                    Description Description Description Description Description
                    Description Description Description Description Description
                    Description Description Description Description Description
                    Description Description Description Description Description
                  </p>

                  <Button as={Link} to="/history" variant={null}>
                    <Image
                      style={{
                        background: "#fff",
                        width: "20%",
                        height: "auto",
                        paddingInline: "0.5rem",
                      }}
                      src={demoIcon}
                    />{" "}
                    <span>www.demo.com</span>
                  </Button>

                  <Button as={Link} to="/history" variant={null}>
                    <Image
                      style={{
                        background: "#fff",
                        width: "20%",
                        height: "auto",
                        paddingInline: "0.5rem",
                      }}
                      src={githubIcon}
                    />{" "}
                    <span>www.github.com</span>
                  </Button>

                  <Button as={Link} to="/history" variant={null}>
                    <Image
                      style={{
                        background: "#fff",
                        width: "22%",
                        height: "auto",
                        paddingInline: "0.5rem",
                      }}
                      src={dateIcon}
                    />{" "}
                    <span>www.date.com</span>
                  </Button>
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
        <Card.Footer>
          <button class="btn-delete" role="button">
            Delete
          </button>

          <Accordion defaultActiveKey="0">
            <EditToggle eventKey="1">Edit</EditToggle>{" "}
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ProjectFrom />
              </Card.Body>
            </Accordion.Collapse>
          </Accordion>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Home;
