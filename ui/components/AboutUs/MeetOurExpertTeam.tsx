import { BaseUrl } from '@/tools/utils';

export const MeetOurExpertTeam = () => {
 const backgroundImageStyle = {
  backgroundImage: `url('${BaseUrl}/images/aboutUs/team-info-container-background.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'repeat',
 };
 return (
  <div className='meet-expert_team'>
   <div className='content'>
    <div className='introduction-to_team-info' style={backgroundImageStyle}>
     <div className='text'>
      <h2>Conoce A Nuestro Equipo De Expertos</h2>
      <p>
       En Secrets Universe, contamos con un equipo de expertos en el mundo de la astrología, el tarot y las artes esotéricas. Cada
       uno de nuestros expertos está especializado en un área única y está dedicado a brindarte orientación y apoyo en tu viaje
       espiritual. Valoramos la seguridad y privacidad de nuestros expertos, por lo que no revelamos sus nombres en línea. Esto
       asegura que puedan centrarse en su trabajo sin distracciones y mantener un ambiente de confidencialidad. A continuación,
       encontrarás una descripción detallada de los servicios que ofrecemos.
      </p>
     </div>
    </div>
   </div>
  </div>
 );
};
