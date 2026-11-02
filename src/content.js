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
      a: "Dá. Peça uma demonstração e mostramos o sistema funcionando. A Assistência também tem uma demonstração aberta, com dados fictícios.",
    },
    {
      tab: "Instalar",
      q: "Preciso instalar alguma coisa?",
      a: "Não. Os sistemas abrem no navegador, no computador ou no celular.",
    },
    {
      tab: "Escolha",
      q: "Posso pedir só um sistema?",
      a: "Pode. Você escolhe a Assistência, o Delivery ou os dois, e a proposta é montada para o que você precisa.",
    },
    {
      tab: "Começar",
      q: "Como eu começo?",
      a: "Peça a demonstração pelo formulário ou pelo WhatsApp. Conversamos sobre o seu negócio e seguimos a conversa por lá.",
    },
  ],
};

export const contact = {
  title: "Peça sua demonstração",
  text: "Conte rápido sobre o seu negócio. A conversa continua no WhatsApp.",
};

// Catálogo clicável: cada sistema abre em etapas. `img` ou `dl` apontam a tela de cada etapa.

// Sistemas à venda. `video` é o vídeo de funcionamento; `steps` alimentam a visita guiada do painel.
export const systems = [
  {
    id: "assistencia",
    name: "Tastio Assistência Técnica",
    short: "Assistência técnica",
    tagline: "Ordem de serviço, orçamento aprovado pelo cliente e caixa da loja.",
    what: "Para assistências técnicas. Abra a ordem de serviço no balcão, imprima a folha de entrada e deixe o cliente aprovar o orçamento pelo celular.",
    field: "coral",
    // Vídeo de funcionamento: coloque o arquivo em public/video/ e troque null pelo caminho.
    video: null, // ex.: "/video/assistencia.mp4"
    plan: { name: "Plano sob medida", text: "O valor depende do tamanho da operação. Peça a proposta no WhatsApp." },
    features: [
      "Ordem de serviço com protocolo e folha de entrada para imprimir",
      "Orçamento com mensagem de WhatsApp pronta para enviar",
      "Cliente aprova ou recusa cada item pelo link",
      "Etapas do aparelho, do balcão até a retirada",
      "A receber, despesas e lucro do mês no painel",
      "Perfis de dono, balcão e técnico",
    ],
    steps: [
      { name: "Abre a ordem no balcão", text: "Cliente, aparelho e defeito em uma tela só. O sistema gera o protocolo e a folha de entrada para imprimir.", img: "/img/assistencia-nova.webp", alt: "Tela Nova OS com cliente, aparelho e defeito." },
      { name: "Envia o orçamento", text: "O orçamento sai com a mensagem de WhatsApp pronta. Você envia com um toque.", img: "/img/assistencia-detalhe.webp", alt: "Ordem de serviço com orçamento e etapas." },
      { name: "O cliente responde", text: "Ele abre o link no celular, vê a etapa do aparelho e aprova ou recusa cada item.", img: "/img/assistencia-cliente.webp", alt: "Página do cliente com orçamento e botões Aprovar e Recusar.", portrait: true },
      { name: "Acompanha até a retirada", text: "A lista mostra a situação de cada aparelho, do balcão até o cliente buscar.", img: "/img/assistencia-ordens.webp", alt: "Lista de ordens de serviço." },
      { name: "Fecha o caixa", text: "A receber, despesas e lucro do mês aparecem no painel do dono.", img: "/img/assistencia-painel.webp", alt: "Painel do dono com lucro, caixa e gráficos." },
    ],
    actions: [
      { label: "Abrir a demonstração", href: DEMO_ASSISTENCIA, primary: true },
      { label: "Falar no WhatsApp", href: WA_DEMO },
    ],
  },
  {
    id: "delivery",
    name: "Tastio Delivery",
    short: "Delivery",
    tagline: "Cardápio digital no celular, com sacola e envio do pedido.",
    what: "Para quem vende por pedido. O cliente abre o cardápio da loja no celular, busca o que quer, monta a sacola e envia o pedido.",
    field: "sage",
    video: null, // ex.: "/video/delivery.mp4"
    plan: { name: "Plano sob medida", text: "O valor depende do tamanho da operação. Peça a proposta no WhatsApp." },
    features: [
      "Cardápio digital da loja, feito para o celular",
      "Busca dentro do cardápio",
      "Sacola e envio do pedido",
      "Link da loja para compartilhar",
      "Modo claro e modo escuro",
    ],
    steps: [
      { name: "A loja monta o cardápio", text: "Itens, descrições e preços em um cardápio feito para o celular.", dl: 0 },
      { name: "O cliente abre o link", text: "Sem baixar nada. Ele busca o que quer dentro do cardápio, no modo claro ou escuro.", dl: 0 },
      { name: "Monta a sacola", text: "Cada item entra na sacola com o total somado na hora.", dl: 1 },
      { name: "Envia o pedido", text: "O pedido chega à loja e o cliente vê a confirmação.", dl: 2 },
    ],
    actions: [{ label: "Falar no WhatsApp", href: WA_DEMO, primary: true }],
  },
  {
    id: "mais",
    name: "Mais sistemas a caminho",
    short: "E mais a caminho",
    tagline: "A Tastio segue criando sistemas para o balcão e para o pedido.",
    what: "Conte o que falta no seu negócio. Dizemos se já existe um sistema para isso ou se vale criar um.",
    field: "ink",
    plan: { name: "Sob consulta", text: "Cada sistema novo tem proposta própria. Chame no WhatsApp." },
    features: ["Você descreve como o negócio funciona hoje", "A gente responde se já existe ou se dá para criar"],
    steps: [
      { name: "Você conta o que falta", text: "Descreva como o seu negócio funciona hoje: no caderno, na planilha ou no WhatsApp." },
      { name: "A gente responde", text: "Dizemos se já existe um sistema para isso ou se vale criar um." },
    ],
    actions: [{ label: "Falar no WhatsApp", href: WA_DEMO, primary: true }],
  },
];
