import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight);

export const IntroAboutUs = () => {
 return (
  <div className='intro-about_us' id='introAboutUs'>
   <div className='content'>
    <h2>Sobre Nosotros</h2>
    <p>
     Bienvenido a Secrets <span>Universe</span>, tu guía en el viaje espiritual. Somos un equipo de expertos en astrología, tarot,
     amarres de amor, limpieza de energías y rituales de prosperidad dedicados a brindarte orientación y apoyo en tu camino hacia
     la claridad y el equilibrio. Trabajamos de manera presencial y remota para adaptarnos a tus necesidades. Ya sea que busques
     respuestas profundas o desees atraer prosperidad y positividad a tu vida, estaremos aquí para guiarte.
    </p>
    <div className='button-position'>
     <Link href={''} className='button-default'>
      Conocenos Mejor <FontAwesomeIcon icon={faArrowRight} />
     </Link>
    </div>
   </div>
  </div>
 );
};
