// src/components/Home.jsx
import React from 'react';
import 'animate.css';
import '../styles/Home.scss';

const bandMembers = [
  {
    name: 'Jonathan Davis',
    role: 'Vocalista principal',
    description: 'Jonathan Davis es conocido por su estilo vocal único y su capacidad para combinar diferentes géneros musicales. Ha sido el vocalista principal de Korn desde su formación.',
  },
  {
    name: 'James "Munky" Shaffer',
    role: 'Guitarrista rítmico',
    description: 'Munky es el guitarrista rítmico de Korn y uno de los miembros fundadores. Su estilo de tocar la guitarra ha sido fundamental para el sonido distintivo de la banda.',
  },
  {
    name: 'Brian "Head" Welch',
    role: 'Guitarrista líder',
    description: 'Head es el guitarrista líder de Korn. Dejó la banda en 2005 para seguir una carrera en solitario, pero regresó en 2013.',
  },
  {
    name: 'Reginald "Fieldy" Arvizu',
    role: 'Bajista',
    description: 'Fieldy es el bajista de Korn. Su estilo de tocar el bajo, que incluye técnicas de slap y funk, ha sido una parte esencial del sonido de la banda.',
  },
  {
    name: 'Ray Luzier',
    role: 'Baterista',
    description: 'Ray Luzier se unió a Korn en 2007 como el baterista de la banda. Ha aportado un nuevo nivel de técnica y precisión a la sección rítmica de Korn.',
  },
];

const Home = () => {
  return (
    <div className="home">
      <h1 className="animate__animated animate__fadeInDown">Sobre Korn...</h1>
      <div className="band-info animate__animated animate__fadeInUp">
        <p>
          Korn es una banda estadounidense de nu metal formada en Bakersfield, California, en 1993. La banda está compuesta por Jonathan Davis (voz principal), James "Munky" Shaffer (guitarra rítmica), Brian "Head" Welch (guitarra líder), Reginald "Fieldy" Arvizu (bajo) y Ray Luzier (batería). Korn es considerado uno de los pioneros del género nu metal y ha vendido más de 40 millones de discos en todo el mundo.
        </p>
        <p>
          La banda es conocida por su sonido distintivo que combina elementos de metal alternativo, funk, hip hop y grunge. Algunos de sus álbumes más conocidos incluyen "Korn" (1994), "Life Is Peachy" (1996), "Follow the Leader" (1998) y "Issues" (1999).
        </p>
        <p>
          Korn ha ganado numerosos premios a lo largo de su carrera, incluyendo dos premios Grammy. La banda sigue activa y continúa lanzando nueva música y realizando giras.
        </p>
      </div>
      <h2 className="animate__animated animate__fadeInDown">Miembros de la banda</h2>
      <div className="band-members animate__animated animate__fadeInUp">
        {bandMembers.map((member, index) => (
          <div key={index} className="member">
            <h3>{member.name}</h3>
            <p><strong>{member.role}</strong></p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;



