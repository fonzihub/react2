import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import CommentArea from "./CommentArea";

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Card className={` mx-auto ${selected ? "redborder" : ""}`}>
        <Card.Img
          variant="top"
          src={props.img}
          onClick={() => {
            setSelected(!selected);
          }}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quo
            illum consectetur quasi, dolorum dignissimos non magnam quaerat
            voluptatibus consequatur provident corporis similique nemo rerum
            facilis. Beatae quibusdam aliquam excepturi.
          </Card.Text>
          <p className="text-success">
            {selected ? "You selected this book" : ""}
          </p>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        {selected && <CommentArea id={props.asin} />}
      </Card>
    </>
  );
};

export default SingleBook;
