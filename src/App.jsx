import { useState } from "react";
import axios from "axios";

function App() {
  const [actresses, setActresses] = useState([]);

  console.log({actresses});
  function fetchActresses() {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((res) => setActresses(res.data))
  }

  return (
    <>

    </>
  )
}

export default App
