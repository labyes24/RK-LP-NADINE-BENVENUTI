import { useTranslation } from 'react-i18next'

/**
 * The Address info
 * @typedef {Object} Address
 * @property {string} street - The street.
 * @property {string} district - The district.
 * @property {string} number - The number.
 * @property {string} city - The city.
 * @property {string} state - The state.
 */

/**
 * The Broker Description info
 *  @typedef {Object} BrokerDescription
 *  @property {string} title - The title.
 *  @property {Array<string>} paragraph - The paragraph.
 */

/**
 * The Broker comments info
 * @typedef {Object} BrokerComments
 * @property {string} id - The id.
 * @property {string} author - The author.
 * @property {string} quote - The text quote.
 */

/**
 * The Broker tips
 * @typedef {Object} BrokerTips
 * @property {string} id - The id.
 * @property {string} quote - The tip text.
 */

/**
 * The Review of the Client info
 * @typedef {Object} ClientReview
 * @property {string} review - The review.
 * @property {string} client - The name and title of the client.
 */

/**
 * The broker profile.
 * @typedef {Object} BrokerProfile
 * @property {string} id - indicates the unique identifier of the broker.
 * @property {string} name - indicates the name of the broker.
 * @property {string} CRECI - indicates the CRECI of the broker.
 * @property {string} profileImage - indicates the profile image of the broker.
 * @property {BrokerDescription} description - indicates the description of the broker.
 * @property {Address} address - indicates the address of the broker.
 * @property {string} phone - indicates the phone number of the broker.
 * @property {string} email - indicates the email of the broker.
 * @property {ClientReview} [clientReview] - indicates the review of the client.  <optional>
 * @property {Array<BrokerComments>} comments - indicates the comments to the broker.
 * @property {Array<BrokerTips>} tips - indicates the tips of the broker.
 */

/**
 * The broker data
 * @typedef {Object} BrokerData
 * @property {BrokerProfile} pt - The Portuguese broker profile.
 * @property {BrokerProfile} es - The Spanish broker profile.
 */

/**
 * @type {BrokerProfile} The broker profile for PT language
 */
const brokerProfilePT = {
  id: crypto.randomUUID(),
  name: 'Nadine Benvenuti',
  CRECI: '56.838-F',
  profileImage: '/broker/Nadine.png',
  description: {
    title:
      '"Minha paixão pela corretagem de imóveis é a chama que guia minha jornada."',
    paragraph: [
      'Muito prazer, sou Nadine Benvenuti, mãe dedicada do Giovanni e da Aurora, amante das maravilhas da natureza e da dança de salão.',
      'Corretora de imóveis, com formação em Administração e MBA em Gestão Empresarial e Finanças Corporativas. Após uma carreira executiva em grandes empresas, escolhi aplicar minha experiência e habilidades na corretagem.',
      'Minha trajetória é marcada por uma habilidade excepcional em lidar com pessoas, forte aptidão para vendas e negociação, e facilidade em conciliar opiniões divergentes. Essas habilidades combinadas resultaram em uma carreira de sucesso na corretagem de imóveis. Minha experiencia administrativa me proporciona uma visão clara das oportunidades de investimento do mercado. ',
      'Além do profissionalismo, sou mãe, o que me proporciona uma compreensão profunda da importância de um lar na vida de uma família. Estou aqui para guiá-lo em cada passo do processo imobiliário, oferecendo um serviço personalizado e eficiente. Seja bem-vindo, estou ansiosa para ajudá-lo a alcançar seus objetivos imobiliários!',
    ],
  },
  address: {
    street: 'Rua das Gaivotas',
    number: '1709',
    district: 'Ingleses',
    city: 'Florianópolis',
    state: 'SC',
  },
  phone: '(51) 99971-3412',
  email: 'nadine@rkimoveis.com.br',
  clientReview: {
    review: '',
    client: '',
  },
  comments: [
    {
      id: crypto.randomUUID(),
      author: 'Crescimento Econômico',
      quote:
        'Investir em propriedades no Norte de Floripa significa fazer parte de uma comunidade em expansão.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Praia Paradisíaca',
      quote:
        'Quem mora em Ingleses tem acesso a um verdadeiro paraíso tropical: praia deslumbrante com águas cristalinas e areias brancas.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Infraestrutura Completa',
      quote:
        'Escolas, clínicas médicas, supermercados, comércios locais proporcionam comodidade e praticidade no dia a dia.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Natureza Preservada',
      quote:
        'As praias Ingleses e Santinho contam com áreas de preservação ambiental. Equilíbrio entre o desenvolvimento urbano e a natureza exuberante.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Diversidade de Imóveis',
      quote:
        'A diversidade de opções imobiliárias permite encontrar o lar ideal para todos os gostos e necessidades.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Acessibilidade',
      quote:
        'A região é bem conectada, facilitando o deslocamento para outras partes da ilha e para o continente.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Esportes Aquáticos',
      quote:
        'Surf, Stand Up Paddle e outros esportes náuticos são populares graças às condições ideais oferecidas pelo mar local.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Qualidade de Vida',
      quote:
        'A atmosfera relaxada, a natureza exuberante e a infraestrutura completa contribuem para uma experiência única.',
    },
  ],
  tips: [
    {
      id: crypto.randomUUID(),
      quote:
        'Defina seu objetivo: ao comprar um imóvel é fundamental entender a finalidade, pois influenciará nas suas escolhas.',
    },
    {
      id: crypto.randomUUID(),
      quote:
        'Você pode ter diferentes objetivos como investimento em Revenda: Pesquise a valorização da propriedade a longo prazo, se for imóvel usado ou em construção.',
    },
    {
      id: crypto.randomUUID(),
      quote:
        'Se é para locação: Considere a demanda por aluguéis na área e o retorno sobre o investimento, seja rentabilidade anual ou sazonal.',
    },
    {
      id: crypto.randomUUID(),
      quote:
        'Se for para moradia: Priorize suas necessidades pessoais, como proximidade do trabalho e qualidade de vida na região.',
    },
  ],
}

