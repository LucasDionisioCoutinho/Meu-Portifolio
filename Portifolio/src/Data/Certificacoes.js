/* ===========================================================
    DADOS DAS CERTIFICAÇÕES
    Cada item é uma instituição (um card) com a lista de cursos.
    - icone: logo da instituição (ou FiAward se não tiver)
    - cor: cor da marca, usada no nome e na borda de cima do card
    - link (opcional): link do certificado; se tiver, o nome vira clicável
   =========================================================== */

import { FiAward, FiBookOpen } from "react-icons/fi";

const certificacoes = [
    {
        instituicao: "Cruzeiro do Sul",
        icone: FiBookOpen,
        cor: "#8b5cf6",
        cursos: [
            {
                // Os nomes dos cursos da Alura ficam em português (são o nome oficial do curso)
                nome: {
                    pt: "Graduação: Tecnólogo em Análise e Desenvolvimento de Sistemas — conclusão em dezembro de 2026",
                    en: "Degree: Associate in Systems Analysis and Development — expected completion December 2026",
                    es: "Grado: Tecnólogo en Análisis y Desarrollo de Sistemas — finalización en diciembre de 2026",
                },
            },
        ],
    },
    {
        instituicao: "Alura",
        icone: FiAward,
        cor: "#2a9df4",
        // Do mais recente para o mais antigo
        cursos: [
            {
                nome: "Imersão Dev — 9ª edição",
                link: "https://cursos.alura.com.br/immersion/imersao-dev-9/user/lukasdionisio00/certificate",
            },
            {
                nome: "Internet: entendendo os fundamentos da web",
                link: "https://cursos.alura.com.br/certificate/291a1eb0-5028-4f81-8169-ff2cdc5e4a38",
            },
            {
                nome: "Carreira Node.js: boas-vindas e primeiros passos",
                link: "https://cursos.alura.com.br/certificate/1cfa70d5-64cc-40f7-87fd-ac15fa330560",
            },
            {
                nome: "JavaScript: entendendo promises e async/await",
                link: "https://cursos.alura.com.br/user/lukasdionisio00/course/javascript-entendendo-promises-async-await/certificate",
            },
            {
                nome: "Figma: conhecendo a ferramenta",
                link: "https://cursos.alura.com.br/certificate/1680cdf0-df74-4961-b1c4-1725baafdcbe",
            },
            {
                nome: "JavaScript: construindo páginas dinâmicas",
                link: "https://cursos.alura.com.br/certificate/c04ba870-9d9b-466f-88c9-a854c62ca180",
            },
            {
                nome: "JavaScript: criando requisições",
                link: "https://cursos.alura.com.br/user/lukasdionisio00/course/javascript-criando-requisicoes/certificate",
            },
            {
                nome: "JavaScript: trabalhando com threads para requisições simultâneas",
                link: "https://cursos.alura.com.br/certificate/081a0fc1-b21e-40ca-8d75-237409bf1517",
            },
            {
                nome: "JavaScript: classes e heranças no desenvolvimento de aplicações com orientação a objetos",
                link: "https://cursos.alura.com.br/certificate/9644c311-bda3-4305-b11f-0dd0e4be68fa",
            },
            {
                nome: "JavaScript: manipulando objetos",
                link: "https://cursos.alura.com.br/certificate/81788aa0-f70d-4f8c-8c8f-4babee10757b",
            },
            {
                nome: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags",
                link: "https://cursos.alura.com.br/user/lukasdionisio00/course/html-css-ambiente-arquivos-tags/certificate",
            },
        ],
    },
];

export default certificacoes;
