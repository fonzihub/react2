import Alert from "react-bootstrap/Alert";

const Welcome = ({ variant }) => {
  return (
    <Alert key={variant} variant={variant} className="text-center">
      This is my book-shop check it out!
    </Alert>
  );
};
export default Welcome;
