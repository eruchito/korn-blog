import React from 'react';

function Footer() {
  return (
    <footer className="bg-violet py-8">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-lg">© 2023 Korn. Todos los derechos reservados.</p>
        <div>
          <a href="#">
            <img src="/placeholder.svg" alt="Adidas" className="h-8 mr-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
