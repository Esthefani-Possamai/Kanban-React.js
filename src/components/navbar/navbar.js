import React from "react"; //importando a biblio React
import './navbar.css'

//onde eu for usar esse componente, eu preciso importá-lo
export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Kanban</h1>
    </nav>
  );
}
