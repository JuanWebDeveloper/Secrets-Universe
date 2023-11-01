import { BaseUrl } from '@/tools/utils';

export const AboutUsOverview = () => {
 const backgroundImageStyle = {
  backgroundImage: `url('${BaseUrl}/images/aboutUs/about-us-background.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
 };

 return (
  <div className='about-us_overview' style={backgroundImageStyle}>
   <div className='content'>
    <h2>
     Descubre la Esencia de Secrets <span>Universe</span>
    </h2>
    <h3>¡Donde los Misterios se Convierten en Claridad!</h3>
    <p>
     En Secrets Universe, te damos la bienvenida a un mundo donde los secretos del universo se convierten en claridad. Nuestra
     pasión por el misticismo y las artes esotéricas se refleja en cada aspecto de nuestra labor. Desde la astrología hasta las
     lecturas de tarot, y los rituales de prosperidad, nuestro equipo de expertos está dedicado a brindarte orientación y apoyo en
     tu viaje espiritual. Nuestra misión es desvelar los misterios del destino y ayudarte a encontrar la claridad y el equilibrio
     en tu vida. Acompáñanos mientras te revelamos los tesoros ocultos que Secrets Universe tiene reservados para ti.
    </p>
   </div>
  </div>
 );
};
