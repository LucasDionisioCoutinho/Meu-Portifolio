import { useState } from "react";
import "./Contatos.css";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useIdioma } from "../../i18n/IdiomaContext";

const EMAIL = "lucasdionisiodev@gmail.com";

/* ====== EMAILJS ====== */
   
const EMAILJS = {
    SERVICE_ID: "service_ntdt40q",
    TEMPLATE_ID: "template_7i59nq9",
    PUBLIC_KEY: "S6GM0ZIpRQRRnmSws",
};
const emailjsConfigurado = EMAILJS.TEMPLATE_ID && EMAILJS.PUBLIC_KEY;

function Contatos() {
    const { t } = useIdioma();

    const contatos = [
        {
            id: "email",
            titulo: "Email",
            subtitulo: t.contato.emailSub,
            texto: EMAIL,
            link: `mailto:${EMAIL}`,
            icone: FiMail,
        },
        {
            id: "linkedin",
            titulo: "LinkedIn",
            subtitulo: t.contato.linkedinSub,
            texto: t.contato.linkedinTexto,
            link: "https://www.linkedin.com/in/lucas-dionisio-coutinho/",
            icone: FaLinkedinIn,
        },
        {
            id: "whatsapp",
            titulo: "WhatsApp",
            subtitulo: t.contato.whatsappSub,
            texto: "+55 (11) 91677-6355",
            link: "https://wa.me/5511916776355",
            icone: FaWhatsapp,
        },
        {
            id: "localizacao",
            titulo: t.contato.localizacao,
            subtitulo: t.contato.localizacaoSub,
            texto: t.contato.localizacaoTexto,
            icone: FiMapPin,
        },
    ];

    const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
    const [status, setStatus] = useState(""); // "", "enviando", "sucesso" ou "erro"

    function atualizar(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function enviar(e) {
        e.preventDefault();

        // Sem EmailJS configurado: abre o app de email do visitante
        if (!emailjsConfigurado) {
            const assunto = `Contato pelo portfólio - ${form.nome}`;
            const corpo = `${form.mensagem}\n\n${form.nome}\n${form.email}`;
            window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
            return;
        }

        setStatus("enviando");
        try {
            await emailjs.send(
                EMAILJS.SERVICE_ID,
                EMAILJS.TEMPLATE_ID,
                { nome: form.nome, email: form.email, mensagem: form.mensagem },
                { publicKey: EMAILJS.PUBLIC_KEY }
            );
            setStatus("sucesso");
            setForm({ nome: "", email: "", mensagem: "" });
        } catch {
            setStatus("erro");
        }
    }

    return (
        <section className="contatos" id="contato">
            <h2 className="contatos-titulo">
                {t.contato.tituloInicio} <span className="destaque">{t.contato.tituloDestaque}</span>
            </h2>
            <p className="contatos-subtitulo">{t.contato.subtitulo}</p>

            <div className="contatos-conteudo">
                {/* ====== INFORMAÇÕES ====== */}
                <div className="contatos-info">
                    <h3>{t.contato.informacoes}</h3>

                    {contatos.map((item) => {
                        const Icone = item.icone;
                        const conteudo = (
                            <>
                                <span className="contato-icone">
                                    <Icone />
                                </span>
                                <div>
                                    <h4>{item.titulo}</h4>
                                    <p className="contato-subtitulo">{item.subtitulo}</p>
                                    <p className="contato-texto">{item.texto}</p>
                                </div>
                            </>
                        );

                        return item.link ? (
                            <a
                                className="contato-card"
                                key={item.id}
                                href={item.link}
                                target={item.link.startsWith("http") ? "_blank" : undefined}
                                rel="noreferrer"
                            >
                                {conteudo}
                            </a>
                        ) : (
                            <div className="contato-card" key={item.id}>
                                {conteudo}
                            </div>
                        );
                    })}
                </div>

                {/* ====== FORMULÁRIO ====== */}
                <form className="contatos-form" onSubmit={enviar}>
                    <h3>{t.contato.formTitulo}</h3>

                    <input
                        type="text"
                        name="nome"
                        placeholder={t.contato.nome}
                        value={form.nome}
                        onChange={atualizar}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder={t.contato.email}
                        value={form.email}
                        onChange={atualizar}
                        required
                    />
                    <textarea
                        name="mensagem"
                        placeholder={t.contato.mensagem}
                        rows="7"
                        value={form.mensagem}
                        onChange={atualizar}
                        required
                    />

                    <button
                        type="submit"
                        className="contatos-botao"
                        disabled={status === "enviando"}
                    >
                        {status === "enviando" ? t.contato.enviando : t.contato.enviar} <FiSend />
                    </button>

                    {status === "sucesso" && (
                        <p className="contatos-aviso sucesso">{t.contato.sucesso}</p>
                    )}
                    {status === "erro" && (
                        <p className="contatos-aviso erro">{t.contato.erro}</p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Contatos;
