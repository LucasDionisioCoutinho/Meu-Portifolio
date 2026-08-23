import "./Navbar.css";
import { CiLight } from "react-icons/ci";

function NavBar() {
  return (
    <nav className="navbar">
      <p className="p-navbar">Lucas Dionisio</p>

      <div className="navbar-right">
        <ul className="ul-navbar">
          <li className="sobre-mim">Sobre mim</li>
          <li className="li-navbar">Habilidades</li>
          <li className="li-navbar">Experiências</li>
          <li className="li-navbar">Projetos</li>
          <li className="li-navbar">Certificações</li>
          <li className="li-navbar">Contato</li>
        </ul>

        <button className="theme-button">
          <CiLight />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
