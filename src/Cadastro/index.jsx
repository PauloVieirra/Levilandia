import { useState, useContext } from "react";
import { AuthContext } from "../../Context/contexto";
import "./style.css";

export default function CadastroDinosaur() {
  const { addDinosaur } = useContext(AuthContext);
  const [form, setForm] = useState({
    popular_name: "",
    scientific_name: "",
    adult_size: "",
    diet: "",
    lived_period: "",
    reproduction: "",
    region: "",
    image_alive: "",
    image_fossil: "",
    short_description: "",
    long_description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDinosaur(form);
    setForm({
      popular_name: "",
      scientific_name: "",
      adult_size: "",
      diet: "",
      lived_period: "",
      reproduction: "",
      region: "",
      image_alive: "",
      image_fossil: "",
      short_description: "",
      long_description: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Cadastre um Novo Dinossauro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="popular_name" placeholder="Nome Popular" value={form.popular_name} onChange={handleChange} required />
        <input type="text" name="scientific_name" placeholder="Nome Científico" value={form.scientific_name} onChange={handleChange} required />
        <input type="text" name="adult_size" placeholder="Tamanho" value={form.adult_size} onChange={handleChange} required />
        <input type="text" name="diet" placeholder="Dieta" value={form.diet} onChange={handleChange} required />
        <input type="text" name="lived_period" placeholder="Período.." value={form.lived_period} onChange={handleChange} required />
        <input type="text" name="reproduction" placeholder="Reprodução" value={form.reproduction} onChange={handleChange} required />
        <input type="text" name="region" placeholder="Região" value={form.region} onChange={handleChange} required />
        <input type="text" name="image_alive" placeholder="Imagem Vivo (URL)" value={form.image_alive} onChange={handleChange} required />
        <input type="text" name="image_fossil" placeholder="Imagem Fóssil (URL)" value={form.image_fossil} onChange={handleChange} required />
        <textarea name="short_description" placeholder="Descrição Curta" value={form.short_description} onChange={handleChange} required />
        <textarea name="long_description" placeholder="Descrição Longa" value={form.long_description} onChange={handleChange} required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
