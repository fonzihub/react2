import "./App.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";
import SearchBooks from "./Components/SearchBooks";
import SingleBook from "./Components/SingleBook";
// import allBooks from "./Components/allBooks.js";
import BookList from "./Components/BookList";
import fantasy from "./assets/data/fantasy.json";
import horror from "./assets/data/horror.json";
import history from "./assets/data/history.json";
import CommentArea from "./Components/CommentArea";

function App() {
  return (
    <>
      <MyNav />
      <Welcome variant="primary" />
      <SearchBooks />
      <h1 className="text-center my-4">Secondo esercizio </h1>
      <SingleBook img={fantasy[20].img} title={fantasy[20].title} />
      <BookList books={fantasy} />
      <SingleBook img={history[20].img} title={history[20].title} />
      <BookList books={history} />
      <SingleBook img={history[1].img} title={history[1].title} />
      <BookList books={horror} />

      <MyFooter />
    </>
  );
}

export default App;
