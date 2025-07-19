import React from 'react';
import './PrivacyModal.css';

function PrivacyModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Política de Privacidad / Privacy Policy</h2>
        <p>
          Al enviar este formulario, aceptas nuestra política de privacidad. Nos comprometemos a proteger tu información personal.
        </p>
        <p>
          By submitting this form, you agree to our privacy policy. We are committed to protecting your personal data.
        </p>
      </div>
    </div>
  );
}

export default PrivacyModal;