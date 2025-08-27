import SingleBook from "./SingleBook";

const BookList = (props) => {
  return (
    <>
      {props.books.map((libro) => (
        <SingleBook img={libro.img} title={libro.title} />
      ))}
    </>
  );
};

export default BookList;
