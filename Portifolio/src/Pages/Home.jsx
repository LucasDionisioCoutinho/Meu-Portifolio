/* ===========================================================
    AQUI VOU ORGANIZAR TUDO, OS COMPONENTES VÃO VIR AQUI
   =========================================================== */

import Navbar from "../Componentes/Navbar/Navbar";
 import Hero from "../Componentes/Hero/Hero";
 import Skill from "../Componentes/Skills/Skill";
 /*import Sobre from "../Componentes/Sobre/Sobre";
import ProjetoCard from "../Componentes/ProjetoCard/ProjetoCard";
import Contatos from "../Componentes/Contatos/Contatos";
import Footer from "../Componentes/Footer/Footer"; */



function Home() {
    return(
        <>
        <Navbar />
        <Hero />
        <Skill />
  {/*       <Sobre />  
        <ProjetoCard />
        <Contatos/>
        <Footer />  */}
        </>
    )
}


export default Home