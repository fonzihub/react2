import "./App.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";
import SearchBooks from "./Components/SearchBooks";

function App() {
  return (
    <>
      <MyNav />
      <Welcome variant="primary" />
      <SearchBooks />
      <MyFooter />
    </>
  );
}

export default App;
