/* ===========================================================
    AQUI VOU ORGANIZAR TUDO, OS COMPONENTES VÃO VIR AQUI
   =========================================================== */

import Navbar from "../Componentes/Navbar/Navbar";
 import Hero from "../Componentes/Hero/Hero";
 import Skill from "../Componentes/Skills/Skill";
import ProjetoCard from "../Componentes/ProjetoCard/ProjetoCard";
import Certificacoes from "../Componentes/Certificacoes/Certificacoes";
import Contatos from "../Componentes/Contatos/Contatos";
import Footer from "../Componentes/Footer/Footer";
 /*import Sobre from "../Componentes/Sobre/Sobre"; */



function Home() {
    return(
        <>
        <Navbar />
        <Hero />
        <Skill />
        <ProjetoCard />
        <Certificacoes />
        <Contatos />
        <Footer />
  {/*       <Sobre />  */}
        </>
    )
}


export default Home