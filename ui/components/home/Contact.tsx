import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { openWhatsApp } from '@/tools/helpers';

library.add(faWhatsapp);

export const Contact = () => {
 return (
  <div className='contact' id='contact'>
   <div className='content'>
    <h2>Contacta Con Nosotros</h2>
    <p>
     Estamos aquí para responder a todas tus preguntas y guiarte en tu viaje espiritual. Contáctanos para descubrir un universo de
     posibilidades.
    </p>
    <button className='button-default' onClick={() => openWhatsApp('default')}>
     Iniciar Conversación <FontAwesomeIcon icon={faWhatsapp} />
    </button>
   </div>
  </div>
 );
};
