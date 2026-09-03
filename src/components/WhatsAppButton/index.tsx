import React from "react";

export const phone = "5581988474038";
const WhatsAppButton: React.FC = () => {

  const handleClick = () => {
    window.open(
      `https://wa.me/${phone}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <style>
        {`
          @keyframes whatsappPulse {
            0% {
              transform: scale(0.95);
              opacity: 0.7;
            }

            70% {
              transform: scale(1.35);
              opacity: 0;
            }

            100% {
              transform: scale(1.35);
              opacity: 0;
            }
          }

          .whatsapp-button-wrapper {
            position: fixed;
            right: 24px;
            bottom: 24px;
            width: 60px;
            height: 60px;
            z-index: 999999;
          }

          .whatsapp-button-wrapper::before,
          .whatsapp-button-wrapper::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background: #25d366;
            animation: whatsappPulse 2s infinite;
            pointer-events: none;
          }

          .whatsapp-button-wrapper::after {
            animation-delay: 1s;
          }

          .whatsapp-button {
            position: relative;
            z-index: 2;
            width: 60px;
            height: 60px;
            border: none;
            border-radius: 50%;
            background: #25d366;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
            transition:
              transform 0.2s ease,
              box-shadow 0.2s ease;
          }

          .whatsapp-button:hover {
            transform: scale(1.08);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          }

          .whatsapp-button:active {
            transform: scale(0.95);
          }

          .whatsapp-button i {
            font-size: 34px;
          }

          @media (max-width: 600px) {
            .whatsapp-button-wrapper {
              right: 16px;
              bottom: 16px;
            }
          }
        `}
      </style>

      <div className="whatsapp-button-wrapper">
        <button
          type="button"
          className="whatsapp-button"
          onClick={handleClick}
          aria-label="Entrar em contato pelo WhatsApp"
          title="Fale conosco pelo WhatsApp"
        >
          <i className="bx bxl-whatsapp" />
        </button>
      </div>
    </>
  );
};

export default WhatsAppButton;