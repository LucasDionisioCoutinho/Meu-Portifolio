import { createContext, useContext } from "react";

export const IDIOMAS = ["pt", "en", "es"];

export const IdiomaContext = createContext(null);

/* Use dentro de qualquer componente:
   const { idioma, setIdioma, t } = useIdioma();
   t.hero.ola  -> texto no idioma escolhido */
export function useIdioma() {
    return useContext(IdiomaContext);
}

/* Para textos dos arquivos de Data, que podem ser:
   - um texto simples (igual em todos os idiomas), ou
   - um objeto { pt: "...", en: "...", es: "..." } */
export function traduzir(valor, idioma) {
    if (valor && typeof valor === "object") {
        return valor[idioma] ?? valor.pt;
    }
    return valor;
}
