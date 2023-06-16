
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle";
import "./Components/style.css"
import Headers from './Components/Headers';
import { Routes,Route } from "react-router-dom";
import Cards from "./Components/Cards";
import CardsDetails from "./Components/CardsDetails";
function App() {
  return (
    <div className="container-fluid" >
      <Headers/>
      <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path="/cart/:id" element={<CardsDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
