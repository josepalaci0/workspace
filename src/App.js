import Formulario from "./formulariosweb/formulario"
import { Homeservices } from "./formulariosweb/services/homeservices";
function App() {
  return (
    <div className="App">
      
      {Homeservices()}
      <Formulario/>
    </div>
  );
}

export default App;
