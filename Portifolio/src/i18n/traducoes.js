/* ===========================================================
    TEXTOS DO SITE EM CADA IDIOMA
    pt = Português | en = Inglês | es = Espanhol
    Para mudar um texto, altere nos três idiomas.
    (Textos de projetos e certificações ficam nos arquivos da pasta Data)
   =========================================================== */

const traducoes = {
    pt: {
        navbar: {
            sobre: "Sobre mim",
            habilidades: "Habilidades",
            projetos: "Projetos",
            certificacoes: "Certificações",
            contato: "Contato",
            temaClaro: "Ativar modo claro",
            temaEscuro: "Ativar modo escuro",
            idioma: "Escolher idioma",
        },
        hero: {
            ola: "Olá, eu sou",
            cargo: "Desenvolvedor Front-End",
            descricao:
                "Desenvolvedor Frontend especializado na construção de interfaces modernas, performáticas e escaláveis, com foco em React, JavaScript, HTML e CSS. Tenho experiência no desenvolvimento de aplicações responsivas, componentizadas e integradas a APIs REST, sempre aplicando boas práticas de arquitetura, código limpo e foco na experiência do usuário.",
            curriculo: "Baixar Currículo",
            foto: "Foto de Lucas Dionisio",
        },
        habilidades: {
            tituloInicio: "Minhas",
            tituloDestaque: "Habilidades",
        },
        projetos: {
            tituloInicio: "Meus",
            tituloDestaque: "Projetos",
            semImagem: "Sem imagem",
            imagemDo: "Imagem do projeto",
            verProjeto: "Ver Projeto",
            emBreveTitulo: "Mais projetos em breve",
            emBreveTexto: "Novos projetos estão sendo desenvolvidos e serão adicionados em breve.",
        },
        certificacoes: {
            tituloInicio: "Minhas",
            tituloDestaque: "Certificações",
        },
        contato: {
            tituloInicio: "Entre em",
            tituloDestaque: "Contato",
            subtitulo: "Tem um projeto, uma vaga ou quer trocar uma ideia? Fale comigo pelos canais abaixo.",
            informacoes: "Informações de Contato",
            emailSub: "Envie um email diretamente",
            linkedinSub: "Conecte-se profissionalmente",
            linkedinTexto: "Meu perfil profissional",
            whatsappSub: "Mande uma mensagem direta",
            localizacao: "Localização",
            localizacaoSub: "Onde estou",
            localizacaoTexto: "Itatiba, SP - Brasil",
            formTitulo: "Envie uma Mensagem",
            nome: "Seu nome",
            email: "Seu email",
            mensagem: "Sua mensagem",
            enviar: "Enviar Mensagem",
            enviando: "Enviando...",
            sucesso: "Mensagem enviada! Vou responder o quanto antes.",
            erro: "Não foi possível enviar. Tente de novo ou me chame pelo WhatsApp.",
        },
        footer: {
            desenvolvido: "Desenvolvido por",
            direitos: "Todos os direitos reservados.",
        },
    },

    en: {
        navbar: {
            sobre: "About me",
            habilidades: "Skills",
            projetos: "Projects",
            certificacoes: "Certifications",
            contato: "Contact",
            temaClaro: "Switch to light mode",
            temaEscuro: "Switch to dark mode",
            idioma: "Choose language",
        },
        hero: {
            ola: "Hi, I'm",
            cargo: "Front-End Developer",
            descricao:
                "Front-end developer specialized in building modern, high-performance and scalable interfaces, focused on React, JavaScript, HTML and CSS. I have experience developing responsive, component-based applications integrated with REST APIs, always applying good architecture practices, clean code and a focus on user experience.",
            curriculo: "Download Resume",
            foto: "Photo of Lucas Dionisio",
        },
        habilidades: {
            tituloInicio: "My",
            tituloDestaque: "Skills",
        },
        projetos: {
            tituloInicio: "My",
            tituloDestaque: "Projects",
            semImagem: "No image",
            imagemDo: "Screenshot of the project",
            verProjeto: "View Project",
            emBreveTitulo: "More projects coming soon",
            emBreveTexto: "New projects are being developed and will be added soon.",
        },
        certificacoes: {
            tituloInicio: "My",
            tituloDestaque: "Certifications",
        },
        contato: {
            tituloInicio: "Get in",
            tituloDestaque: "Touch",
            subtitulo: "Have a project, a job opening or just want to talk? Reach me through the channels below.",
            informacoes: "Contact Information",
            emailSub: "Send me an email directly",
            linkedinSub: "Connect professionally",
            linkedinTexto: "My professional profile",
            whatsappSub: "Send me a direct message",
            localizacao: "Location",
            localizacaoSub: "Where I am",
            localizacaoTexto: "Itatiba, SP - Brazil",
            formTitulo: "Send a Message",
            nome: "Your name",
            email: "Your email",
            mensagem: "Your message",
            enviar: "Send Message",
            enviando: "Sending...",
            sucesso: "Message sent! I'll get back to you as soon as possible.",
            erro: "Couldn't send your message. Please try again or reach me on WhatsApp.",
        },
        footer: {
            desenvolvido: "Developed by",
            direitos: "All rights reserved.",
        },
    },

    es: {
        navbar: {
            sobre: "Sobre mí",
            habilidades: "Habilidades",
            projetos: "Proyectos",
            certificacoes: "Certificaciones",
            contato: "Contacto",
            temaClaro: "Activar modo claro",
            temaEscuro: "Activar modo oscuro",
            idioma: "Elegir idioma",
        },
        hero: {
            ola: "Hola, soy",
            cargo: "Desarrollador Front-End",
            descricao:
                "Desarrollador Frontend especializado en la construcción de interfaces modernas, eficientes y escalables, con enfoque en React, JavaScript, HTML y CSS. Tengo experiencia en el desarrollo de aplicaciones responsivas, basadas en componentes e integradas con APIs REST, aplicando siempre buenas prácticas de arquitectura, código limpio y enfoque en la experiencia del usuario.",
            curriculo: "Descargar Currículum",
            foto: "Foto de Lucas Dionisio",
        },
        habilidades: {
            tituloInicio: "Mis",
            tituloDestaque: "Habilidades",
        },
        projetos: {
            tituloInicio: "Mis",
            tituloDestaque: "Proyectos",
            semImagem: "Sin imagen",
            imagemDo: "Imagen del proyecto",
            verProjeto: "Ver Proyecto",
            emBreveTitulo: "Más proyectos próximamente",
            emBreveTexto: "Se están desarrollando nuevos proyectos que se agregarán pronto.",
        },
        certificacoes: {
            tituloInicio: "Mis",
            tituloDestaque: "Certificaciones",
        },
        contato: {
            tituloInicio: "Ponte en",
            tituloDestaque: "Contacto",
            subtitulo: "¿Tienes un proyecto, una vacante o quieres conversar? Escríbeme por los canales de abajo.",
            informacoes: "Información de Contacto",
            emailSub: "Envíame un correo directamente",
            linkedinSub: "Conectemos profesionalmente",
            linkedinTexto: "Mi perfil profesional",
            whatsappSub: "Envíame un mensaje directo",
            localizacao: "Ubicación",
            localizacaoSub: "Dónde estoy",
            localizacaoTexto: "Itatiba, SP - Brasil",
            formTitulo: "Envíame un Mensaje",
            nome: "Tu nombre",
            email: "Tu correo",
            mensagem: "Tu mensaje",
            enviar: "Enviar Mensaje",
            enviando: "Enviando...",
            sucesso: "¡Mensaje enviado! Te responderé lo antes posible.",
            erro: "No se pudo enviar. Inténtalo de nuevo o escríbeme por WhatsApp.",
        },
        footer: {
            desenvolvido: "Desarrollado por",
            direitos: "Todos los derechos reservados.",
        },
    },
};

export default traducoes;
