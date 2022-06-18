import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";

function App() {
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <Cabecera Total={total}/>
      <Listado setTotal={setTotal}/>
    </div>
  );
}

export default App;
