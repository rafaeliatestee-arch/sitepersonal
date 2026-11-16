/**
 * CONFIGURAÇÃO CENTRAL. Substitua os campos marcados com TODO antes de publicar.
 * A PERFORM. é uma marca conceitual. Não atribuímos credenciais nem depoimentos fictícios.
 */
export const site = {
  brand: 'PERFORM.',
  tagline: 'EVOLUÇÃO NÃO É ACASO. É MÉTODO.',
  trainer: {
    name: 'NOME DO PERSONAL', // TODO: nome real do profissional
    headline: 'Ciência, disciplina e atenção individual.',
    bio: 'Cada pessoa tem um ponto de partida diferente. O acompanhamento começa pela escuta, evolui com planejamento e se adapta à realidade de quem treina.',
    education: '', // TODO: formação real
    certifications: [] as string[], // TODO: credenciais verificadas
    registration: '', // TODO: CREF, se aplicável
    experience: '', // TODO: anos, somente se verificáveis
    specialties: ['Treinamento de força', 'Condicionamento físico', 'Mobilidade e movimento'],
  },
  contact: {
    whatsapp: '', // TODO: número com DDI + DDD, ex.: 5591999999999
    instagram: '', // TODO: URL completa do Instagram
    email: '', // TODO: e-mail de contato
    region: '', // TODO: cidade/região de atendimento
    privacyPolicyUrl: '', // TODO: URL da política de privacidade definitiva
  },
  photos: {
    // Imagens editoriais temporárias externas; substitua pelas imagens reais antes de publicar.
    hero: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=85',
    about: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=85',
    method: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1100&q=85',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1100&q=85',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1100&q=85',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1100&q=85',
    ],
    services: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1100&q=85',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1100&q=85',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1100&q=85',
    ],
    showcase: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=2000&q=85',
  },
  methods: [
    { number: '01', title: 'AVALIAÇÃO', kicker: 'O ponto de partida', description: 'Conhecer seu momento, entender os objetivos e identificar as necessidades individuais.' },
    { number: '02', title: 'PLANEJAMENTO', kicker: 'Estratégia com direção', description: 'Construir uma rotina de treino personalizada e compatível com a sua realidade.' },
    { number: '03', title: 'EXECUÇÃO', kicker: 'A técnica importa', description: 'Orientar os movimentos, acompanhar o desempenho e ajustar a prática durante o processo.' },
    { number: '04', title: 'EVOLUÇÃO', kicker: 'Consistência transforma', description: 'Reavaliar, acompanhar indicadores relevantes e adaptar a estratégia conforme a evolução.' },
  ],
  services: [
    { number: '01', title: 'PERSONAL PRESENCIAL', eyebrow: 'ACOMPANHAMENTO PRÓXIMO', summary: 'Presença, técnica e atenção em cada repetição.', details: ['Acompanhamento individual em sessões presenciais.', 'Ajustes na execução e progressão dos exercícios.', 'Planejamento adaptado a objetivos e rotina.'], cta: 'Conversar sobre presencial' },
    { number: '02', title: 'CONSULTORIA ONLINE', eyebrow: 'ONDE VOCÊ ESTIVER', summary: 'Método e direcionamento também à distância.', details: ['Planejamento remoto individualizado.', 'Orientações de exercícios e organização da rotina.', 'Acompanhamento e ajustes conforme o formato contratado.'], cta: 'Conversar sobre consultoria' },
    { number: '03', title: 'PERFORMANCE PERSONALIZADA', eyebrow: 'ESTRATÉGIA SOB MEDIDA', summary: 'Um treino que acompanha as suas necessidades.', details: ['Estratégias alinhadas a metas específicas.', 'Atenção à individualidade e à evolução.', 'Revisões periódicas conforme necessidades.'], cta: 'Conversar sobre performance' },
  ],
  testimonials: [] as { name: string; text: string; context: string; photo?: string; authorized: boolean }[], // TODO: depoimentos reais autorizados
};
