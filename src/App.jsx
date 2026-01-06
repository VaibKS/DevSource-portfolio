import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lead from "./pages/Khushi";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/khushi" element={<Lead />} />
    </Routes>
  );
}

export default App;
