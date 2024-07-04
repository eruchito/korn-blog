// Concerts.jsx

import React from 'react';

const Concerts = () => {
  // Array con objetos de información sobre los conciertos
  const concerts = [
    {
      id: 1,
      date: "2024-07-10",
      venue: "Madison Square Garden",
      location: "New York, NY",
      ticketsUrl: "https://example.com/tickets1"
    },
    {
      id: 2,
      date: "2024-08-15",
      venue: "Staples Center",
      location: "Los Angeles, CA",
      ticketsUrl: "https://example.com/tickets2"
    },
    // Añade más objetos de conciertos según sea necesario
  ];

  return (
    <div className="concerts">
      <h2>Próximos Conciertos de Korn</h2>
      <div className="concert-list">
        {concerts.map(concert => (
          <div key={concert.id} className="concert-item">
            <div className="concert-details">
              <div className="concert-date">{concert.date}</div>
              <div className="concert-venue">{concert.venue}</div>
              <div className="concert-location">{concert.location}</div>
            </div>
            <div className="concert-actions">
              <a href={concert.ticketsUrl} target="_blank" rel="noopener noreferrer" className="btn-ticket">Comprar Entradas</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Concerts;
