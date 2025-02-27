import React, { useContext } from "react";
import { AuthContext } from "../../Context/contexto"; // Importação correta
import { Link } from "react-router-dom";

export default function AdmPage() {
  const { user } = useContext(AuthContext); // Correto

  console.log(user);

  return (
    <div>
      <h1>Admin</h1>
      <p>Usuário logado: {user ? user : "Nenhum usuário logado"}</p>
      <Link to={"/Cadastro"}>
       <button>
         Novo Dinossauro
      </button>
      </Link>
     
    </div>
  );
}
