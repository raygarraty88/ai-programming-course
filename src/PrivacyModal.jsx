import React from 'react';
import './PrivacyModal.css';

function PrivacyModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
         <h2 style={{ marginTop: 20 }}>Política de Privacidad / Privacy Policy</h2>
            <p><strong>Última actualización:</strong> [Fecha]</p>

            <h3>Quiénes somos / Who We Are</h3>
            <p>
              Este sitio web es operado por [Tu nombre o nombre del curso] en Valencia, España. This site is operated by [Your Name / Course] in Valencia, Spain.
            </p>

            <h3>Qué datos recopilamos / What Data We Collect</h3>
            <ul>
              <li>Nombre completo / Full name</li>
              <li>Correo electrónico / Email address</li>
              <li>Teléfono (opcional) / Phone (optional)</li>
              <li>Preferencia de formato / Format preference</li>
              <li>Mensaje (opcional) / Optional message</li>
            </ul>

            <h3>Por qué los recopilamos / Why We Collect It</h3>
            <p>Solo para comunicarnos contigo respecto al curso. Only to contact you regarding the course.</p>

            <h3>Cuánto tiempo los guardamos / How Long We Keep It</h3>
            <p>Solo mientras sea necesario para tu inscripción o comunicación. Only as long as necessary for enrollment or communication.</p>

            <h3>Sus derechos / Your Rights</h3>
            <ul>
              <li>Acceder / Access</li>
              <li>Rectificar o eliminar / Correct or delete</li>
              <li>Retirar consentimiento / Withdraw consent</li>
            </ul>

            <h3>Contacto / Contact</h3>
            <p>
              📧 [tu@email.com]  
              <br />
              📍 Valencia, España
            </p>
            <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PrivacyModal;