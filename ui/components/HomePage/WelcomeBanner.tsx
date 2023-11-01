import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { BaseUrl } from '@/tools/utils';

library.add(faWhatsapp);

export const WelcomeBanner = () => {
 const backgroundImageStyle = {
  backgroundImage: `url('${BaseUrl}/images/home/welcome-background.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
 };

 return (
  <div className='welcome-banner' style={backgroundImageStyle}>
   <div className='content'>
    <div className='banner-text'>
     <h1>
      <span>Rediseña Tu Destino:</span> Los Encantos Ocultos de Nuestros Servicios
     </h1>
     <ul>
      <li>
       <span>🃏 Lecturas de Tarot:</span> Descubre las respuestas a tus preguntas con las cartas del tarot.
      </li>
      <li>
       <span>🔮 Astrología Personalizada:</span> Explora tu destino a través de la astrología.
      </li>
      <li>
       <span>💘 Amarres de Amor:</span> Enciende la pasión en tus relaciones.
      </li>
      <li>
       <span>✨ Limpieza de Energías:</span> Libérate de lo negativo y atrae la positividad.
      </li>
      <li>
       <span>🌟 Rituales para la Prosperidad:</span> Atrae la abundancia a tu vida.
      </li>
      <li>
       <span>🔢 Numerología Reveladora:</span> Descubre los secretos detrás de los números.
      </li>
      <li>
       <span>🔮 Consultas de Videncia:</span> Obtén información valiosa sobre tu futuro.
      </li>
     </ul>

     <p>¿Listo para explorar nuestros servicios?</p>
     <Link href={'/#services'} className='button-default'>
      Contactanos <FontAwesomeIcon icon={faWhatsapp} />
     </Link>
    </div>
   </div>
  </div>
 );
};
