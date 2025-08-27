import SingleBook from "./SingleBook";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";

const BookList = (props) => {
  const [bar, setBar] = useState("");

  return (
    <Container>
      <Row className="justify-content-center my-3">
        <Col xs={12} md={6}>
          <Form.Control
            type="text"
            placeholder="Search for a book..."
            value={bar}
            onChange={(e) => setBar(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        {props.books
          .filter((b) => b.title.toLowerCase().includes(bar.toLowerCase()))
          .map((libro) => (
            <Col xs={12} md={4} key={libro.asin}>
              <SingleBook img={libro.img} title={libro.title} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default BookList;
