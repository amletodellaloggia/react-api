import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [actresses, setActresses] = useState([]);

  function fetchActresses() {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => setActresses(res.data));
  }

  useEffect(fetchActresses, []);

  return (
    <>
      <h1>Lista Attrici</h1>

      {actresses.map((actress) => (
        <div className="card" style={{ width: "18rem" }} key={actress.id}>
          <img
            src={actress.image}
            className="card-img-top"
            alt={actress.name}
          />
          <div className="card-body">
            <h5 className="card-title">{actress.name}</h5>
            <p className="card-text">{actress.biography}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{actress.birth_year}</li>
            <li className="list-group-item">{actress.nationality}</li>
            <li className="list-group-item">{actress.awards}</li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default App;


