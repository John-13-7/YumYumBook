import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import FAQ from "./components/FAQ";
import DatabaseSimulation from "./components/DatabaseSimulation";
import Lookup from "./components/Lookup";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Pricing" element={<FAQ />} />
        <Route path="/DatabaseSimulation" element={<DatabaseSimulation />} />
        <Route path="/Lookup" element={<Lookup />} />
        <Route path="/Lookup/:name" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
