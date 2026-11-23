import "./Skill.css";
import categorias from "../../Data/Skill";
import { useIdioma, traduzir } from "../../i18n/IdiomaContext";

function Skill() {
    const { idioma, t } = useIdioma();

    return (
        <section className="skills" id="habilidades">
            <h2 className="skills-titulo">
                {t.habilidades.tituloInicio} <span className="destaque">{t.habilidades.tituloDestaque}</span>
            </h2>

            <div className="skills-grid">
                {categorias.map((categoria) => {
                    const IconeCategoria = categoria.icone;

                    return (
                        <div className="skills-card" key={categoria.id}>
                            <div className="skills-card-header">
                                <span className="skills-card-icone">
                                    <IconeCategoria />
                                </span>
                                <h3>{traduzir(categoria.titulo, idioma)}</h3>
                            </div>

                            <div className="skills-itens">
                                {categoria.itens.map((item) => {
                                    const Icone = item.icone;

                                    return (
                                        <div className="skill-item" key={item.nome}>
                                            <Icone
                                                className="skill-item-icone"
                                                style={{ color: item.cor }}
                                            />
                                            <p>{item.nome}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skill;
