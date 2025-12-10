import { useEffect, useState } from "react";
import useMenu from "../../hooks/useMenu";
import { styleNavIfScrollBelowZero, styleNavIfScrollEqualsZero } from "./styles";

const Navigation = () => {
  const [styleGroupNav, setStyleGroupNav] = useState(styleNavIfScrollEqualsZero());
  const [isMobile, setIsMobile] = useState(window.innerWidth < 884);
  const { toggleMenu, isMenuOpen } = useMenu();

  useEffect(() => {
    const handleScroll = () => {
      setStyleGroupNav(window.scrollY === 0 
        ? styleNavIfScrollEqualsZero() 
        : styleNavIfScrollBelowZero()
      );
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 884);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
     <div className="group-nav" style={styleGroupNav}>
      <nav className="group-nav__nav">
        <span className="logo">
          <img
            src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/chef-hat.webp"
            alt=""
          />
          Leo de Lita
        </span>
        <ul className={`group-nav__nav__list`} style={isMobile ? { display: isMenuOpen ? "flex" : "none" } : { display: "flex" }}>
          <li className="group-nav__nav__list__item">
            <a href="#inicio" className="group-nav__nav__list__item__item"
              >inicio</a
            >
          </li>
          <li className="group-nav__nav__list__item">
            <a href="#sobre-nos" className="group-nav__nav__list__item__item"
              >sobre nós</a
            >
          </li>
          <li className="group-nav__nav__list__item">
            <a href="#servicos" className="group-nav__nav__list__item__item"
              >produtos</a
            >
          </li>
          <li className="group-nav__nav__list__item">
            <a
              href="#encontre-nos"
              className="group-nav__nav__list__item__item encontrenos"
              >encontre-nos</a
            >
          </li>
          <li className="group-nav__nav__list__item">
            <a href="#contato" className="group-nav__nav__list__item__item contato"
              >contato</a
            >
          </li>
        </ul>
        <img
          src={
            isMenuOpen
              ? "https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/close.png"
              : "https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/menu-humburguer.webp"
          }
          alt="icone de abrir e fechar menu"
          className="group-nav__nav__img-menu"
          onClick={toggleMenu}
        />
      </nav>
    </div>
  )
}

export default Navigation;