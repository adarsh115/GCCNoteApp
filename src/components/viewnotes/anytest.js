import React, { useState } from "react";
import { Button, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateToDo } from "../../redux/actions";

function MyVerticallyCenteredModal(props) {
  let dispatch = useDispatch();
  const currentDate = new Date();
  let newDate = `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getUTCFullYear()}`;
  const [success, setsuccess] = useState(false);
  const [updateTitle, setupdateTitle] = useState(props.title);
  const [updateDescription, setupdateDescription] = useState(props.description);
  const [updateTime, setupdateTime] = useState(newDate);

  const handleTitleChange = (e) => {
    setupdateTitle(e.target.value);
  };

  const handleTimeChange = (e) => {
    setupdateTime(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setupdateDescription(e.target.value);
  };

  const handleUpdateTodo = () => {
    dispatch(
      updateToDo({
        id: props.id,
        title: updateTitle,
        datetime: updateTime,
        description: updateDescription,
      })
    );
    setsuccess(false);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <Container>
            <Row xs={12} md={8} lg={20}>
              {success ? (
                <Form.Control
                  label="title"
                  type="text"
                  value={updateTitle}
                  onChange={handleTitleChange}
                />
              ) : (
                <h4>{props.title}</h4>
              )}
            </Row>
            <Row xs={8} md={4}>
              {success ? (
                <Form.Control
                  label="title"
                  type="text"
                  value={updateTime}
                  onChange={handleTimeChange}
                />
              ) : (
                <p style={{ fontSize: "70%", color: "gray" }}>
                  {props.datetime}
                </p>
              )}
            </Row>
          </Container>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {success ? (
          <Form.Control
            as="textarea"
            type="text"
            rows={4}
            value={updateDescription}
            onChange={handleDescriptionChange}
          />
        ) : (
          <p>{props.description}</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        {" "}
        <Button
          variant="danger"
          size="sm"
          onClick={() => {
            props.onDelete();
            props.onHide();
          }}
        >
          DELETE
        </Button>{" "}
        {success ? (
          <Button variant="success" size="sm" onClick={handleUpdateTodo}>
            UPDATE NOTES
          </Button>
        ) : (
          <Button size="sm" onClick={() => setsuccess(true)}>
            EDIT NOTES
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
