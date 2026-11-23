import "./ProjetoCard.css";
import { FiExternalLink, FiCode } from "react-icons/fi";
import projetos, { coresTags } from "../../Data/Projetos";
import { useIdioma, traduzir } from "../../i18n/IdiomaContext";

const COR_PADRAO = "#8b5cf6";

/* ====== CARD DE UM PROJETO ====== */

function Card({ projeto }) {
    const { idioma, t } = useIdioma();
    const titulo = traduzir(projeto.titulo, idioma);

    return (
        <article className="projeto-card">
            <h3 className="projeto-titulo">{titulo}</h3>

            <div className="projeto-imagem">
                {projeto.imagem ? (
                    <img
                        src={projeto.imagem}
                        alt={`${t.projetos.imagemDo} ${titulo}`}
                        style={{ objectPosition: projeto.posicaoImagem || "top" }}
                    />
                ) : (
                    <span className="projeto-sem-imagem">{t.projetos.semImagem}</span>
                )}
            </div>

            <div className="projeto-tags">
                {projeto.tags.map((tag) => {
                    const cor = coresTags[tag] || COR_PADRAO;

                    return (
                        <span
                            className="projeto-tag"
                            key={tag}
                            style={{
                                color: cor,
                                background: `color-mix(in srgb, ${cor} 12%, transparent)`,
                                borderColor: `color-mix(in srgb, ${cor} 40%, transparent)`,
                            }}
                        >
                            {tag}
                        </span>
                    );
                })}
            </div>

            <p className="projeto-descricao">{traduzir(projeto.descricao, idioma)}</p>

            {projeto.link && (
                <a
                    className="projeto-botao"
                    href={projeto.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    {t.projetos.verProjeto} <FiExternalLink />
                </a>
            )}
        </article>
    );
}

/* ====== SEÇÃO DE PROJETOS ====== */

function ProjetoCard() {
    const { t } = useIdioma();

    return (
        <section className="projetos" id="projetos">
            <h2 className="projetos-titulo">
                {t.projetos.tituloInicio} <span className="destaque">{t.projetos.tituloDestaque}</span>
            </h2>

            <div className="projetos-grid">
                {projetos.map((projeto) => (
                    <Card projeto={projeto} key={projeto.id} />
                ))}
            </div>

            <div className="projetos-em-breve">
                <span className="em-breve-icone">
                    <FiCode />
                </span>
                <h3>{t.projetos.emBreveTitulo}</h3>
                <p>{t.projetos.emBreveTexto}</p>
            </div>
        </section>
    );
}

export default ProjetoCard;
