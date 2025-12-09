const Contato = () => {
  return (
    <div className="group-contato" id="contato">
        <section className="group-contato__contato">
          <div className="group-contato__contato__group-primary">
            <span className="group-contato__contato__group-primary__suptitle"
              >Contato</span
            >
            <h2 className="group-contato__contato__group-primary__title">
              Envie um email para nossa Distribuidora
            </h2>
            <form action="" className="group-contato__contato__group-primary__form">
              <input
                placeholder="Insira seu nome e sobrenome"
                type="text"
                name=""
                id=""
              />
              <input
                placeholder="Insira seu E-MAIL"
                type="email"
                name=""
                id=""
              />
              <input
                placeholder="Insira o assunto da mensagem"
                type="text"
                name=""
                id=""
              />
              <textarea placeholder="Sua mensagem" name="" id=""></textarea>
              <input type="submit" value="Enviar" />
            </form>
          </div>
          <div className="group-contato__contato__group-secundary">
            <img
              src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/imagem%20banner.webp"
              alt=""
            />
            <div className="group-social">
              <a
                target="_blank"
                href="https://www.instagram.com/produtosleodelita"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a target="_blank" href="http://bit.ly/Faleconoscop">
                <i className="bx bxl-whatsapp"></i>
              </a>
              <a
                target="_blank"
                href="https://m.facebook.com/profile.php?id=61566661689444"
              >
                <i className="bx bxl-facebook"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Contato