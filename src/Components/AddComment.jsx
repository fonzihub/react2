import { Form, Button } from "react-bootstrap";
import {useState} from "react"

const AddComment = () => {

const [comment,setComment] = useState("");
const[rate,setRate] = useState("1");
const elementId = 


  return (
    <>
      <h4>Ti è piaciuto?</h4>
      <Form>
        <Form.Group>
          <Form.Control type="text" />
          <Form.Select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Button type="submit">Save</Button>
        </Form.Group>
      </Form>
    </>
  );
};
export default AddComment;
