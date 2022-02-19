import React, { useEffect, useState } from "react";
import "./JobPostingForm.css";
import data from "../Data";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import { Button, FormControl, Col, Row, Form } from "react-bootstrap";
import axios from "axios";

const INITIAL_STATE = {
  title: "full stack",
  jobDescription: "",
  location: [],
  mustHaveSkills: [],
  yearsOfExperience: 3,
  categories: [],
  EmploymentType: [],
};

const JobPostingForm = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const [validated, setValidated] = useState(false);
  const locations = data.locations;
  const skills = data.skills;
  const categoryList = data.categoryList;
  const EmploymentType = data.EmploymentType;

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    if (state.categories.length < 0) {
      setValidated(false);
    }
    const obj = state;
    console.log("final " + JSON.stringify(state));

    setValidated(true);
  };

  return (
    <div>
      <h1 style={{ margin: "1rem 0 4rem 0 " }}>Job Posting Website</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label style={{ fontWeight: "bold" }}>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Mark"
              defaultValue={state.title}
              onChange={(e) => {
                setState((prev) => {
                  return { ...prev, title: e.target.value };
                });
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label style={{ fontWeight: "bold" }}>Location</Form.Label>
            <Select
              required
              options={locations}
              value={state.location}
              onChange={(e) => {
                setState((prev) => {
                  return {
                    ...prev,
                    location: e,
                  };
                });
              }}
              isMulti={true}
            />

            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label style={{ fontWeight: "bold" }}>
              Min Years of Experience Required{" "}
            </Form.Label>
            <FormControl
              required
              type="number"
              placeholder="Enter Number"
              aria-label="Text input with dropdown button"
              defaultValue={state.jobExperince}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label style={{ fontWeight: "bold" }}>
              Job Description
            </Form.Label>
            <Form.Control
              onChange={(e) => {
                setState((prev) => {
                  return { ...prev, jobDescription: e.target.value };
                });
              }}
              type="text"
              placeholder="Job Description"
              required
              style={{
                height: "10rem",
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Job description.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label style={{ fontWeight: "bold" }}>Category</Form.Label>
            <Select
              required
              options={categoryList}
              value={state.categories}
              onChange={(e) => {
                setState((prev) => {
                  return { ...prev, categories: e };
                });
              }}
              isMulti={true}
            />

            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label style={{ fontWeight: "bold" }}>
              Required Skills
            </Form.Label>
            <Select
              required
              options={skills}
              value={state.mustHaveSkills}
              onChange={(e) => {
                setState((prev) => {
                  return {
                    ...prev,
                    mustHaveSkills: e,
                  };
                });
              }}
              isMulti={true}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label style={{ fontWeight: "bold" }}>
              {" "}
              Employment Type
            </Form.Label>
            <Select
              required
              options={EmploymentType}
              value={state.EmploymentType}
              onChange={(e) => {
                setState((prev) => {
                  return {
                    ...prev,
                    EmploymentType: e,
                  };
                });
              }}
              isMulti={true}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Post Job</Button>
      </Form>
    </div>
  );
};

export default JobPostingForm;
