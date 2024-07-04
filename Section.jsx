import React from 'react';
import './styles/Section.scss';

const Section = ({ id, title, content }) => {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}

export default Section;

