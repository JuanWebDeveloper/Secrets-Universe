export const ADBanner = ({ sloganUserParam }: { sloganUserParam: boolean }) => {
 return (
  <div className='advertising-banner' style={{ display: 'block' }}>
   {sloganUserParam && (
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
