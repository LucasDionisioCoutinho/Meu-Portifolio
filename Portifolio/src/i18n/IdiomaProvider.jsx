import { useEffect, useState } from "react";
import traducoes from "./traducoes";
import { IDIOMAS, IdiomaContext } from "./IdiomaContext";

const CHAVE = "portfolio-idioma";
const LANG_HTML = { pt: "pt-BR", en: "en", es: "es" };

/* Idioma inicial: o último escolhido pelo visitante, ou o do navegador */
function idiomaInicial() {
    try {
        const salvo = localStorage.getItem(CHAVE);
        if (IDIOMAS.includes(salvo)) return salvo;
    } catch {
        /* navegador sem localStorage: segue para o idioma do navegador */
    }
    const navegador = (navigator.language || "pt").slice(0, 2);
    return IDIOMAS.includes(navegador) ? navegador : "pt";
}

function IdiomaProvider({ children }) {
    const [idioma, setIdioma] = useState(idiomaInicial);

    useEffect(() => {
        document.documentElement.lang = LANG_HTML[idioma];
        try {
            localStorage.setItem(CHAVE, idioma);
        } catch {
            /* sem localStorage: só não lembra a escolha */
        }
    }, [idioma]);

    return (
        <IdiomaContext.Provider value={{ idioma, setIdioma, t: traducoes[idioma] }}>
            {children}
        </IdiomaContext.Provider>
    );
}

export default IdiomaProvider;
