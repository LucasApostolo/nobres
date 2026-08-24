export interface RegionCoverage {
  id: string;
  name: string;
  badge: string;
  cutoffTime: string;
  averageTime: string;
  neighborhoods: string[];
  status: 'Ativo' | 'Alta Demanda';
}

export interface ServiceCardItem {
  id: string;
  iconName: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  highlight: string;
  popular?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  storeName: string;
  badge: string;
  category: string;
  avatar: string;
  rating: number;
  salesIncrease: string;
  comment: string;
  deliveryVolume: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface Marketplace {
  name: string;
  tag: string;
  iconColor: string;
  description: string;
  badge: string;
  logo: string;
}

export const MARKETPLACES: Marketplace[] = [
  {
    name: 'Mercado Livre Flex',
    tag: 'Mercado Envios Flex',
    iconColor: '#FFE600',
    description: 'Entrega no mesmo dia com reputação verde blindada',
    badge: '100% Homologado',
    logo: 'https://cdn.simpleicons.org/mercadolibre/FFE600'
  },
  {
    name: 'Shopee Direta & Flex',
    tag: 'Shopee Same Day',
    iconColor: '#EE4D2D',
    description: 'Cumprimento rigoroso da janela de envio',
    badge: 'Vendedor Indicado',
    logo: 'https://cdn.simpleicons.org/shopee/EE4D2D'
  },
  {
    name: 'Amazon Flex',
    tag: 'Amazon Prime Same Day',
    iconColor: '#FF9900',
    description: 'Agilidade máxima nos envios prioritários SP',
    badge: 'Padrão Prime',
    logo: 'https://cdn.simpleicons.org/amazon/FF9900'
  },
  {
    name: 'Magalu Entregas',
    tag: 'Magalu Same Day',
    iconColor: '#0086FF',
    description: 'Retiradas pontuais e baixa imediata de pacotes',
    badge: 'Alta Performance',
    logo: 'https://cdn.simpleicons.org/magalu/0086FF'
  },
  {
    name: 'E-commerce Próprio & Shopify',
    tag: 'Direct-to-Consumer',
    iconColor: '#00e7fe',
    description: 'Same Day Delivery para sua loja virtual ou WhatsApp',
    badge: 'VIP Express',
    logo: 'https://cdn.simpleicons.org/shopify/00e7fe'
  }
];

export const SP_REGIONS: RegionCoverage[] = [
  {
    id: 'zl',
    name: 'Zona Leste de São Paulo',
    badge: 'Cobertura 100% Flex',
    cutoffTime: 'Até 14h30',
    averageTime: 'Mesmo Dia até 21h',
    status: 'Ativo',
    neighborhoods: [
      'Tatuapé', 'Mooca', 'Anália Franco', 'Itaquera', 'Penha', 
      'Vila Prudente', 'São Mateus', 'Vila Formosa', 'Belém', 
      'Aricanduva', 'Vila Matilde', 'Carrão', 'Ponte Rasa', 'Ermelino Matarazzo'
    ]
  },
  {
    id: 'zs',
    name: 'Zona Sul de São Paulo',
    badge: 'Cobertura 100% Flex',
    cutoffTime: 'Até 14h30',
    averageTime: 'Mesmo Dia até 21h',
    status: 'Ativo',
    neighborhoods: [
      'Santo Amaro', 'Moema', 'Morumbi', 'Vila Mariana', 'Brooklin', 
      'Itaim Bibi', 'Campo Belo', 'Interlagos', 'Saúde', 'Jabaquara', 
      'Socorro', 'Cidade Dutra', 'Chácara Santo Antônio', 'Vila Olímpia'
    ]
  },
  {
    id: 'zo',
    name: 'Zona Oeste de São Paulo',
    badge: 'Cobertura 100% Flex',
    cutoffTime: 'Até 14h30',
    averageTime: 'Mesmo Dia até 21h',
    status: 'Ativo',
    neighborhoods: [
      'Pinheiros', 'Lapa', 'Perdizes', 'Butantã', 'Vila Leopoldina', 
      'Vila Madalena', 'Barra Funda', 'Jaguaré', 'Rio Pequeno', 
      'Pompéia', 'Alto de Pinheiros', 'Vila Sônia'
    ]
  },
  {
    id: 'zn',
    name: 'Zona Norte de São Paulo',
    badge: 'Cobertura 100% Flex',
    cutoffTime: 'Até 14h00',
    averageTime: 'Mesmo Dia até 21h',
    status: 'Ativo',
    neighborhoods: [
      'Santana', 'Tucuruvi', 'Casa Verde', 'Freguesia do Ó', 'Vila Maria', 
      'Vila Guilherme', 'Limão', 'Mandaqui', 'Jaçanã', 'Tremembé', 'Brasilândia'
    ]
  },
  {
    id: 'centro',
    name: 'Centro Expandido & Polos Comerciais',
    badge: 'Alta Densidade',
    cutoffTime: 'Até 15h00',
    averageTime: 'Mesmo Dia até 20h',
    status: 'Ativo',
    neighborhoods: [
      'Brás', 'Bom Retiro', 'República', 'Bela Vista', 'Consolação', 
      'Santa Cecília', 'Sé', 'Pari', 'Cambuci', 'Liberdade', 'Aclimação'
    ]
  },
  {
    id: 'abc',
    name: 'Grande ABC Paulista',
    badge: 'Rota Rápida Integrada',
    cutoffTime: 'Até 13h30',
    averageTime: 'Mesmo Dia até 22h',
    status: 'Alta Demanda',
    neighborhoods: [
      'Santo André (Todos os bairros)', 
      'São Bernardo do Campo (Centro, Rudge Ramos, Pauliceia, etc)', 
      'São Caetano do Sul (100% coberto)', 
      'Diadema (Polos industriais e comerciais)',
      'Mauá (Centros comerciais)'
    ]
  },
  {
    id: 'grande-sp',
    name: 'Região Metropolitana e Eixo Oeste',
    badge: 'Polos Logísticos',
    cutoffTime: 'Até 13h30',
    averageTime: 'Mesmo Dia até 22h',
    status: 'Ativo',
    neighborhoods: [
      'Guarulhos (Aeroporto, Centro, Cumbica)', 
      'Osasco (Centro, Rochdale, Industrial)', 
      'Barueri & Alphaville', 
      'Taboão da Serra', 
      'Carapicuíba',
      'Santana de Parnaíba'
    ]
  }
];

export const SERVICES_DATA: ServiceCardItem[] = [
  {
    id: 'coleta-dedicada',
    iconName: 'Truck',
    title: 'Coleta Diária Dedicada no Seu Endereço',
    tagline: 'Sua equipe não precisa sair da loja ou galpão',
    description: 'Motorista fixo ou de rota recolhe seus pacotes diariamente na janela acordada, com conferência imediata e bipagem rápida no seu estoque.',
    features: [
      'Janela de coleta pré-agendada e rigorosamente pontual',
      'Bipagem e conferência item a item na retirada',
      'Sem exigência de volume mínimo abusivo',
      'Suporte para pacotes pequenos, médios e caixas volumosas'
    ],
    highlight: 'Retiradas de Seg a Sábado'
  },
  {
    id: 'flex-marketplaces',
    iconName: 'Zap',
    title: 'Envios Flex Mercado Livre & Shopee',
    tagline: 'Cumprimento total das janelas de Same Day',
    description: 'Roteirização inteligente com motoristas setorizados por micro-regiões para garantir que 100% dos pacotes sejam entregues no mesmo dia.',
    features: [
      'Rotas otimizadas por inteligência geo-espacial',
      'Baixa imediata no aplicativo do marketplace',
      'Fotos comprovatórias e geolocalização da entrega',
      'Taxa de sucesso de primeira tentativa superior a 98.7%'
    ],
    highlight: 'SLA 99.4% Pontualidade',
    popular: true
  },
  {
    id: 'reputacao-shield',
    iconName: 'ShieldCheck',
    title: 'Blindagem Total de Reputação do Seller',
    tagline: 'Seu termômetro verde sempre intacto',
    description: 'Protocolo de tolerância zero para atrasos. Monitoramos cada pacote em tempo real e acionamos contingências imediatas se houver qualquer imprevisto.',
    features: [
      'Proteção das medalhas Mercado Líder Gold e Platinum',
      'Gestor de conta dedicado no WhatsApp em tempo real',
      'Tratamento ágil de destinatário ausente com 2ª tentativa',
      'Indenização rápida e transparente contra extravios'
    ],
    highlight: 'Zero Reclamações de Atraso'
  },
  {
    id: 'express-urgente',
    iconName: 'Clock',
    title: 'Entregas Express & Cargas Urgentes',
    tagline: 'Para pedidos VIP que precisam chegar em horas',
    description: 'Solução sob demanda para e-commerces que vendem pelo WhatsApp, Instagram ou site próprio com promessa de entrega em até 3 horas.',
    features: [
      'Veículos dedicados (motos, fiorinos e vans)',
      'Rastreamento ao vivo compartilhável com o cliente final',
      'Atendimento prioritário de ponta a ponta',
      'Assinatura digital e foto do documento do recebedor'
    ],
    highlight: 'Entrega Flash em SP'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Rodrigo Mendonça',
    storeName: 'TechExpress Eletrônicos',
    badge: 'Mercado Líder Platinum',
    category: 'Eletrônicos & Acessórios',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    salesIncrease: '+48% de Faturamento',
    deliveryVolume: '~180 pacotes/dia no Flex',
    comment: 'Estávamos perdendo a medalha Platinum porque a transportadora antiga atrasava coletas e sumia com pacotes. Desde que migramos para a Nobres Entregas, nosso SLA está em 99.7%. O suporte no WhatsApp responde em segundos!'
  },
  {
    id: '2',
    name: 'Carla Silveira',
    storeName: 'Bella Modas & Shoes SP',
    badge: 'Vendedora Indicada Shopee',
    category: 'Moda Feminina & Calçados',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    salesIncrease: '+35% de Conversão',
    deliveryVolume: '~120 pacotes/dia',
    comment: 'O grande diferencial é a pontualidade na coleta da nossa confecção no Brás. O motorista chega no mesmo horário todos os dias e até 20h todas as clientes já estão recebendo as compras. Minhas avaliações subiram de 4.6 para 4.9!'
  },
  {
    id: '3',
    name: 'Felipe Albuquerque',
    storeName: 'AutoParts Prime SP',
    badge: 'Mercado Líder Gold',
    category: 'Autopeças & Ferramentas',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    salesIncrease: '+55% no Same Day',
    deliveryVolume: '~210 pacotes/dia',
    comment: 'Peça de carro quem compra quer para hoje. A Nobres Entregas nos deu a segurança de estender o horário de corte até 14h30. Nossas vendas de última hora explodiram e nunca mais tivemos reclamação de atraso.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Qual é o horário limite (cut-off) para postagem no mesmo dia?',
    answer: 'Atendemos horários de corte estendidos, normalmente entre 14h00 e 15h00 (a depender da sua localização em São Paulo). Isso permite que você receba pedidos até o início da tarde e ainda entregue no mesmo dia, aumentando drasticamente suas conversões.',
    category: 'Operação'
  },
  {
    question: 'Existe quantidade mínima de pacotes para coleta diária?',
    answer: 'Não! Entendemos a jornada do seller. Atendemos desde lojas em crescimento (com 3 a 10 pacotes por dia) até grandes operações com centenas de envios diários. Nosso objetivo é ajudar sua loja a escalar.',
    category: 'Contratação'
  },
  {
    question: 'Como funciona a proteção da reputação no Mercado Livre e Shopee?',
    answer: 'Possuímos rotas setorizadas e contingência de motoristas. Se um entregador enfrentar trânsito atípico, redirecionamos a rota imediatamente. Todos os pacotes são bipados e baixados dentro do prazo do marketplace, mantendo seu termômetro 100% verde.',
    category: 'Reputação'
  },
  {
    question: 'O que acontece se o cliente final estiver ausente no momento da entrega?',
    answer: 'Nosso motorista entra em contato diretamente com o destinatário via WhatsApp ou ligação e tenta entregar com vizinhos ou portaria autorizada. Caso realmente não seja possível, o pacote retorna seguro e é reprogramado com comunicação em tempo real com você.',
    category: 'Entregas'
  },
  {
    question: 'Vocês realizam coletas aos sábados e feriados?',
    answer: 'Sim! Operamos de segunda a sábado com coletas e entregas normais para garantir que sua loja continue faturando com o Flex no final de semana, quando a concorrência costuma desligar os anúncios.',
    category: 'Operação'
  },
  {
    question: 'Como faço para iniciar as coletas na minha loja?',
    answer: 'O processo é imediato! Basta clicar no botão de WhatsApp, nos informar o endereço da sua loja e a média de pacotes diários. Alinhamos o horário de coleta e sua operação já pode começar no mesmo dia ou no próximo dia útil.',
    category: 'Início'
  }
];

export const COMPARISON_DATA = [
  {
    feature: 'Horário de Coleta Diária',
    commonCarrier: 'Incerto e imprevisível (muitas vezes atrasa ou fura)',
    nobresCarrier: 'Janela fixa garantida todos os dias com motorista dedicado',
    status: 'win'
  },
  {
    feature: 'Horário de Corte (Cut-off)',
    commonCarrier: 'Cedo (11h às 12h), fazendo você perder vendas da tarde',
    nobresCarrier: 'Estendido (até 14h30/15h00) para maximizar suas vendas',
    status: 'win'
  },
  {
    feature: 'Reputação nos Marketplaces',
    commonCarrier: 'Atrasos frequentes que rebaixam a conta para termômetro amarelo',
    nobresCarrier: 'SLA 99.4% que blinda e mantém sua medalha Líder/Platinum',
    status: 'win'
  },
  {
    feature: 'Suporte & Comunicação',
    commonCarrier: 'Tickets lentos, robôs genéricos e dias sem resposta',
    nobresCarrier: 'Grupo VIP no WhatsApp com gestor de conta ativo (< 3 min)',
    status: 'win'
  },
  {
    feature: 'Tratativa de Insucesso/Ausente',
    commonCarrier: 'Pacote devolvido sem aviso ou perdido na base',
    nobresCarrier: 'Tentativa de contato imediato na porta e reentrega ágil',
    status: 'win'
  },
  {
    feature: 'Operação aos Sábados',
    commonCarrier: 'Geralmente não coletam ou cobram taxas abusivas',
    nobresCarrier: 'Coleta e entrega ativas aos sábados para turbinar o faturamento',
    status: 'win'
  }
];
