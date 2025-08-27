import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import allBooks from "../Components/allBooks";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const SearchBooks = () => {
  const [query, setQuery] = useState("");

  const filteredBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container>
      {/* search bar */}
      <Form className="mb-3 mx-auto w-50">
        <Form.Control
          type="text"
          className="text-center"
          placeholder="Search for a book..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form>

      <Row>
        {filteredBooks.map((book) => (
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

export default SearchBooks;
