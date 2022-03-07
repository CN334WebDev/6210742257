import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  Image,
  Button,
  Accordion,
  useAccordionButton,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import components
import Create from "./Create";
import Edit from "./Edit";

const setingIcon = "https://img.icons8.com/color/48/ffffff/gear.png";
const githubIcon = "https://img.icons8.com/glyph-neue/128/000000/github.png";
const demoIcon = "https://img.icons8.com/glyph-neue/64/000000/video.png";
const dateIcon =
  "https://img.icons8.com/material-rounded/96/000000/thursday.png";

const endpoint = "http://localhost:8000/api";

function CreateToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button onClick={decoratedOnClick} class="btn-create">
      {children}
    </button>
  );
}

function EditToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button onClick={decoratedOnClick} class="btn-edit">
      {children}
    </button>
  );
}

const SofwareProject = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = async () => {
    const response = await axios.get(`${endpoint}/software-projects`);
    setProjects(response.data);
    //console.log(response.data)
  };

  const deleteProject = async (id) => {
    await axios.delete(`${endpoint}/software-project/${id}`);
    navigate("/delete-success");
    getAllProjects();
  };

  return (
    <div className="card-container">
      <Card
        bg="dark"
        style={{
          width: "100%",
          marginLeft: "1%",
          marginTop: "1rem",
          padding: "0.5rem",
          paddingLeft: "18px",
          paddingRight: "18px",
        }}
      >
        <Accordion defaultActiveKey="0">
          {/* -------------------create button------------------- */}
          <CreateToggle eventKey="1">Create</CreateToggle>{" "}
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {/* -------------------form------------------- */}
              <Create />
            </Card.Body>
          </Accordion.Collapse>
        </Accordion>
      </Card>

      {projects.map((project) => (
        <Card
          bg="dark"
          style={{ width: "100%", marginLeft: "1%", marginTop: "1rem" }}
          key={project.id}
        >
          <Card.Header>
            <Accordion defaultActiveKey="0">
              {/* -------------------create button------------------- */}
              <CreateToggle eventKey="1">Create</CreateToggle>{" "}
              {/* -------------------table name------------------- */}
              <b
                class="text-uppercase fs-6 fw-bold"
                style={{ marginLeft: "1%" }}
              >
                Software Project
              </b>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  {/* -------------------form------------------- */}
                  <Create />
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
          </Card.Header>

          <Card.Body className="cardbody-container">
            <Card.Title>
              {/* -------------------col 1: language------------------- */}
              <b class="text-capitalize fs-6 device-container">
                <Image id="device-icon" src={setingIcon} />
                {project.language}
              </b>{" "}
              {/* -------------------col 2: framework------------------- */}
              <b class="text-capitalize fs-6 device-container">
                <Image id="device-icon" src={setingIcon} />
                {project.framework}
              </b>{" "}
              {/* -------------------col 3: tool------------------- */}
              <b class="text-capitalize fs-6 device-container">
                <Image id="device-icon" src={setingIcon} />
                {project.tool}
              </b>
            </Card.Title>
            <Card.Text>
              <div className="rectangle">
                {/* -------------------col 4: name------------------- */}
                <h5 class="text-uppercase" style={{ fontWeight: "bold" }}>
                  {project.name}
                </h5>
                {/* -------------------col 5: mockup_url------------------- */}
                <img className="mockup_url" src={project.mockup_url} />
                {console.log(project.mockup_url)}
                {/* ------------------col 6: description------------------ */}
                <div class="text-uppercase-end fs-6 fw-light description">
                  {project.description}
                </div>

                <div style={{ justifyItems: "flex-end", marginTop: "5%" }}>
                  {" "}
                  {/* -----------------col 7: demo_url----------------- */}
                  <a href={project.demo_url}>
                    <Button variant={null}>
                      <Image
                        style={{
                          width: "40px",
                        }}
                        src={demoIcon}
                      />{" "}
                      <span>Demo project link</span>
                    </Button>
                  </a>
                  {/* -----------------col 8: github_url----------------- */}
                  <a href={project.project_url}>
                    <Button variant={null}>
                      <Image
                        style={{
                          width: "40px",
                        }}
                        src={githubIcon}
                      />{" "}
                      <span>Github project link</span>
                    </Button>
                  </a>
                  <span>
                    <Button variant={null}>
                      <Image
                        style={{
                          width: "40px",
                        }}
                        src={dateIcon}
                      />{" "}
                      {/* -----------------col 9: date----------------- */}
                      <span>{project.date}</span>
                    </Button>
                  </span>
                </div>
              </div>
            </Card.Text>
          </Card.Body>

          <Card.Footer>
            <button
              onClick={() => deleteProject(project.id)}
              class="btn-delete"
            >
              Delete
            </button>
            <Accordion defaultActiveKey="0">
              <EditToggle eventKey="1">Edit</EditToggle>{" "}
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Edit id={project.id} />
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default SofwareProject;
