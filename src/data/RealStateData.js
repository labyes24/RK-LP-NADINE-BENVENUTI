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

const properties = [
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

/**
 * Retrieves the properties info.
 * @return {Array<Property>} returns an array of properties info.
 */
export function useProperties() {
  return properties
}
