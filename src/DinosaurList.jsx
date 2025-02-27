import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/contexto"; // Importação do contexto

function DinosaurList() {
  const { dinosaurs } = useContext(AuthContext); // Pegando dinossauros do contexto

  return (
    <div className="container">
      <div>
        <h1>Lista de Dinossauros</h1>
      </div>

      <div className="dinosaurs-grid">
        {dinosaurs.map((dino) => (
          <Link to={`/dinosaur/${dino.id}`} key={dino.id} className="card">
            <img
              src={dino.image_alive}
              alt={dino.popular_name}
              className="dino-image"
            />
            <h3>{dino.popular_name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DinosaurList;
