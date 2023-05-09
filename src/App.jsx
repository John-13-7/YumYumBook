import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import FAQ from "./components/FAQ";
import Reference from "./components/Reference";
import Lookup from "./components/Lookup";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Pricing" element={<FAQ />} />
        <Route path="/Reference" element={<Reference />} />
        <Route path="/Lookup" element={<Lookup />} />
      </Routes>
    </div>
  );
}

export default App;
