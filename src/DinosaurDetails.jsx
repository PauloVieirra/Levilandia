import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "https://apidinossoaur-production.up.railway.app/dinosaurs";

function DinosaurDetails() {
  const { id } = useParams();
  const [dinosaur, setDinosaur] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        const foundDino = response.data.find(dino => dino.id === id);
        setDinosaur(foundDino);
      })
      .catch(error => console.error("Erro ao buscar detalhes:", error));
  }, [id]);

  if (!dinosaur) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="details-container">
      <h1>{dinosaur.popular_name} ({dinosaur.scientific_name})</h1>
      <img src={dinosaur.image_alive} alt={dinosaur.popular_name} className="dino-image"/>
      <p><strong>Tamanho:</strong> {dinosaur.adult_size}</p>
      <p><strong>Dieta:</strong> {dinosaur.diet}</p>
      <p><strong>Período:</strong> {dinosaur.lived_period}</p>
      <p><strong>Região:</strong> {dinosaur.region}</p>
      <p><strong>Descrição:</strong> {dinosaur.long_description}</p>
    </div>
  );
}

export default DinosaurDetails;
