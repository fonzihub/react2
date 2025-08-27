import SingleBook from "./SingleBook";
import { Container, Row, Col } from "react-bootstrap";

const BookList = (props) => {
  return (
    <Container>
      <Row>
        {props.books.map((libro) => (
          <Col xs={12} md={4}>
            <SingleBook img={libro.img} title={libro.title} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
