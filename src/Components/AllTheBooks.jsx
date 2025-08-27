import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import fantasy from "../assets/data/fantasy.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AllTheBooks = () => {
  return (
    <Container>
      <Row>
        {fantasy.map((book) => (
          <Col xs={12} md={4} lg={3} className="mb-3">
            <Card key={book.asin} className="h-100">
              <Card.Img
                variant="top"
                src={book.img}
                style={{ height: "20em", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{book.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {book.price}$ - {book.category}
                </Card.Text>
              </Card.Body>
              <Button
                variant="primary"
                className="w-75 d-flex justify-content-center mx-auto mb-2"
              >
                Go somewhere
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
