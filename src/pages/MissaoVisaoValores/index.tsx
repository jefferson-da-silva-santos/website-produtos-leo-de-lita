import React from 'react';

// 1. Tipagem para os dados estruturados (Melhorando a clareza em TSX)
interface MissaoVisaoValoresData {
  missao: {
    titulo: string;
    texto: string;
  };
  visao: {
    titulo: string;
    texto: string;
  };
  valores: {
    titulo: string;
    lista: string[];
  };
}

// 2. Objeto de Configuração com os textos
const MVV_DATA: MissaoVisaoValoresData = {
  missao: {
    titulo: 'Missão',
    texto:
      'Oferecer alimentos saborosos e artesanais com agilidade, profissionalismo, levando à mesa dos nossos clientes o verdadeiro sabor e qualidade.',
  },
  visao: {
    titulo: 'Visão',
    texto:
      'Ser reconhecida como uma marca sólida e referência no Nordeste na produção, comercialização e distribuição de alimentos, fortalecendo laços com nossos clientes, fornecedores e colaboradores por meio de confiança, parceria e comprometimento.',
  },
  valores: {
    titulo: 'Valores',
    lista: [
      'Fé em Deus e na força do trabalho',
      'Lealdade e confiança em todas as relações',
      'Transparência e comunicação com ética e respeito',
      'Compromisso com a qualidade e o sabor artesanal',
      'Valorização de pessoas e histórias que nos inspiram a fazer o melhor todos os dias.',
    ],
  },
};

// 3. Componente React (Functional Component) com Tipagem
const MissaoVisaoValores: React.FC = () => {
  return (
    <div className="group-missao">
      <section className="group-missao__missao">
        <div className="card-missao" data-aos="fade-up-left">
          {/* Card Missão */}
          <div className="card-missao--primary">
            <h3 className="card-missao--primary__title">{MVV_DATA.missao.titulo}</h3>
            <p className="card-missao--primary__text">{MVV_DATA.missao.texto}</p>
          </div>

          {/* Card Visão */}
          <div className="card-missao--secondary">
            <h3 className="card-missao--secondary__title">{MVV_DATA.visao.titulo}</h3>
            <p className="card-missao--secondary__text">{MVV_DATA.visao.texto}</p>
          </div>

          {/* Card Valores */}
          <div className="card-missao--tertiary">
            <h3 className="card-missao--tertiary__title">{MVV_DATA.valores.titulo}</h3>
            <ul className="card-missao--tertiary__list">
              {/* Mapeamento da lista de valores */}
              {MVV_DATA.valores.lista.map((valor, index) => (
                <li className="item" key={index}>
                  {valor}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-missao--quartiary">
            <img
              src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Torrada-Queijo-Mackup.webp"
              alt=""
              className="img"
            />
            <img
              src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Torrada-Queijo-Mackup.webp"
              alt=""
              className="img"
            />
            <img
              src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Bolacha-Integral-Mackup.webp"
              alt=""
              className="img"
            />
            <img
              src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo%20de%20Lita%20Bolacha%20Praeirinha%20M.webp"
              alt=""
              className="img"
            />
            <img
              src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Bolacha-Salgada-Mackup.webp"
              alt=""
              className="img"
            />
          </div>

          {/* Imagens Animadas (Mantido conforme original) */}
          <img
            src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Torrada-Queijo-Mackup.webp"
            alt=""
            className="animedImg"
          />
          <img
            src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Torrada-Queijo-Mackup.webp"
            alt=""
            className="animedImg2"
          />
          <img
            src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Bolacha-Salgada-Mackup.webp"
            alt=""
            className="animedImg3"
          />
          <img
            src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Bolacha-Salgada-Mackup.webp"
            alt=""
            className="animedImg4"
          />
        </div>
      </section>
    </div>
  );
};

export default MissaoVisaoValores;