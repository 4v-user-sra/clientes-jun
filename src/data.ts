import { ClientData } from './types';

export const clients: ClientData[] = [
  {
    id: 'mansao-marion',
    name: 'Mansão Marion',
    status: 'action-required',
    metrics: [
      { label: 'Leads (3 dias)', value: '174' },
      { label: 'CPL', value: 'R$ 6.00 a R$ 8.00' }
    ],
    currentSituation: 'Alta geração de leads qualificados, porém a equipe comercial está copiando e colando a mesma mensagem (identificado em 30 de 170 cartas analisadas).',
    attentionPoints: [
      'Atendimento comercial padronizado ("copia e cola")',
      'Falta de compromisso no fechamento de visitas por consequência da abordagem'
    ],
    actionPlan: [
      'Gilmara alinhar táticas e práticas reportadas com o time comercial'
    ],
    observations: 'O problema central não é o tráfego ou qualificação, mas sim a abordagem e o atendimento do time comercial que prejudicam a conversão final.'
  },
  {
    id: 'capitao-sushi',
    name: 'Capitão Sushi',
    status: 'warning',
    metrics: [
      { label: 'Vendas do dia 1 a 3 de junho', value: 'R$ 1.300' },
      { label: 'ROAS', value: '21x' },
      { label: 'Custo por Compra', value: 'R$ 6,19' }
    ],
    currentSituation: 'Resultados excelentes de captação e vendas. Ticket médio estável em R$ 75,96. No entanto, há um distanciamento relacional com o stakeholder principal do projeto.',
    attentionPoints: [
      'Distanciamento do stakeholder sobre as ações do projeto',
      'Comunicação de cobranças concentrada no influenciador em vez do decisor'
    ],
    actionPlan: [
      'Avaliar as cobranças com o influenciador, pois ainda há ações que requerem a atenção direta do stakeholder e não podem ser delegadas ao influenciador'
    ],
    observations: 'A performance de tráfego e de compras está excepcional. Ação focada predominantemente em ajuste e gestão de relacionamento do cliente.'
  },
  {
    id: 'sabor-do-arabe',
    name: 'Sabor do Árabe',
    status: 'warning',
    metrics: [
      { label: 'Custo por Compra', value: 'R$ 50' },
      { label: 'Ticket Médio', value: 'R$ 62' },
      { label: 'Compras (3 dias)', value: '4' }
    ],
    currentSituation: 'Performance melhorando sensivelmente com o novo trackeamento e o cardápio V4 Food. O CPA caiu de R$ 1.500 para R$ 50, com o volume de compras retendo uma melhora estrutural (4 compras em 3 dias).',
    attentionPoints: [
      'O cardápio atual ainda é o ofensor e principal gargalo de performance',
      'Necessidade de contato com o filmmaker para captação de novos criativos'
    ],
    actionPlan: [
      'Acompanhar tração de performance do cardápio rigorosamente por mais 14 dias',
      'Criar campanhas focadas para a Copa do Mundo, Dia dos Namorados e testes A/B',
      'Se o resultado não escalar, aprovar a troca para o formato "Cardápio Web" no dia 19, implementando no dia 22'
    ],
    observations: 'O problema identificado não está no tráfego, criativos, ou marca, mas exclusivamente na estrutura do cardápio impactando a taxa de conversão direta.'
  },
  {
    id: 'de-fornao',
    name: 'De Fornão',
    status: 'action-required',
    metrics: [
      { label: 'Foco Imediato', value: 'Salão Físico' }
    ],
    currentSituation: 'Cliente relatou insatisfação com os resultados de delivery. As campanhas promocionais de eventos estão paradas por falta de aprovações. O filmmaker não possui liberação do stakeholder para iniciar a gravação.',
    attentionPoints: [
      'Lentidão e ausência de retorno de Fernando (Stakeholder) para aprovar os roteiros criativos e gravações',
      'O stakeholder quer ver resultados de tração concentrados imediatamente no salão físico'
    ],
    actionPlan: [
      'Adaptar todos os criativos antigos de "Delivery" alertando a comunicação para formato "Visita / Consumo no Salão"',
      'Rodar campanhas para Copa do Mundo e Dia dos Namorados focando no tráfego de visita ao local'
    ],
    observations: 'Operando neste momento sob ações resolutivas paliativas para garantir um fluxo rápido gerando movimento físico, até que a burocracia de validações de projeto se destrave.'
  },
  {
    id: 'bela-dona',
    name: 'Bela Dona',
    status: 'stable',
    metrics: [
      { label: 'Saúde do Projeto', value: 'Operante' }
    ],
    currentSituation: 'Operação rodando conforme planejado com estabilidade visualizada nas métricas diretas. O relacionamento do projeto e do stakeholder está distante, mas é coerente com o padrão e histórico habitual.',
    attentionPoints: [],
    actionPlan: [
      'Manter o acompanhamento padrão e vigilância operacional nas métricas macro'
    ],
    observations: 'Nenhuma correção ou ação de emergência visualizada neste panorama.'
  },
  {
    id: 'ecto-grupo',
    name: 'Écto Grupo',
    status: 'new',
    metrics: [
      { label: 'Fase do Projeto', value: 'Setup Inicial' }
    ],
    currentSituation: 'Estruturação embrionária. O projeto aguarda ativações elementares e envio dos artefatos de "copy" para finalmente iniciar a vinculação de tráfego.',
    attentionPoints: [
      'Falta de captações de vídeos atualizados no estágio atual para garantir entrega máxima e maturidade nas campanhas'
    ],
    actionPlan: [
      'Enviar textos / copys iniciais',
      'Agendar e concretizar o Check-in na próxima sexta-feira',
      'Veicular as campanhas com criativos estáticos limitados até as peças e filmagens de melhor qualificação chegarem à equipe de edição'
    ],
    observations: 'Perspectiva de crescimento na qualificação orgânica quando a injeção audiovisual for destravada e anexada às campanhas base.'
  }
];
