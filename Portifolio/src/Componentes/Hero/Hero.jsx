import "./Hero.css";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import perfil from "../../assets/Imagens/perfil.jpeg";
import { useIdioma } from "../../i18n/IdiomaContext";

function Hero() {
    const { t } = useIdioma();

    return (
        <section className="hero" id="sobre">
            <div className="hero-texto">
                <h1 className="h1-hero">
                    {t.hero.ola} <span className="destaque">Lucas Dionisio</span>
                    <br />
                    {t.hero.cargo}
                </h1>

                <p className="p-hero">{t.hero.descricao}</p>

                <div className="hero-botoes">
                    <a
                        className="botao-icone"
                        href="https://www.linkedin.com/in/lucas-dionisio-coutinho/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>

                    <a
                        className="botao-icone"
                        href="https://wa.me/5511916776355"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp />
                    </a>

                    <a className="botao-curriculo" href="/Curriculo.pdf" download>
                        <FiDownload />
                        {t.hero.curriculo}
                    </a>
                </div>
            </div>

            <div className="hero-imagem">
                <img src={perfil} alt={t.hero.foto} />
            </div>
        </section>
    );
}

export default Hero;
