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

function App() {
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
