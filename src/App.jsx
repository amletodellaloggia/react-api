import { useState } from "react";
import axios from "axios";

function App() {
  const [actresses, setActresses] = useState([]);

  function fetchActresses() {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => setActresses(res.data));
  }

  return (
    <>
    <h1>Lista Attrici</h1>
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Nome</h5>
        <p className="card-text">Biografia</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Anno Nascita</li>
        <li className="list-group-item">Nazionalità</li>
        <li className="list-group-item">Riconoscimenti</li>
      </ul>
    </div>
    </>
  );
}

export default App;

