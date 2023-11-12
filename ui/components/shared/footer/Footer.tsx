import React from 'react';
import { ADBanner } from '../adBanner/ADBanner';

export const Footer = () => {
 return (
  <footer>
   <ADBanner sloganUserParam={false} />
   <div className='text-copy'>
    <span>©</span> 2023 Secrets <span>Universe</span>. Todos los derechos reservados.
   </div>
  </footer>
 );
};
