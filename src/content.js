export const WHATS = "5518996992139";
export const WHATS_LABEL = "(18) 99699-2139";
export const EMAIL = "lucassas@outlook.com";
export const DEMO_ASSISTENCIA = "https://demoassistencia.tastio.com.br";

export const waLink = (text) =>
  `https://wa.me/${WHATS}?text=${encodeURIComponent(text)}`;

export const WA_DEMO = waLink(
  "Olá! Vim pelo site da Tastio e quero ver uma demonstração."
);

export const nav = [
  { href: "#sistemas", label: "Sistemas" },
  { href: "#como", label: "Como pedir" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export const heroSlides = [
  {
    src: "/img/assistencia-cliente.webp",
    alt: "Tela que o cliente abre no celular: orçamento aguardando aprovação, com botões para aprovar ou recusar cada item.",
    pos: "50% 0%",
  },
  {
    src: "/img/assistencia-ordens.webp",
    alt: "Lista de ordens de serviço da Tastio Assistência, com protocolo, cliente, aparelho e situação.",
    pos: "0% 0%",
  },
  {
    src: "/img/assistencia-painel.webp",
    alt: "Painel do dono da Tastio Assistência, com lucro do mês, caixa, valores a receber e gráficos.",
    pos: "30% 0%",
  },
];

export const tagline = {
  title: "Para quem atende no balcão",
  text: "Cada aparelho no lugar. Cada orçamento respondido. Cada cliente sabendo em que pé está.",
};

export const compare = {
  title: "Sem perguntar duas vezes",
  text: "Hoje o cliente liga ou volta ao balcão só para saber do aparelho. Com a Tastio ele abre um link no celular e vê a etapa atual, o orçamento e o que falta. A equipe atende em vez de procurar caderno.",
  before: { word: "Cadê?", caption: "O que o cliente pergunta hoje" },
  after: { word: "Aqui.", caption: "O que o link responde" },
};

export const assistencia = {
  id: "assistencia",
  title: "Tastio Assistência",
  text: "Para assistências técnicas. Abra a ordem de serviço no balcão, imprima a folha de entrada e deixe o cliente aprovar o orçamento pelo celular.",
  ingredients: [
    "Ordem de serviço com protocolo e folha de entrada para imprimir",
    "Orçamento com mensagem de WhatsApp pronta para enviar",
    "Cliente aprova ou recusa cada item pelo link",
    "Etapas do aparelho, do balcão até a retirada",
    "A receber, despesas e lucro do mês no painel",
    "Perfis de dono, balcão e técnico",
  ],
  tabs: [
    {
      id: "painel",
      label: "Painel do dono",
      src: "/img/assistencia-painel.webp",
      alt: "Painel do dono: lucro do mês, caixa, a receber, em atraso e gráfico de recebido e despesas por mês.",
    },
    {
      id: "ordens",
      label: "Lista de ordens",
      src: "/img/assistencia-ordens.webp",
      alt: "Lista de ordens de serviço com protocolo, cliente, aparelho, situação e entrada.",
    },
    {
      id: "detalhe",
      label: "Uma ordem por dentro",
      src: "/img/assistencia-detalhe.webp",
      alt: "Detalhe de uma ordem de serviço: seis etapas do aparelho, orçamento aprovado, pagamentos e histórico.",
    },
    {
      id: "receber",
      label: "A receber",
      src: "/img/assistencia-receber.webp",
      alt: "Tela A receber: total em aberto e, por ordem, o valor aprovado, o pago e o que falta.",
    },
    {
      id: "cliente",
      label: "O que o cliente vê",
      src: "/img/assistencia-cliente.webp",
      alt: "Página do cliente no celular: etapa 3 de 6, defeito informado e orçamento com botões Aprovar e Recusar.",
      portrait: true,
    },
  ],
};

export const strip = [
  { src: "/img/assistencia-nova.webp", alt: "Tela Nova OS: cliente, aparelho e defeito em uma tela só, com as políticas da loja ao lado.", w: 1920, h: 1200 },
  { src: "/img/assistencia-receber.webp", alt: "Tela A receber, com o total em aberto e as ordens com valor pendente.", w: 1920, h: 1200 },
  { src: "/img/assistencia-detalhe.webp", alt: "Uma ordem de serviço por dentro, com etapas, orçamento e histórico.", w: 1920, h: 1200 },
  { src: "/img/assistencia-ordens.webp", alt: "Lista de ordens de serviço.", w: 1920, h: 1200 },
  { src: "/img/assistencia-painel.webp", alt: "Painel do dono com lucro, caixa e gráficos.", w: 1920, h: 1200 },
];

export const delivery = {
  id: "delivery",
  title: "Tastio Delivery",
  text: "Para quem vende por pedido. O cliente abre o cardápio da loja no celular, busca o que quer, monta a sacola e envia o pedido.",
  ingredients: [
    "Cardápio digital da loja, feito para o celular",
    "Busca dentro do cardápio",
    "Sacola e envio do pedido",
    "Link da loja para compartilhar",
    "Modo claro e modo escuro",
  ],
  tabs: [
    { id: "cardapio", label: "Cardápio" },
    { id: "sacola", label: "Sacola" },
    { id: "pedido", label: "Pedido enviado" },
  ],
};

export const steps = {
  title: "Como pedir",
  text: "Do primeiro contato ao primeiro cliente atendido, em quatro passos.",
  items: [
    {
      name: "Você chama",
      text: "Mande uma mensagem pelo WhatsApp. Respondemos com uma demonstração e a proposta.",
    },
    {
      name: "Montamos sua loja",
      text: "Criamos o acesso da sua loja, com nome, usuários e uma senha provisória para cada pessoa.",
    },
    {
      name: "Sua equipe começa",
      text: "Dono, balcão e técnico entram pelo navegador, sem instalar nada.",
      img: { src: "/img/assistencia-ordens.webp", alt: "Lista de ordens de serviço da Assistência." },
    },
    {
      name: "O cliente acompanha",
      text: "Cada cliente recebe o link e vê a etapa do aparelho pelo celular.",
      img: { src: "/img/assistencia-cliente.webp", alt: "Página do cliente no celular, com a etapa do aparelho e o orçamento.", portrait: true },
    },
  ],
};

export const faq = {
  title: "Dúvidas frequentes",
  items: [
    {
      tab: "Preço",
      q: "Quanto custa?",
      a: "O valor depende do tamanho da operação. Chame no WhatsApp e respondemos com uma proposta.",
    },
    {
      tab: "Teste",
      q: "Dá para testar antes?",
      a: "Dá. A Assistência tem uma demonstração aberta, com dados fictícios, que volta ao estado original toda noite.",
    },
    {
      tab: "Celular",
      q: "Funciona no celular?",
      a: "Sim. A equipe usa pelo navegador, sem instalar nada, e a página do cliente é feita primeiro para o celular.",
    },
    {
      tab: "WhatsApp",
      q: "O sistema manda mensagem sozinho?",
      a: "Ainda não. Ele monta a mensagem com o orçamento e o link, e você envia com um toque.",
    },
    {
      tab: "Equipe",
      q: "Cada pessoa vê tudo?",
      a: "Não. Dono, balcão e técnico entram com perfis diferentes, cada um com o que precisa para o trabalho.",
    },
  ],
};

export const contact = {
  title: "Peça sua demonstração",
  text: "Conte rápido sobre o seu negócio. A conversa continua no WhatsApp.",
};
