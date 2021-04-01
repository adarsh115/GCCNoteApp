import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

import { useSelector, useDispatch } from "react-redux";
import { deleteToDo } from "../../redux/actions";

const style = {
  backgroundColor: "#282c34",
  color: "white",
  padding: "20px",
  marginTop: "36px",
};

const titleColumn = {
  backgroundColor: "lightgreen",
  margin: "10px",
  padding: "8px 15px ",
  paddingRight: "25px",
  borderRadius: "10px",
  color: "black",
  cursor: "pointer",
};

const editColumn = {
  backgroundColor: "lightblue",
  margin: "10px",
  padding: "12px",
  borderRadius: "10px",
  color: "black",
  fontWeight: "400",
  cursor: "pointer",
};

const deleteColumn = {
  backgroundColor: "salmon",
  margin: "10px",
  padding: "12px",
  borderRadius: "10px",
  color: "black",
  fontWeight: "400",
  cursor: "pointer",
};

function Viewnotes() {
  const todos = useSelector((state) => state);
  let dispatch = useDispatch();

  // *******************************************************************
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Col style={style} sm={8}>
      <h2>ViewNotes</h2>

      {todos.map(({ id, title, datetime, description }) => {
        return (
          <Container fluid="md">
            {/* ********************************************************** */}

            <Row key={id}>
              <>
                <Col
                  onClick={() => setModalShow(true)}
                  style={titleColumn}
                  lg={9}
                >
                  {/* Row inside column */}
                  <Row>
                    <Col sm={10} lg={11}>
                      <h5>{title}</h5>
                    </Col>
                    <Col lg={1} sm={2} md={2}>
                      <p>time</p>
                    </Col>
                  </Row>
                </Col>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  description={description}
                />
              </>
              {/* column for displaying edit button */}
              <Col
                className="d-flex justify-content-center"
                style={editColumn}
                xs={2}
                sm={2}
                lg={1}
                md={2}
              >
                Edit
              </Col>
              <Col
                onClick={() => dispatch(deleteToDo(id))}
                className="d-flex justify-content-center"
                style={deleteColumn}
                xs={2}
                sm={2}
                lg={1}
                md={2}
              >
                Delete
              </Col>
            </Row>
          </Container>
        );
      })}
      {/*  */}
    </Col>
  );
}

export default Viewnotes;
