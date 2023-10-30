import { useEffect } from 'react';
import Link from 'next/link';
import { handleNavbarScroll, handleBars, closeNavigation } from '@/tools/helpers';

export const Navbar = () => {
 useEffect(() => addEventListener('scroll', handleNavbarScroll), []);

 return (
  <header>
   <div className='advertising-banne' id='home'>
    <div className='welcome-text'>
     <h2>
      Secrets <span>Universe</span>
     </h2>
     <p>¡Sé el Dueño de tu Destino: Descubre lo que el Universo Tiene Preparado para Ti!</p>
    </div>
   </div>

   <div className='navbar'>
    <div className='logo'>
     <Link href='#home'>
      <h3>
       Secrets <span>Universe</span>
      </h3>
     </Link>
    </div>

    <div className='bars-menu' onClick={handleBars}>
     <div className='single-bar'></div>
     <div className='single-bar'></div>
     <div className='single-bar'></div>
    </div>

    <div className='navigation'>
     <Link href='#home' onClick={closeNavigation}>
      Inicio
     </Link>
     <Link href='#introAboutUs' onClick={closeNavigation}>
      Nosotros
     </Link>
     <Link href='#services' onClick={closeNavigation}>
      Servicios
     </Link>
     <Link href='#testimonials' onClick={closeNavigation}>
      Testimonios
     </Link>
     <Link href='#contact' onClick={closeNavigation}>
      Contacto
     </Link>
    </div>
   </div>
  </header>
 );
};
