import { useState } from "react";
import "./Navbar.css";
import { CiLight, CiDark } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import { useIdioma, IDIOMAS } from "../../i18n/IdiomaContext";

const CHAVE_TEMA = "portfolio-tema";

function NavBar() {
  const { idioma, setIdioma, t } = useIdioma();
  const [menuAberto, setMenuAberto] = useState(false); // menu do celular

  function fecharMenu() {
    setMenuAberto(false);
  }

  // O tema inicial já foi aplicado no index.html (antes da página aparecer)
  const [tema, setTema] = useState(
    () => document.documentElement.dataset.tema || "escuro"
  );

  function alternarTema() {
    const novo = tema === "escuro" ? "claro" : "escuro";
    setTema(novo);

    if (novo === "claro") {
      document.documentElement.dataset.tema = "claro";
    } else {
      delete document.documentElement.dataset.tema;
    }

    try {
      localStorage.setItem(CHAVE_TEMA, novo);
    } catch {
      /* sem localStorage: só não lembra a escolha */
    }
  }

  return (
    <nav className="navbar">
      <p className="p-navbar">Lucas Dionisio</p>

      <div className="navbar-right">
        <ul className={`ul-navbar ${menuAberto ? "aberto" : ""}`} id="menu-navbar">
          <li className="sobre-mim">
            <a href="#sobre" onClick={fecharMenu}>{t.navbar.sobre}</a>
          </li>
          <li className="li-navbar">
            <a href="#habilidades" onClick={fecharMenu}>{t.navbar.habilidades}</a>
          </li>
          <li className="li-navbar">
            <a href="#projetos" onClick={fecharMenu}>{t.navbar.projetos}</a>
          </li>
          <li className="li-navbar">
            <a href="#certificacoes" onClick={fecharMenu}>{t.navbar.certificacoes}</a>
          </li>
          <li className="li-navbar">
            <a href="#contato" onClick={fecharMenu}>{t.navbar.contato}</a>
          </li>
        </ul>

        <div className="idiomas" role="group" aria-label={t.navbar.idioma}>
          {IDIOMAS.map((sigla) => (
            <button
              key={sigla}
              className={`idioma-botao ${idioma === sigla ? "ativo" : ""}`}
              onClick={() => setIdioma(sigla)}
              aria-pressed={idioma === sigla}
            >
              {sigla.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          className="theme-button"
          onClick={alternarTema}
          aria-label={tema === "escuro" ? t.navbar.temaClaro : t.navbar.temaEscuro}
          title={tema === "escuro" ? t.navbar.temaClaro : t.navbar.temaEscuro}
        >
          {tema === "escuro" ? <CiLight /> : <CiDark />}
        </button>

        {/* Só aparece no celular/tablet */}
        <button
          className="menu-button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Menu"
          aria-expanded={menuAberto}
          aria-controls="menu-navbar"
        >
          {menuAberto ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
