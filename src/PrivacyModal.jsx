import React, { useState } from 'react';

const PrivacyModal = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
        Al enviar este formulario, aceptas nuestra{' '}
        <button
          onClick={() => setShow(true)}
          style={{
            background: 'none',
            border: 'none',
            color: '#007BFF',
            textDecoration: 'underline',
            cursor: 'pointer',
            padding: 0,
            font: 'inherit',
          }}
        >
          Política de Privacidad / Privacy Policy
        </button>.
      </p>

      {show && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
          onClick={() => setShow(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: '90%',
              maxHeight: '80vh',
              overflowY: 'auto',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ marginTop: 0 }}>Política de Privacidad / Privacy Policy</h2>
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

            <button
              onClick={() => setShow(false)}
              style={{
                marginTop: '1.5rem',
                padding: '0.6rem 1.2rem',
                border: 'none',
                backgroundColor: '#007BFF',
                color: 'white',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Cerrar / Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacyModal;
