export const siteContent = {
  brand: {
    name: 'IAMagica',
    description:
      'Presencia digital para negocios de servicios que buscan claridad, confianza y una imagen seria.',
  },
  qualifier: [
    'Estudio digital para negocios de servicios',
    'Atención cercana',
    'Proceso claro',
    'Imagen premium',
  ],
  hero: {
    eyebrow: 'Estudio digital para negocios de servicios',
    title: 'Presencia clara y elegante para negocios que quieren convertir visitas en contactos.',
    description:
      'Una web sobria, bien escrita y orientada a transmitir confianza desde el primer momento.',
    primaryCta: 'Solicitar propuesta',
    secondaryCta: 'Conocer el servicio',
    trustLabel: 'Pensada para estudios, consultorías y negocios de servicios que quieren una presencia seria.',
  },
  benefits: [
    {
      title: 'Claridad comercial',
      description:
        'Explicamos la oferta de forma directa para que el visitante entienda rápido el valor.',
    },
    {
      title: 'Imagen profesional',
      description:
        'Una presencia cuidada refuerza la percepción de seriedad y confianza.',
    },
    {
      title: 'Contacto fácil',
      description:
        'La estructura guía al usuario hacia una acción sencilla y sin fricción.',
    },
  ],
  howItWorks: [
    {
      step: '01',
      title: 'Entendemos tu propuesta',
      description:
        'Analizamos el servicio, el tono y el tipo de cliente al que quieres llegar.',
    },
    {
      step: '02',
      title: 'Ordenamos el mensaje',
      description:
        'Priorizamos lo importante para que la lectura sea rápida y convincente.',
    },
    {
      step: '03',
      title: 'Abrimos el contacto',
      description:
        'Dejamos claro cómo dar el siguiente paso y pedir información.',
    },
  ],
  programs: [
    {
      name: 'Presencia esencial',
      summary:
        'Una web limpia y seria para explicar tu servicio con claridad desde el inicio.',
      points: ['Mensaje directo', 'Imagen cuidada', 'Lectura sencilla'],
    },
    {
      name: 'Página de conversión',
      summary:
        'Una presentación enfocada en captar interesados y facilitar el contacto.',
      points: ['Propuesta clara', 'Llamadas a la acción visibles', 'Contenido orientado a contacto'],
    },
    {
      name: 'Ajustes y evolución',
      summary:
        'Ajustes posteriores para mantener la página alineada con la evolución del negocio.',
      points: ['Mejoras de copy', 'Ajustes visuales', 'Seguimiento cercano'],
    },
  ],
  socialProof: {
    label: 'Confianza',
    stats: [
      { value: '24 h', label: 'para una primera respuesta' },
      { value: '3 fases', label: 'de trabajo claro y ordenado' },
      { value: '1 contacto', label: 'directo y sin rodeos' },
    ],
    quotes: [
      {
        text: 'Nos ayudaron a presentar el servicio con mucha más claridad y la página transmite más confianza.',
        author: 'Cliente profesional',
      },
      {
        text: 'El resultado se siente serio, limpio y fácil de entender para un cliente nuevo.',
        author: 'Responsable comercial',
      },
    ],
  },
  about: {
    eyebrow: 'Sobre el estudio',
    title: 'Cuidamos la presencia digital de negocios de servicios.',
    description:
      'Trabajamos el mensaje, la estructura y la sensación de marca para que la web apoye la conversación comercial y facilite el contacto.',
    bullets: [
      'Mensaje y posicionamiento',
      'Diseño sobrio y cuidado',
      'Trato directo y cercano',
    ],
  },
  faq: [
    {
      question: '¿Qué tipo de servicios trabajáis?',
      answer:
        'Trabajamos con negocios de servicios que necesitan una presencia seria, clara y orientada a generar confianza.',
    },
    {
      question: '¿Cuánto tarda una primera propuesta?',
      answer:
        'Depende del alcance, pero solemos empezar con una primera orientación rápida para no alargar el proceso.',
    },
    {
      question: 'Podemos adaptar el contenido a nuestra oferta?',
      answer:
        'Sí. El mensaje se ajusta a tu servicio, a tu cliente ideal y al tono de tu marca.',
    },
    {
      question: '¿Qué necesitáis para empezar?',
      answer:
        'Una descripción breve de tu servicio, tus objetivos y el tipo de contacto que quieres recibir.',
    },
  ],
  finalCta: {
    eyebrow: 'Hablemos de tu proyecto',
    title: 'Si quieres una presencia más clara y profesional, podemos ayudarte a dar el siguiente paso.',
    description:
      'Un sitio serio, bien escrito y enfocado a convertir visitas en contactos marca la diferencia en cualquier negocio de servicios.',
    primaryCta: 'Solicitar propuesta',
    secondaryCta: 'Volver arriba',
  },
  contactForm: {
    title: 'Solicita información',
    description:
      'Cuentanos brevemente tu servicio y te responderemos con una primera orientacion.',
    fields: ['Nombre', 'Email', 'Empresa', 'Tipo de servicio', 'Mensaje'],
    submitLabel: 'Enviar solicitud',
  },
  footer: {
    note: 'Presencia profesional para negocios de servicios.',
    links: [
      { label: 'Inicio', href: '/' },
      { label: 'Servicios', href: '#programs' },
      { label: 'Preguntas', href: '#faq' },
      { label: 'Gracias', href: '/gracias' },
    ],
  },
} as const;

export type Benefit = (typeof siteContent.benefits)[number];
export type Step = (typeof siteContent.howItWorks)[number];
export type Program = (typeof siteContent.programs)[number];
export type Quote = (typeof siteContent.socialProof.quotes)[number];
export type FaqItem = (typeof siteContent.faq)[number];
