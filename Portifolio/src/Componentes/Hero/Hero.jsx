import "./Hero.css";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import perfil from "../../assets/Imagens/perfil.jpeg";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-texto">
                <h1 className="h1-hero">
                    Olá, eu sou <span className="destaque">Lucas Dionisio</span>
                    <br />
                    Desenvolvedor Front-End
                </h1>

                <p className="p-hero">
                    Desenvolvedor Frontend especializado na construção de interfaces modernas, performáticas e escaláveis, com foco em React, JavaScript, HTML e CSS. Tenho experiência no desenvolvimento de aplicações responsivas, componentizadas e integradas a APIs REST, sempre aplicando boas práticas de arquitetura, código limpo e foco na experiência do usuário.
                </p>

                <div className="hero-botoes">
                    <a
                        className="botao-icone"
                        href="https://www.linkedin.com/in/lucas-dionisio-coutinho?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
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
                        Baixar Currículo
                    </a>
                </div>
            </div>

            <div className="hero-imagem">
                <img src={perfil} alt="Foto de Lucas Dionisio" />
            </div>
        </section>
    );
}

export default Hero;
