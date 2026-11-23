/* ===========================================================
    DADOS DOS PROJETOS
    Para adicionar um projeto, copie um item da lista e preencha:
    - id: um nome curto e único (sem espaço)
    - titulo e descricao: em { pt, en, es } (ou um texto só, se for igual)
    - tags, link
    - imagem: importe a imagem lá em cima (igual ao perfil do Hero)
      ou deixe null para mostrar "Sem imagem"
   =========================================================== */

import imgRadiant from "../assets/Imagens/radiant.png";
import imgGerenciador from "../assets/Imagens/gerenciador.png";
import imgProfitHub from "../assets/Imagens/profithub.png";
import imgGestao from "../assets/Imagens/gestao.png";
import imgSextaFeira from "../assets/Imagens/sexta-feira.png";

/* Cor de cada tag. Se uma tag não estiver aqui, fica roxa (cor do projeto).
   "var(--TextoPrincipal)" = branco no modo escuro e preto no modo claro. */
export const coresTags = {
    HTML: "#e34f26",
    CSS: "#1572b6",
    JavaScript: "#f7df1e",
    React: "#61dafb",
    Vite: "#646cff",
    Bootstrap: "#7952b3",
    Tailwind: "#38bdf8",
    PHP: "#777bb4",
    Python: "#3776ab",
    MySQL: "#4479a1",
    Supabase: "#3ecf8e",
    Figma: "#f24e1e",
    "Node.js": "#5fa04e",
    Express: "var(--TextoPrincipal)",
    PostgreSQL: "#4169e1",
    Prisma: "#5a67d8",
    JWT: "#d63aff",
    "React Router": "#f44250",
    EmailJS: "#ff9f43",
    "Claude Agent SDK": "#d97757",
    ElevenLabs: "var(--TextoPrincipal)",
    "Three.js": "var(--TextoPrincipal)",
    WebSocket: "#8b5cf6",
};

const projetos = [
    {
        id: "sexta-feira",
        titulo: {
            pt: "Sexta-Feira — Assistente com IA",
            en: "Sexta-Feira — AI Assistant",
            es: "Sexta-Feira — Asistente con IA",
        },
        descricao: {
            pt: "Minha assistente pessoal por voz: ativada pela palavra \"Sexta-Feira\", entende o que eu falo, executa tarefas com IA e responde em voz. Tem um HUD em React com globo 3D, mapa e painéis em tempo real, e rotinas como briefing diário, agenda, alertas de finanças, relatórios de anúncios e mensagens pelo WhatsApp.",
            en: "My personal voice assistant: activated by the word \"Sexta-Feira\" (Friday), it understands what I say, performs tasks with AI and answers by voice. It has a React HUD with a 3D globe, a map and real-time panels, plus routines like a daily briefing, calendar, finance alerts, ad reports and WhatsApp messages.",
            es: "Mi asistente personal por voz: se activa con la palabra \"Sexta-Feira\" (Viernes), entiende lo que digo, ejecuta tareas con IA y responde por voz. Tiene un HUD en React con globo 3D, mapa y paneles en tiempo real, y rutinas como resumen diario, agenda, alertas de finanzas, informes de anuncios y mensajes por WhatsApp.",
        },
        imagem: imgSextaFeira,
        posicaoImagem: "center", // o globo fica no meio do print
        tags: ["React", "Node.js", "Claude Agent SDK", "ElevenLabs", "Three.js", "WebSocket"],
        link: "", // repositório privado
    },
    {
        id: "amarelinha",
        titulo: {
            pt: "Sistema de Gestão — Amarelinha Tintas",
            en: "Management System — Amarelinha Tintas",
            es: "Sistema de Gestión — Amarelinha Tintas",
        },
        descricao: {
            pt: "Sistema interno de gestão de frota, entregas e financeiro feito sob medida para a Amarelinha Tintas. Tem 5 perfis de acesso, relatórios com gráficos e exportação em PDF, e sincroniza a quilometragem dos veículos automaticamente pelo rastreador GPS da frota.",
            en: "Custom internal system for fleet, delivery and financial management built for Amarelinha Tintas. It has 5 access roles, reports with charts and PDF export, and automatically syncs vehicle mileage from the fleet's GPS tracker.",
            es: "Sistema interno de gestión de flota, entregas y finanzas hecho a medida para Amarelinha Tintas. Tiene 5 perfiles de acceso, informes con gráficos y exportación a PDF, y sincroniza automáticamente el kilometraje de los vehículos con el rastreador GPS de la flota.",
        },
        imagem: imgGestao,
        tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT"],
        link: "", // repositório privado (uso interno da empresa)
    },
    {
        id: "profithub",
        titulo: "ProfitHub",
        descricao: {
            pt: "Sistema de gestão para vendedores online: dashboard de vendas, lucro, margem e ticket médio, controle de produtos, estoque e financeiro, calculadora de preços, relatórios e conferência de envios por leitura de código de barras. Integrado à API do Mercado Livre para importar os pedidos.",
            en: "Management system for online sellers: dashboard with sales, profit, margin and average ticket, product, inventory and financial control, pricing calculator, reports and shipment checking by barcode scanning. Integrated with the Mercado Livre API to import orders.",
            es: "Sistema de gestión para vendedores en línea: panel de ventas, ganancias, margen y ticket promedio, control de productos, inventario y finanzas, calculadora de precios, informes y verificación de envíos por lectura de código de barras. Integrado con la API de Mercado Libre para importar los pedidos.",
        },
        imagem: imgProfitHub,
        tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT"],
        link: "", // repositório privado
    },
    {
        id: "radiant",
        titulo: "Radiant Fragrances",
        descricao: {
            pt: "Loja online de perfumes com catálogo de produtos, carrinho de compras, cupons de desconto, envio de mensagens por e-mail, botão de WhatsApp e SEO. Publicada na Vercel.",
            en: "Online perfume store with a product catalog, shopping cart, discount coupons, email messaging, WhatsApp button and SEO. Deployed on Vercel.",
            es: "Tienda en línea de perfumes con catálogo de productos, carrito de compras, cupones de descuento, envío de mensajes por correo, botón de WhatsApp y SEO. Publicada en Vercel.",
        },
        imagem: imgRadiant,
        tags: ["React", "Vite", "React Router", "EmailJS", "Python"],
        link: "https://radiant-fragances.vercel.app",
    },
    {
        id: "tarefas",
        titulo: {
            pt: "Gerenciador de Tarefas",
            en: "Task Manager",
            es: "Gestor de Tareas",
        },
        descricao: {
            pt: "Aplicação de lista de tarefas organizada por dia da semana, para adicionar, concluir e excluir atividades, com alternância entre tema claro e escuro.",
            en: "To-do list app organized by day of the week to add, complete and delete tasks, with light and dark theme switching.",
            es: "Aplicación de lista de tareas organizada por día de la semana para agregar, completar y eliminar actividades, con cambio entre tema claro y oscuro.",
        },
        imagem: imgGerenciador,
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://lucasdionisiocoutinho.github.io/Gerenciador-De-Tarefas/",
    },
];

export default projetos;
