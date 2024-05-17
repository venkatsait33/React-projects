import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setQ(e.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (q) {
        axios
          .get("http://localhost:8000/movies/")
          .then((response) => {
            setResults(response.data);
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setResults([]);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [q]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Movies"
        data-testid="search_key"
        value={q}
        onChange={handleInputChange}
      />

      <div data-testid="movie_results">
        {results.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <h3>Title: {movie.title}</h3>
            <p>Year: {movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
