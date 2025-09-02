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
    <div className="container my-4">
      <h1 className="mb-4">Lista Attrici</h1>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {actresses.map((actress) => (
          <div className="col" key={actress.id}>
            <div className="card h-100">
              <img
                src={actress.image}
                className="card-img-top card-img-fixed"
                alt={actress.name}
              />
              <div className="card-body">
                <h5 className="card-title">{actress.name}</h5>
                <p className="card-text">{actress.biography}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-1">{actress.birth_year}</li>
                <li className="list-group-item bg-2">{actress.nationality}</li>
                <li className="list-group-item bg-3">{actress.awards}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

