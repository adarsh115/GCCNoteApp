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

            <Row
              className="d-flex justify-content-center align-items-center"
              key={id}
            >
              <Col style={titleColumn} lg={10}>
                {/* Row inside column */}
                <Row className="d-flex justify-content-flex-end">
                  <Col onClick={() => setModalShow(true)} sm={10} lg={10}>
                    <h5>{title}</h5>
                  </Col>
                  <Col sm={2} lg={1}>
                    <p
                      style={{
                        fontSize: "80%",
                        color: "#2F4F4F",
                        fontWeight: "600",
                      }}
                    >
                      {datetime}
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <MyVerticallyCenteredModal
              id={id}
              show={modalShow}
              onDelete={() => dispatch(deleteToDo(id))}
              onHide={() => setModalShow(false)}
              title={title}
              datetime={datetime}
              description={description}
            />
          </Container>
        );
      })}

      {/*  */}
    </Col>
  );
}

export default Viewnotes;