/**
 * @type {BrokerProfile} The broker profile for ES language
 */
const brokerProfileES = {
  id: crypto.randomUUID(),
  name: 'Nadine Benvenuti',
  CRECI: '56.838-F',
  profileImage: '/broker/Nadine.png',
  description: {
    title:
      '"Mi pasión por la corretaje de inmuebles es la llama que guía mi camino"',
    paragraph: [
      'Mucho gusto, soy Nadine Benvenuti, madre dedicada de Giovanni y Aurora, amante de las maravillas de la naturaleza y del baile de salón.',
      'Soy corredora de inmuebles, con formación en Administración y un MBA en Gestión Empresarial y Finanzas Corporativas. Después de una carrera ejecutiva en grandes empresas, elegí aplicar mi experiencia y habilidades en la corretaje.',
      'Mi trayectoria está marcada por una habilidad excepcional para tratar con personas, una fuerte aptitud para ventas y negociación, y facilidad para conciliar opiniones divergentes. Estas habilidades combinadas han resultado en una carrera exitosa en la corretaje de inmuebles. Mi experiencia administrativa me proporciona una visión clara de las oportunidades de inversión en el mercado.',
      'Además del profesionalismo, soy madre, lo que me brinda una comprensión profunda de la importancia de un hogar en la vida de una familia. Estoy aquí para guiarlo en cada paso del proceso inmobiliario, ofreciendo un servicio personalizado y eficiente. ¡Sea bienvenido, estoy ansiosa por ayudarlo a alcanzar sus objetivos inmobiliarios!',
    ],
  },
  address: {
    street: 'Rua das Gaivotas',
    number: '1709',
    district: 'Ingleses',
    city: 'Florianópolis',
    state: 'SC',
  },
  phone: '(51) 99971-3412',
  email: 'nadine@rkimoveis.com.br',
  clientReview: {
    review: '',
    client: '',
  },
  comments: [
    {
      id: crypto.randomUUID(),
      author: 'Crecimiento Económico',
      quote:
        'Invertir en propiedades en North Floripa significa ser parte de una comunidad en expansión.',
    },
    {
      id: crypto.randomUUID(),
      author: 'playa Paraíso',
      quote:
        'Quienes viven en Ingleses tienen acceso a un verdadero paraíso tropical: una impresionante playa de aguas cristalinas y arena blanca.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Infraestructura completa',
      quote:
        'Las escuelas, clínicas médicas, supermercados y negocios locales brindan comodidad y practicidad en la vida cotidiana.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Naturaleza preservada',
      quote:
        'Las playas de los Ingleses y Santinho cuentan con áreas de preservación ambiental. Equilibrio entre desarrollo urbano y naturaleza exuberante.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Diversidad de Propiedades',
      quote:
        'La diversidad de opciones inmobiliarias permite encontrar la vivienda ideal para todos los gustos y necesidades',
    },
    {
      id: crypto.randomUUID(),
      author: 'Accesibilidad',
      quote:
        'La región está bien conectada, lo que facilita viajar a otras partes de la isla y al continente.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Deportes acuáticos',
      quote:
        'El surf, el Stand Up Paddle y otros deportes acuáticos son populares gracias a las condiciones ideales que ofrece el mar local.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Calidad de vida',
      quote:
        'El ambiente relajado, la exuberante naturaleza y la completa infraestructura contribuyen a una experiencia única',
    },
  ],
  tips: [
    {
      id: crypto.randomUUID(),
      quote:
        'Define tu objetivo: a la hora de comprar una propiedad es fundamental entender el propósito, ya que influirá en tus elecciones.',
    },
    {
      id: crypto.randomUUID(),
      quote:
        'Puedes tener diferentes objetivos como inversión en Reventa: Investigar la apreciación a largo plazo de la propiedad, ya sea usada o en construcción.',
    },
    {
      id: crypto.randomUUID(),
      quote:
        'Si es para alquiler: Considere la demanda de alquileres en la zona y el retorno de la inversión, ya sea rentabilidad anual o estacional.',
    },
    {
      id: crypto.randomUUID(),
      quote:
        'Si es para vivienda: Prioriza tus necesidades personales, como cercanía al trabajo y calidad de vida en la región.',
    },
  ],
}

/**
 * @type {BrokerData} The broker data
 */
const brokerData = {
  pt: brokerProfilePT,
  es: brokerProfileES,
}

/**
 * Retrieves the broker profile.
 * @return {BrokerProfile} returns the broker profile info.
 */
export function useBrokerProfile() {
  const {
    i18n: { language },
  } = useTranslation()

  if (brokerData[language].id) {
    return brokerData[language]
  } else {
    return brokerData['pt']
  }
}
