import { useState } from 'react';

export const ADBanner = (sloganUserParam: boolean | any) => {
 const [showSlogan] = useState(sloganUserParam);

 return (
  <div className='advertising-banner' id='home'>
   {showSlogan && (
    <div className='name-slogan'>
     <h2>
      Secrets <span>Universe</span>
     </h2>
     <p>¡Sé el Dueño de tu Destino: Descubre lo que el Universo Tiene Preparado para Ti!</p>
    </div>
   )}
  </div>
 );
};
