import ListGroup from "react-bootstrap/ListGroup";

const CommentList = ({ recensioni }) => {
  return (
    <ListGroup>
      {recensioni.map((rev) => {
        return (
          <ListGroup.Item key={rev._id}>
            {rev.comment} - {rev.rate} - {rev.author}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};
export default CommentList;
