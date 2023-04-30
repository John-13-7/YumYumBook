import {Route, Routes} from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import FAQ from "./components/FAQ";
import Reference from "./components/Reference";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/Pricing" element={<FAQ />}/>
        <Route path="/Reference" element={<Reference />}/>
      </Routes>
    </div>
  );
};

export default App;
