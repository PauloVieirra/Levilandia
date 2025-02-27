import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Home() {
 return (
 
   <div className='container-home'>
    <div className='gradiente'> 
    <section className='cont-titulo'>
    Levilandia
    </section>
    <section className='text'>
    Bem-vindo ao fascinante mundo de curiosidades do Levi! Aqui, vamos explorar como era a Terra há mais de 100 milhões de anos, conhecendo as plantas e os animais da época, o clima do planeta e muito mais. Embarque nessa jornada pré-histórica! 🚀🌍🦖
    </section>

   <Link to={"/DinosaurList"}>  
    <button className='btniniciar'>
      Iniciar Jornada
    </button>
  </Link>

    <div className='cont_btn_adm'>
    <Link to={"/Admin"}> 
     <button className='btn_admin'>
        Admin
     </button>
   </Link>
    </div>
    </div>
   </div>
  
  );
}