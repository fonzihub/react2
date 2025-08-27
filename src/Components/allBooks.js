import fantasy from "../assets/data/fantasy.json";
import history from "../assets/data/history.json";
import horror from "../assets/data/horror.json";
import romance from "../assets/data/romance.json";
import scifi from "../assets/data/scifi.json";

const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];

export default allBooks;
