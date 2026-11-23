import "./Certificacoes.css";
import { FiChevronRight, FiExternalLink } from "react-icons/fi";
import certificacoes from "../../Data/Certificacoes";
import { useIdioma, traduzir } from "../../i18n/IdiomaContext";

function Certificacoes() {
    const { idioma, t } = useIdioma();

    return (
        <section className="certificacoes" id="certificacoes">
            <h2 className="certificacoes-titulo">
                {t.certificacoes.tituloInicio} <span className="destaque">{t.certificacoes.tituloDestaque}</span>
            </h2>

            <div className="certificacoes-grid">
                {certificacoes.map((item) => {
                    const Icone = item.icone;

                    return (
                        <div
                            className="certificacao-card"
                            key={item.instituicao}
                            style={{ borderTopColor: item.cor }}
                        >
                            <div className="certificacao-header" style={{ color: item.cor }}>
                                {Icone && <Icone className="certificacao-logo" />}
                                <h3>{item.instituicao}</h3>
                            </div>

                            <ul className="certificacao-lista">
                                {item.cursos.map((curso) => {
                                    const nome = traduzir(curso.nome, idioma);

                                    return (
                                        <li key={curso.link || nome}>
                                            <FiChevronRight className="certificacao-seta" />
                                            {curso.link ? (
                                                <a href={curso.link} target="_blank" rel="noreferrer">
                                                    {nome} <FiExternalLink />
                                                </a>
                                            ) : (
                                                <span>{nome}</span>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Certificacoes;
