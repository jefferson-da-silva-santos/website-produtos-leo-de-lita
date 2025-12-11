import { useEffect, useState } from 'react';
import video from '../../assets/video/video.mp4';

const Inicio = () => {
  const [textVideo, setTextVideo] = useState('Conheça melhor nossa marca através do vídeo ao lado:');

  useEffect(() => {
    const handleResize = () => setTextVideo(window.innerWidth > 884 ? 'Conheça melhor nossa marca através do vídeo ao lado:' : 'Conheça melhor nossa marca através do vídeo abaixo:');
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
     <div className="group-header" id="inicio">
       <img src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/decoration.webp" alt="" className="docoration_1" />
      <img src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/decoration.webp" alt="" className="docoration_2" />
      <header className="group-header__header">
        <div className="group-header__header__header-primary" data-aos="fade-right">
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
        <div className="group-header__header__header-secundary"  data-aos="fade-left">
          <h1 className="group-header__header__header-secundary__title">
            Sabor e qualidade em cada <strong>mordida</strong> desde 2014.
          </h1>

          <p className="group-header__header__header-secundary__text">
            Temos produtos deliciosos para todos os gostos, oferecemos uma variedade irresistível de sabor com qualidade.
          </p>
          <br />
          <p
            className="group-header__header__header-secundary__text header-text-btn"
          >
            {textVideo}
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