import * as Yup from "yup";
import { useState } from 'react';
import { Formik, Form, type FormikHelpers } from 'formik';
import emailjs from "emailjs-com";
import { showNotyf } from '../../utils/notyf';

type ContactFormValues = {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
};

type IFormFildProps = {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const FormField = ({ id, name, type = 'text', placeholder, ...props }: IFormFildProps) => {
  if (type === 'textarea') {
    return (
      <>

        <textarea id={id} name={name} placeholder={placeholder} {...props}></textarea>
      </>
    );
  }
  return (
    <>
      <input id={id} name={name} type={type} placeholder={placeholder} {...props} />
    </>
  );
};

const contactFormSchema = Yup.object().shape({
  nome: Yup.string()
    .required("O nome é obrigatório")
    .min(3, "Nome muito curto"),

  email: Yup.string()
    .email("Email inválido")
    .required("O email é obrigatório"),

  assunto: Yup.string()
    .required("O assunto é obrigatório"),

  mensagem: Yup.string()
    .required("A mensagem é obrigatória")
    .min(10, "A mensagem deve ter ao menos 10 caracteres"),
});
 
// Chaves e IDs do EmailJS
const SERVICE_ID = 'service_ykwz0ni'; 
const TEMPLATE_ID = 'template_h37bm6s'; 
const PUBLIC_KEY = 'LkWLwIyTgUZFuaPa1'; 
const MY_EMAIL = "jefferson.santos.dev8051@gmail.com"; 

const Contato = () => {
  const [loading, setLoading] = useState(false);

  const initialValues: ContactFormValues = {
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  };

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>
  ) => {
    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: values.nome,
          reply_to: values.email,
          subject: values.assunto,
          message: values.mensagem,
          to_email: MY_EMAIL,
          time: new Date().toLocaleString("pt-BR") 
        },
        PUBLIC_KEY
      );

      showNotyf("success", "Email enviado com sucesso!");
      resetForm();

    } catch (error) {
      console.error("Erro ao enviar email:", error);
      showNotyf("error", "Ocorreu um erro ao enviar o email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="group-contato" id="contato">
      <section className="group-contato__contato">
        <div className="group-contato__contato__group-primary" data-aos="fade-up">
          <span className="group-contato__contato__group-primary__suptitle">
            Contato
          </span>
          <h2 className="group-contato__contato__group-primary__title">
            Envie um email para nossa Distribuidora
          </h2>
          
          <Formik
            initialValues={initialValues}
            validationSchema={contactFormSchema} // Use seu schema de validação aqui (ex: Yup)
            onSubmit={handleSubmit}
          >
            <Form className="group-contato__contato__group-primary__form">
              <FormField
                placeholder="Insira seu nome e sobrenome"
                name="nome"
                id="nome"
              />
              <FormField
                placeholder="Insira seu E-MAIL"
                type="email"
                name="email"
                id="email"
              />
              <FormField
                placeholder="Insira o assunto da mensagem"
                name="assunto"
                id="assunto"
              />
              <FormField
                placeholder="Sua mensagem"
                name="mensagem"
                id="mensagem"
                type="textarea"
              />
              
              <button 
                type="submit" 
                disabled={loading} 
              
              >
                {!loading && "Enviar"}
                {/* Ícone de loading (se estiver usando Boxicons) */}
                {loading && <i className='bx bx-loader-alt bx-spin'></i>}
              </button>
            </Form>
          </Formik>

        </div>
        <div className="group-contato__contato__group-secundary" data-aos="fade-up">
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
  );
};

export default Contato;