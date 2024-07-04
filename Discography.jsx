// Discography.jsx

import React from 'react';

const Discography = () => {
  // Array con la discografía de Korn
  const albums = [
    { title: "Korn (1994)", year: 1994 },
    { title: "Life Is Peachy (1996)", year: 1996 },
    { title: "Follow the Leader (1998)", year: 1998 },
    { title: "Issues (1999)", year: 1999 },
    { title: "Untouchables (2002)", year: 2002 },
    { title: "Take a Look in the Mirror (2003)", year: 2003 },
    { title: "See You on the Other Side (2005)", year: 2005 },
    { title: "Untitled (2007)", year: 2007 },
    { title: "Korn III: Remember Who You Are (2010)", year: 2010 },
    { title: "The Path of Totality (2011)", year: 2011 },
    { title: "The Paradigm Shift (2013)", year: 2013 },
    { title: "The Serenity of Suffering (2016)", year: 2016 },
    { title: "The Nothing (2019)", year: 2019 },
  ];

  return (
    <div className="discography">
      <h2>Discografía de Korn</h2>
      <ul className="album-list">
        {albums.map((album, index) => (
          <li key={index}>
            <strong>{album.title}</strong> - {album.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Discography;
