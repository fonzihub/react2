import "./App.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";
import SearchBooks from "./Components/SearchBooks";
import SingleBook from "./Components/SingleBook";
import allBooks from "./Components/allBooks.js";
import BookList from "./Components/BookList";
import fantasy from "./assets/data/fantasy.json";

function App() {
  return (
    <>
      <MyNav />
      <Welcome variant="primary" />
      {/* <SearchBooks /> */}
      <SingleBook img={fantasy[20].img} title={fantasy[20].title} />
      <BookList books={allBooks} />
      <MyFooter />
    </>
  );
}

export default App;
