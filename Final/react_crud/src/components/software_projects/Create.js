import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

const endpoint = "http://localhost:8000/api/software-project";

const fields = {
  color: "white",
  backgroundColor: "#31363b",
  borderColor: "#212529",
  marginBottom: "0.3rem",
};

const Create = () => {
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");
  const [framework, setFramework] = useState("");
  const [tool, setTool] = useState("");
  const [project_url, setProjectUrl] = useState("");
  const [mockup_url, setMockupUrl] = useState("");
  const [demo_url, setDemoUrl] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, {
      name: name,
      language: language,
      framework: framework,
      tool: tool,
      project_url: project_url,
      mockup_url: mockup_url,
      demo_url: demo_url,
      date: date,
      description: description,
    });
    navigate("/create-success");
  };
  return (
    <div>
      <Form className="form" onSubmit={store}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              style={fields}
              type="text"
              placeholder="Project Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="language">
            <Form.Label>Language</Form.Label>
            <Form.Control
              style={fields}
              type="text"
              placeholder="Programming Language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="framework">
            <Form.Label>Framework</Form.Label>
            <Form.Control
              style={fields}
              type="text"
              placeholder="Framework"
              value={framework}
              onChange={(e) => setFramework(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="tool">
            <Form.Label>Editor</Form.Label>

            <Form.Control
              style={fields}
              type="text"
              placeholder="Editor Development"
              value={tool}
              onChange={(e) => setTool(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          {" "}
          <Form.Group as={Col} controlId="project_url">
            <Form.Label>Project URL</Form.Label>
            <Form.Control
              style={fields}
              type="text"
              placeholder="Project URL"
              value={project_url}
              onChange={(e) => setProjectUrl(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="mockup_url">
            <Form.Label>Mockup URL</Form.Label>
            <Form.Control
              style={fields}
              type="text"
              placeholder="Mockup URL"
              value={mockup_url}
              onChange={(e) => setMockupUrl(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          {" "}
          <Form.Group as={Col} controlId="demo_url">
            <Form.Label>Demo URL</Form.Label>
            <Form.Control
              style={fields}
              type="text"
              placeholder="Demo URL"
              value={demo_url}
              onChange={(e) => setDemoUrl(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="date">
            <Form.Label>Project Date</Form.Label>
            <Form.Control
              style={fields}
              type="text"
              placeholder="dd/mm/yyyy"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            style={fields}
            as="textarea"
            row={3}
            placeholder="Project description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <button class="btn-create-sub" type="submit" role="button">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Create;
