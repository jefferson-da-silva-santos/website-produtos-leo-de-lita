import useModal from "../../hooks/useModal"

const Modal = () => {
  const { dataModal, isOpen, closeModal, classModal }  = useModal();

  return (
    <div className="group-option" style={
      isOpen ? { display: "flex" } : { display: "none" }
    }>
      <div className={`option ${classModal}`}>
        <img
          src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/close2.webp"
          alt=""
          className="option__btn-close"
          onClick={closeModal}
        />
        <div className="option__section--primary">
          <h2 className="option__section--primary__title">
            {dataModal.title}
          </h2>
          <div className="option__section--primary__group-description">
            <img
              src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/arrow-right.webp"
              alt=""
              className="option__section--primary__group-description__img"
            />
            <p className="option__section--primary__group-description__text">{dataModal.text}</p>
          </div>
          <div className="option__section--primary__group-description">
            <img
              src="https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/BolachasLeoDeLita/webp/arrow-right.webp"
              alt=""
              className="option__section--primary__group-description__img"
            />
            <p className="option__section--primary__group-description__text-2">
              {dataModal.description_secondary}
            </p>
          </div>
        </div>
        <div className="option__section--secundary">
          <img
            src={dataModal.imageSrc}
            alt=""
            className="option__section--secundary__img-1"
          /><img
            src={dataModal.imageSrc}
            alt=""
            className="option__section--secundary__img-2"
          />
        </div>
      </div>
    </div>
  )
}

export default Modal