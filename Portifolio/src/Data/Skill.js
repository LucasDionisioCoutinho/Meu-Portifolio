/* ===========================================================
    DADOS DAS HABILIDADES
    Para adicionar uma nova tecnologia, basta incluir um item
    em "itens" com nome, ícone e cor.
   =========================================================== */

import { FiGlobe, FiServer, FiDatabase, FiTool } from "react-icons/fi";
import { FaCss3Alt } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import {
    SiHtml5,
    SiJavascript,
    SiReact,
    SiBootstrap,
    SiTailwindcss,
    SiPhp,
    SiPython,
    SiMysql,
    SiPostgresql,
    SiSqlite,
    SiSupabase,
    SiGithub,
    SiFigma,
    SiVercel,
    SiNetlify,
} from "react-icons/si";

/* Cor "var(--TextoPrincipal)" = branco no modo escuro e preto no modo claro
   (para logos que são brancos, como GitHub e Vercel) */
const categorias = [
    {
        id: "front",
        titulo: "Front-end",
        icone: FiGlobe,
        itens: [
            { nome: "HTML", icone: SiHtml5, cor: "#e34f26" },
            { nome: "CSS", icone: FaCss3Alt, cor: "#1572b6" },
            { nome: "JavaScript", icone: SiJavascript, cor: "#f7df1e" },
            { nome: "React", icone: SiReact, cor: "#61dafb" },
            { nome: "Bootstrap", icone: SiBootstrap, cor: "#7952b3" },
            { nome: "Tailwind", icone: SiTailwindcss, cor: "#38bdf8" },
        ],
    },
    {
        id: "back",
        titulo: "Back-end",
        icone: FiServer,
        itens: [
            { nome: "PHP", icone: SiPhp, cor: "#777bb4" },
            { nome: "Python", icone: SiPython, cor: "#3776ab" },
        ],
    },
    {
        id: "banco",
        titulo: { pt: "Banco de Dados", en: "Databases", es: "Bases de Datos" },
        icone: FiDatabase,
        itens: [
            { nome: "Oracle", icone: GrOracle, cor: "#f80000" },
            { nome: "MySQL", icone: SiMysql, cor: "#4479a1" },
            { nome: "Postgre", icone: SiPostgresql, cor: "#4169e1" },
            { nome: "SQLite", icone: SiSqlite, cor: "#0f80cc" },
            { nome: "Supabase", icone: SiSupabase, cor: "#3ecf8e" },
        ],
    },
    {
        id: "ferramentas",
        titulo: { pt: "Ferramentas", en: "Tools", es: "Herramientas" },
        icone: FiTool,
        itens: [
            { nome: "Git / Github", icone: SiGithub, cor: "var(--TextoPrincipal)" },
            { nome: "Figma", icone: SiFigma, cor: "#f24e1e" },
            { nome: "Vercel", icone: SiVercel, cor: "var(--TextoPrincipal)" },
            { nome: "Netlify", icone: SiNetlify, cor: "#00c7b7" },
        ],
    },
];

export default categorias;
