import "./App.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <>
      <MyNav />
      <Welcome variant="primary" />
      <MyFooter />
    </>
  );
}

export default App;
