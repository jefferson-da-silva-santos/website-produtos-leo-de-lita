const Navigation = () => {
  return (
     <div className="group-nav">
      <nav className="group-nav__nav">
        <span className="logo">
          <img
            src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/chef-hat.webp"
            alt=""
          />
          Leo de Lita
        </span>
        <ul className="group-nav__nav__list">
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
          src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/menu-humburguer.webp"
          alt="icone de abrir e fechar menu"
          className="group-nav__nav__img-menu"
        />
      </nav>
    </div>
  )
}

export default Navigation;