import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DinosaurList from "./DinosaurList";
import DinosaurDetails from "./DinosaurDetails";
import CadastroDinosaur from "./Cadastro";
import Home from "./Home/Homepage";
import AdmPage from "./Admin";
import { AuthProvider } from "../Context/contexto";

function App() {
  return (
    <AuthProvider>   
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<AdmPage />} />
          <Route path="/Cadastro" element={<CadastroDinosaur/>}/>
          <Route path="/DinosaurList" element={<DinosaurList />} />
          <Route path="/dinosaur/:id" element={<DinosaurDetails />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
