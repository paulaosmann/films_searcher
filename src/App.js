import { useState } from "react";
import "./App.css";

const films = [
  {
    title: "The Thing",
    genre: "horror",
  },
  {
    title: "Forrest Gump",
    genre: "drama",
  },
  {
    title: "Avatar",
    genre: "Sci-Fi",
  },
  {
    title: "uwantme2killhim",
    genre: "drama",
  },
];

function App() {
  const [inputValue, setInputValue] = useState("");

  const getFilms = () => {
    let filmsToDisplay = [...films];

    if (inputValue) {
      filmsToDisplay = filmsToDisplay.filter((film) =>
        film.title.includes(inputValue)
      );
    }

    return filmsToDisplay.map((film) => (
      <li key={film.title}>
        {film.title} - {film.genre}
      </li>
    ));
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="container">
      <input
        className="title-input"
        placeholder="Type title"
        onChange={handleChange}
      />
      <ul>{getFilms()}</ul>
    </div>
  );
}

export default App;
