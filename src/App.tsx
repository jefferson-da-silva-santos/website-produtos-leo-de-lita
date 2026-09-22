/**
 * SEO — Palavras-chave (Keyword Research) — Produtos Léo de Lita
 *
 * Principal (foco): bolachas artesanais em Jaboatão dos Guararapes
 *
 * Secundárias: comprar bolacha artesanal | bolacha artesanal preço |
 * bolacha artesanal perto de mim | bolacha doce artesanal | bolacha salgada artesanal
 *
 * Cauda longa: "onde comprar bolacha artesanal em Jaboatão dos Guararapes" |
 * "qual a melhor bolacha artesanal da região" |
 * "quanto custa bolacha artesanal por kg" |
 * "bolacha artesanal para revenda" |
 * "loja de bolacha artesanal perto de mim"
 *
 * Usar naturalmente nos H1/H2 e textos das seções, sem keyword stuffing.
 */
import { useEffect } from "react";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Navigation from "./components/Navigation";
import Contato from "./pages/Contato";
import EncontreNos from "./pages/EncontreNos";
import Inicio from "./pages/Inicio";
import MissaoVisaoValores from "./pages/MissaoVisaoValores";
import Produtos from "./pages/Produtos";
import SobreNos from "./pages/SobreNos";
import AOS from "aos";
import "aos/dist/aos.css";
import "boxicons/css/boxicons.min.css";
import ModalProvider from "./providers/ModalProvider";
import MenuProvider from "./providers/MenuProvider";
import useAccessLogger from "./hooks/useAccessLogger";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  useAccessLogger('bolachas_leo_de_lita');
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <ModalProvider>
      <MenuProvider>
        <Modal />
        <Navigation />
        <WhatsAppButton />
        <Inicio />
        <main>
          <SobreNos />
          <Produtos />
          <MissaoVisaoValores />
          <EncontreNos />
          <Contato />
        </main>
        <Footer />
      </MenuProvider>
    </ModalProvider>
  );
}

export default App;
