import { createContext, useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // Pegando do .env

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Usuário começa como null
  const [dinosaurs, setDinosaurs] = useState([]);


  useEffect(() => {
    fetchDinosaurs();
  }, []);


  const fetchDinosaurs = async () => {
    try {
      const response = await axios.get(API_URL);
      setDinosaurs(response.data);
    } catch (error) {
      console.error("Erro ao buscar dinossauros:", error);
    }
  };

   // Função para cadastrar um novo dinossauro
   const addDinosaur = async (newDino) => {
    try {
      const response = await axios.post(API_URL, newDino, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        setDinosaurs((prevDinosaurs) => [...prevDinosaurs, response.data]); // Atualiza a lista
      }
    } catch (error) {
      console.error("Erro ao cadastrar dinossauro:", error);
    }
  };



  return (
    <AuthContext.Provider value={{ dinosaurs, user, setUser, fetchDinosaurs, addDinosaur }}>
      {children}
    </AuthContext.Provider>
  );
}
