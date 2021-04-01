import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Col, Form, Fade } from "react-bootstrap";

import DateTimePicker from "react-datetime-picker";

import { addToDo } from "../../redux/actions";

import uuid from "react-uuid";
import { useDispatch } from "react-redux";

function Createnotes() {
  const [open, setOpen] = useState(false);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Time, setTime] = useState(new Date());

  let dispatch = useDispatch();

  const handleDateTime = (e) => {
    setTime(e);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleDiscard = () => {
    setTitle("");
    setDescription("");
    setTime(new Date());
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(uuid(), Title, Description, Time);
    dispatch(
      addToDo({
        id: uuid(),
        title: Title,
        datetime: Time,
        description: Description,
      })
    );
  };

  return (
    <Col sm={4}>
      <h4>Notes App</h4>
      <Button
        variant="success"
        size="md"
        block
        onClick={() => setOpen(true)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Add Note +
      </Button>
      <Fade in={open}>
        <div id="example-collapse-text">
          <Button
            style={{
              margin: "30px 0 0 0",
              textAlign: "center",
              paddingTop: "9px",
            }}
            onClick={handleDiscard}
            variant="danger"
            size="sm"
          >
            <h6>Discard</h6>
          </Button>
          <div
            style={{
              margin: "10px 0px 50px 0",
            }}
          >
            <DateTimePicker
              onChange={handleDateTime}
              value={Time}
              name="datetime"
              disableClock={true}
              calendarIcon={null}
              format="dd-MM-y"
              closeWidgets={false}
            />
          </div>

          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <label>Title</label>
              <Form.Control
                label="title"
                value={Title}
                onChange={handleTitle}
                placeholder="enter title"
              />
              <Form.Label>Description</Form.Label>
              <Form.Control
                label="description"
                value={Description}
                onChange={handleDescription}
                name="description"
                placeholder="enter description"
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Button
              onClick={(event) => handleSubmit(event)}
              variant="success"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </Fade>
    </Col>
  );
}

export default Createnotes;
