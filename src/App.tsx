import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Navigation from "./components/Navigation";
import Contato from "./pages/Contato";
import EncontreNos from "./pages/EncontreNos";
import Inicio from "./pages/Inicio";
import MissaoVisaoValores from "./pages/MissaoVisaoValores";
import Produtos from "./pages/Produtos";
import SobreNos from "./pages/SobreNos";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
