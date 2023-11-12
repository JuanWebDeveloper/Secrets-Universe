const getServiceMessage = (serviceName: string) => {
 switch (serviceName) {
  case 'Lecturas de Tarot':
   return `¡Hola! Estoy interesado en la lectura de tarot. ¿Puedes proporcionarme más información?`;
  case 'Astrología Personalizada':
   return `¡Hola! Estoy interesado en la astrología personalizada. ¿Me puedes ayudar con algunas preguntas?`;
  case 'Amarres de Amor':
   return `¡Hola! Estoy interesado en los amarres de amor. ¿Puedes darme más detalles?`;
  case 'Limpieza de Energías':
   return `¡Hola! Estoy interesado en la limpieza de energías. ¿En qué consiste?`;
  case 'Rituales para la Prosperidad':
   return `¡Hola! Quisiera información sobre los rituales para la prosperidad. ¿Puedes ayudarme?`;
  case 'Numerología Reveladora':
   return `¡Hola! Estoy interesado en la numerología reveladora. ¿Qué información puedes proporcionarme?`;
  default:
   return `¡Hola! Estoy interesado en tus servicios. ¿Puedes ayudarme?`;
 }
};

export const openWhatsApp = (serviceName: string) => {
 const message = encodeURIComponent(getServiceMessage(serviceName));
 window.open(`https://wa.me/+573136966329?text=${message}`, '_blank');
};
