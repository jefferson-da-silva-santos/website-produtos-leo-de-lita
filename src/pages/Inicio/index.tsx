import video from '../../assets/video/video.mp4';

const Inicio = () => {
  return (
     <div className="group-header" id="inicio">
      <header className="group-header__header">
        <div className="group-header__header__header-primary">
          <video
            poster="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo.webp"
            width="100%"
            height="100%"
            controls
          >
            <source src={video} type="video/mp4" />
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
          <img
            className="img1"
            src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Bolacha-Nazare-Mackup.webp"
            alt=""
          />
          <img
            className="img2"
            src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Bolacha-Suica-Mackup.webp"
            alt=""
          />
          <img
            src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Sequilho-100-g.webp"
            alt=""
            className="img3"
          />
          <img
            src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Torrada-Cebola-Mackup.webp"
            alt=""
            className="img4"
          />
        </div>
        <div className="group-header__header__header-secundary">
          <h1 className="group-header__header__header-secundary__title">
            Sabor e qualidade em cada <strong>mordida</strong>.
          </h1>

          <p className="group-header__header__header-secundary__text">
            Bolachas deliciosas para todos os gostos. Oferecemos uma variedade
            irresistível de sabores, com qualidade e frescor em cada fornada.
          </p>
          <br />
          <p
            className="group-header__header__header-secundary__text header-text-btn"
          >
            Conheça melhor nossa marca através do vídeo abaixo:
          </p>

       
        </div>
      </header>
      <div className="group-header__color-animated-1"></div>
      <div className="group-header__color-animated-2"></div>
      <div className="group-header__color-animated-3"></div>
    </div>
  )
}

export default Inicio