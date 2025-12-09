import React from 'react';

interface Produto {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
  buttonClass: string;
  imageCardClass?: string;
}

const produtosData: Produto[] = [
  {
    id: 1,
    imageSrc:
      'https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Bolacha-Doce-G-Mackup.webp',
    imageAlt: 'Bolacha Doce',
    title: 'Bolacha Doce',
    text: 'Bolacha doce de 300g, massa folhada, sabor agridoce.',
    buttonClass: 'p1',
  },
  {
    id: 2,
    imageSrc:
      'https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Bolacha-Salgada-Mackup.webp',
    imageAlt: 'Bolacha Salgada',
    title: 'Bolacha Salgada',
    text: 'Bolacha salgada de 300g, folhada, amanteigada.',
    buttonClass: 'p2',
  },
  {
    id: 3,
    imageSrc:
      'https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Bolacha-Integral-Mackup.webp',
    imageAlt: 'Bolacha Integral',
    title: 'Bolacha Integral',
    text: 'Bolacha integral de 300g, com trigo integral e fibras.',
    buttonClass: 'p3',
  },
  {
    id: 4,
    imageSrc:
      'https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Bolacha-Nazare-Mackup.webp',
    imageAlt: 'Bolacha Nazaré',
    title: 'Bolacha Nazaré',
    text: 'Bolacha Nazaré 300g, sabor amido de milho.',
    buttonClass: 'p4',
  },
  {
    id: 5,
    imageSrc:
      'https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Bolacha-Praeirinha-Mackup.webp',
    imageAlt: 'Bolacha Praeirinha',
    title: 'Bolacha Praeirinha',
    text: 'Bolacha de 300g, amido de milho e amanteigada.',
    buttonClass: 'p6',
  },
  {
    id: 6,
    imageSrc:
      'https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Bolacha-Suica-Mackup.webp',
    imageAlt: 'Bolacha Suíça',
    title: 'Bolacha Suíça',
    text: 'Bolacha suíça de 300g, com sabor amanteigado',
    buttonClass: 'p7',
  },
  {
    id: 7,
    imageSrc:
      'https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Sequilho-100-g.webp',
    imageAlt: 'Sequilhos',
    title: 'Sequilhos',
    text: 'Sequilhos de 100g, sabor coco, massa leve.',
    buttonClass: 'p8',
    imageCardClass: 'card__img-7', // Classe específica
  },
  {
    id: 8,
    imageSrc:
      'https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Torrada-Alho-Mackup.webp',
    imageAlt: 'Torradinhas de Alho',
    title: 'Torradinhas de Alho',
    text: 'Torrada de 150g, sabor alho. (Novidade da marca)',
    buttonClass: 'p9',
    imageCardClass: 'card__img-9',
  },
  {
    id: 9,
    imageSrc:
      'https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Torrada-Cebola-Mackup.webp',
    imageAlt: 'Torradinhas de Cebola',
    title: 'Torradinhas de Cebola',
    text: 'Torrada de 150g, sabor Cebola. (Novidade da marca)',
    buttonClass: 'p10',
    imageCardClass: 'card__img-10',
  },
  {
    id: 10,
    imageSrc:
      'https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/Leo-de-Lita-Torrada-Queijo-Mackup.webp',
    imageAlt: 'Torradinhas de Queijo',
    title: 'Torradinhas de Queijo',
    text: 'Torrada de 150g, sabor Queijo. (Novidade da marca)',
    buttonClass: 'p11',
    imageCardClass: 'card__img-11',
  },
];

// 3. Componente React (Functional Component) com Tipagem
const Produtos: React.FC = () => {
  return (
    <div className="group-servicos" id="servicos">
      <section className="group-servicos__servicos">
        {/* Bloco Primário (Título) */}
        <div className="group-servicos__servicos__group-primary">
          <span className="group-servicos__servicos__group-primary__suptitle">
            Produtos
          </span>
          <h2 className="group-servicos__servicos__group-primary__title">
            Aqui tem bolachas para todos os gostos,
            <strong>Confira Já</strong>
          </h2>
        </div>

        {/* Bloco Secundário (Cartões de Produto) */}
        <div className="group-servicos__servicos__group-secundary">
          {/* Mapeamento dos dados para gerar os cartões */}
          {produtosData.map((produto) => (
            <div className="card" key={produto.id}>
              <div className={`card__img ${produto.imageCardClass || ''}`}>
                <img
                  src={produto.imageSrc}
                  alt={produto.imageAlt}
                  sizes=""
                />
              </div>
              <span className="card__title">{produto.title}</span>
              <p className="card__text">{produto.text}</p>
              <button className={`card__btn ${produto.buttonClass}`}>
                Ver mais &rsaquo;
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Produtos;