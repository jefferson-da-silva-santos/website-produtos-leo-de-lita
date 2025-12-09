const Modal = () => {
  return (
    <div className="group-option">
      <div className="option">
        <img
          src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/close2.webp"
          alt=""
          className="option__btn-close"
        />
        <div className="option__section--primary">
          <h2 className="option__section--primary__title"></h2>
          <div className="option__section--primary__group-description">
            <img
              src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/arrow-right.webp"
              alt=""
              className="option__section--primary__group-description__img"
            />
            <p className="option__section--primary__group-description__text"></p>
          </div>
          <div className="option__section--primary__group-description">
            <img
              src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/arrow-right.webp"
              alt=""
              className="option__section--primary__group-description__img"
            />
            <p className="option__section--primary__group-description__text-2">
              Sabor e qualidade em cada mordida – adquira sua bolacha hoje
              mesmo!
            </p>
          </div>
        </div>
        <div className="option__section--secundary">
          <img
            src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Bolacha-Doce-G-Mackup.webp"
            alt=""
            className="option__section--secundary__img-1"
          /><img
            src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Bolacha-Doce-G-Mackup.webp"
            alt=""
            className="option__section--secundary__img-2"
          />
        </div>
      </div>
    </div>
  )
}

export default Modal