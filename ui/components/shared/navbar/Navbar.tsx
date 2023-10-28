import { useEffect } from 'react';
import Link from 'next/link';
import { handleNavbarScroll, handleBars } from '@/tools/helpers';

export const Navbar = () => {
 useEffect(() => addEventListener('scroll', handleNavbarScroll), []);

 return (
  <header>
   <div className='advertising-banne'>
    <div className='welcome-text'>
     <h2>
      Secrets <span>Universe</span>
     </h2>
     <p>¡Sé el Dueño de tu Destino: Descubre lo que el Universo Tiene Preparado para Ti!</p>
    </div>
   </div>

   <div className='navbar'>
    <div className='logo'>
     <h3>
      Secrets <span>Universe</span>
     </h3>
    </div>

    <div className='bars' onClick={handleBars}>
     <div className='bar'></div>
     <div className='bar'></div>
     <div className='bar'></div>
    </div>

    <div className='navigation'>
     <Link href='#home'>Inicio</Link>
     <Link href='#about'>Nosotros</Link>
     <Link href='#services'>Servicios</Link>
     <Link href='#testimonials'>Testimonios</Link>
     <Link href='#contact'>Contacto</Link>
    </div>
   </div>
  </header>
 );
};
