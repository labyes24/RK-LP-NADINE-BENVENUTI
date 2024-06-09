import { useTranslation } from 'react-i18next'

/**
 * The property info
 * @typedef {Object} Property
 * @property {string} id - indicates the unique identifier of the property.
 * @property {string} brokerId - indicates the broker identifier of the property.
 * @property {string} RKCode - indicates the property code on RK Imóveis website.
 * @property {string} title - indicates the title of the property.
 * @property {string} region - indicates the region of the property.
 * @property {string} description - indicates the description of the property.
 * @property {string} price - indicates the price of the property.
 * @property {Object} details - indicates the details of the property.
 * @property {string} details.square - The square meters of the property.
 * @property {string} details.rooms - The rooms of the property.
 * @property {string} details.bathrooms - The bathrooms of the property.
 * @property {string} details.garage - The garage of the property.
 * @property {Array<string>} pictures - indicates the URL of the pictures of the property.
 */

const BROKER_ID = crypto.randomUUID()

/**  @type {Array<Property>} The Portuguese properties data */
const propertiesPT = [
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9702',
    title: 'Dom Bernardo',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Cobertura mobiliada possui 4 dormitórios, sendo 2 suítes, destaca-se pelo amplo terraço, oferecendo uma área ao ar livre generosa, perfeita para momentos de relaxamento, entretenimento e uma vista panorâmica. Além disso, a cobertura conta com 2 vagas de garagem, proporcionando comodidade e segurança para os residentes. O condomínio oferece uma área de lazer completa, proporcionando diversas opções de entretenimento aos moradores. Espaços como piscina, salão de festas, áreas verdes e outros atrativos contribuem para uma experiência residencial completa e agradável.',
    price: 'R$ 1.360.000,00',
    details: {
      square: '188,58 m²',
      rooms: '4',
      bathrooms: '3',
      garage: '2',
    },
    pictures: [
      './properties/dom-bernardo-f01.jpg',
      './properties/dom-bernardo-f02.jpg',
      './properties/dom-bernardo-f03.jpg',
      './properties/dom-bernardo-f04.jpg',
      './properties/dom-bernardo-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9807',
    title: 'Villa Rica',
    region: 'Ingleses',
    description:
      '**IMOVEL COM MATRÍCULA**\n\n Apartamento de 3 dormitórios, com uma suíte, a uma quadra do mar, em frente a uma linda praça, muito arborizada, com espaço separado para pets. 3 banheiros, sendo um lavabo, living, duas salas amplas de jantar e estar (com TV), escritório, cozinha sob medida, lavanderia sob medida, uma sacada ampla e integrada.',
    price: 'R$ 890.000,00',
    details: {
      square: '114,90 m²',
      rooms: '3',
      bathrooms: '3',
      garage: '2',
    },
    pictures: [
      './properties/villa-rica-f01.jpg',
      './properties/villa-rica-f02.jpg',
      './properties/villa-rica-f03.jpg',
      './properties/villa-rica-f04.jpg',
      './properties/villa-rica-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '7989',
    title: 'Cannes Clube II',
    region: 'Ingleses',
    description:
      ' O empreendimento será localizado na região nobre da praia dos Ingleses (região da Rua das Gaivotas), Norte da Ilha de Florianópolis, num terreno de aproximadamente 20.000,00m², a 180m do mar, na Rua dos Canudos. São 8 blocos, divididos em 2 terrenos, com estrutura de lazer individual em cada terreno. Conta com uma ampla infraestrutura de lazer aprox. 4.500m². Com piscina, salão de festas, academia, brinquedoteca, playground, churrasqueiras, pet place e pista de caminhada. Está semimobiliado com móveis de altíssima qualidade.\n\n**Imóvel em Processo de **\n\n **Individualização de Matrícula**\n\n',
    price: 'R$ 750.000,00',
    details: {
      square: '80,97 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '2',
    },
    pictures: [
      './properties/cannes-clube-f01.jpg',
      './properties/cannes-clube-f02.jpg',
      './properties/cannes-clube-f03.jpg',
      './properties/cannes-clube-f04.jpg',
      './properties/cannes-clube-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '8403',
    title: 'Costa Norte',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Reformado! Localizado na rua Martinho de Haro. São 2 dormitórios, semimobiliados, com vaga de garagem coberta. Posição solar dos quartos Oeste. Rua calçada e próximo a ponto de ônibus.',
    price: 'R$ 415.000,00',
    details: {
      square: '57,00 m²',
      rooms: '2',
      bathrooms: '1',
      garage: '1',
    },
    pictures: [
      './properties/costa-norte-f01.jpg',
      './properties/costa-norte-f02.jpg',
      './properties/costa-norte-f03.jpg',
      './properties/costa-norte-f04.jpg',
      './properties/costa-norte-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9746',
    title: 'Vellas Jurerê',
    region: 'Jurerê',
    description:
      'Belíssimo apartamento de Alto Padrão na praia de Jurerê. Excelente localização em frente as marinas e próximo a paradisíaca praia de Canasjurê. Apartamento de um dormitório, suíte, conta com um lavabo, sala e cozinha com churrasqueira. O condomínio é completo e de muitíssimo bom gosto. Conta com academia, sala de jogos, salão de festas, fogo de chão e piscina.\n\n**Imóvel em Processo de **\n\n **Individualização de Matrícula**\n\n',
    price: 'R$ 636.000,00',
    details: {
      square: '43,36 m²',
      rooms: '1',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      './properties/vellas-jurere-f01.jpg',
      './properties/vellas-jurere-f02.jpg',
      './properties/vellas-jurere-f03.jpg',
      './properties/vellas-jurere-f04.jpg',
      './properties/vellas-jurere-f05.jpg',
    ],
  },
]

/**  @type {Array<Property>} The Portuguese properties data */
const propertiesES = [
  // TODO: Add Spanish properties text
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9702',
    title: 'Dom Bernardo',
    region: 'Ingleses',
    description:
      '**INMUEBLE CON MATRÍCULA**\n\n Cobertura amueblada cuenta con 4 dormitorios, siendo 2 suites, se destaca por la amplia terraza, ofreciendo una área al aire libre generosa, perfecta para momentos de relajación, entretenimiento y una vista panorámica. Además, la cobertura cuenta con 2 plazas de garaje, proporcionando comodidad y seguridad para los residentes. El condominio ofrece una área de ocio completa, proporcionando diversas opciones de entretenimiento a los residentes. Espacios como piscina, salón de fiestas, áreas verdes y otros atractivos contribuyen a una experiencia residencial completa y agradable.',
    price: 'R$ 1.360.000,00',
    details: {
      square: '188,58 m²',
      rooms: '4',
      bathrooms: '3',
      garage: '2',
    },
    pictures: [
      './properties/dom-bernardo-f01.jpg',
      './properties/dom-bernardo-f02.jpg',
      './properties/dom-bernardo-f03.jpg',
      './properties/dom-bernardo-f04.jpg',
      './properties/dom-bernardo-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9807',
    title: 'Villa Rica',
    region: 'Ingleses',
    description:
      '**INMUEBLE CON MATRÍCULA**\n\n Apartamento de 3 dormitorios, con una suite, a una cuadra del mar, frente a una linda plaza muy arbolada, con espacio separado para mascotas. 3 baños, uno de ellos un aseo, salón, dos amplias salas de estar y comedor (con TV), oficina, cocina a medida, lavandería a medida, un amplio balcón integrado.',

    price: 'R$ 890.000,00',
    details: {
      square: '114,90 m²',
      rooms: '3',
      bathrooms: '3',
      garage: '2',
    },
    pictures: [
      './properties/villa-rica-f01.jpg',
      './properties/villa-rica-f02.jpg',
      './properties/villa-rica-f03.jpg',
      './properties/villa-rica-f04.jpg',
      './properties/villa-rica-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '7989',
    title: 'Cannes Clube II',
    region: 'Ingleses',
    description:
      ' El emprendimiento estará ubicado en la región noble de la playa de los Ingleses (región de la Rua das Gaivotas), en el norte de la Isla de Florianópolis, en un terreno de aproximadamente 20.000,00 m², a 180 m del mar, en la Rua dos Canudos. Son 8 bloques, divididos en 2 terrenos, con estructura de ocio individual en cada terreno. Cuenta con una amplia infraestructura de ocio de aprox. 4.500 m². Con piscina, salón de fiestas, gimnasio, sala de juegos para niños, área de juegos, parrillas, lugar para mascotas y pista de caminata. Está semiamueblado con muebles de altísima calidad.\n\n**Inmueble en Proceso de**\n\n**Individualización de Matrícula**\n\n',
    price: 'R$ 750.000,00',
    details: {
      square: '80,97 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '2',
    },
    pictures: [
      './properties/cannes-clube-f01.jpg',
      './properties/cannes-clube-f02.jpg',
      './properties/cannes-clube-f03.jpg',
      './properties/cannes-clube-f04.jpg',
      './properties/cannes-clube-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '8403',
    title: 'Costa Norte',
    region: 'Ingleses',
    description:
      '**INMUEBLE CON MATRÍCULA**\n\n ¡Reformado! Ubicado en la calle Martinho de Haro. Son 2 dormitorios, semiamueblados, con plaza de garaje cubierta. Orientación solar de los dormitorios hacia el Oeste. Calle pavimentada y cerca de una parada de autobús.',
    price: 'R$ 415.000,00',
    details: {
      square: '57,00 m²',
      rooms: '2',
      bathrooms: '1',
      garage: '1',
    },
    pictures: [
      './properties/costa-norte-f01.jpg',
      './properties/costa-norte-f02.jpg',
      './properties/costa-norte-f03.jpg',
      './properties/costa-norte-f04.jpg',
      './properties/costa-norte-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9746',
    title: 'Vellas Jurerê',
    region: 'Jurerê',
    description:
      'Bellísimo apartamento de Alto Estándar en la playa de Jurerê. Excelente ubicación frente a las marinas y cerca de la paradisíaca playa de Canasjurê. Apartamento de un dormitorio, suite, cuenta con un aseo, sala y cocina con parrilla. El condominio es completo y de muy buen gusto. Cuenta con gimnasio, sala de juegos, salón de fiestas, fogón y piscina.\n\n**Inmueble en Proceso de**\n\n**Individualización de Matrícula**\n\n',
    price: 'R$ 636.000,00',
    details: {
      square: '43,36 m²',
      rooms: '1',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      './properties/vellas-jurere-f01.jpg',
      './properties/vellas-jurere-f02.jpg',
      './properties/vellas-jurere-f03.jpg',
      './properties/vellas-jurere-f04.jpg',
      './properties/vellas-jurere-f05.jpg',
    ],
  },
]

/**
 * The Properties data
 * @typedef {Object} PropertiesData
 * @property {Array<Property>} pt - The Portuguese property data.
 * @property {Array<Property>} es - The Spanish property data.
 */

/** @type {PropertiesData} The properties data */
const properties = {
  pt: propertiesPT,
  es: propertiesES,
}

/**
 * Retrieves the properties info.
 * @return {Array<Property>} returns an array of properties info.
 */
export function useProperties() {
  const {
    i18n: { language },
  } = useTranslation()

  if (properties[language]) {
    return properties[language]
  } else {
    return properties['pt']
  }
}
