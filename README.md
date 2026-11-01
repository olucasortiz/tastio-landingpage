# Tastio Catálogo

Vitrine pública de vendas da Tastio (`tastio.com.br`): apresenta a **Tastio Assistência** e o **Tastio Delivery**, com demonstração e contato. É um site estático (Vite + React + `motion`), sem backend e sem banco.

## Rodar

```bash
npm install
npm run dev        # desenvolvimento em http://localhost:5173
npm run build      # gera dist/
npm run preview    # serve o build em http://localhost:4173
```

## Publicar na Vercel

1. Suba esta pasta para um repositório (GitHub).
2. Na Vercel: **Add New → Project**, escolha o repositório. O Vite é detectado sozinho (build `npm run build`, saída `dist`).
3. Em **Settings → Domains**, adicione `tastio.com.br` e `www.tastio.com.br`.
4. Na Cloudflare, aponte o domínio raiz e o `www` para a Vercel com a nuvem **cinza (DNS only)**. Não mexa nos registros `assistencia`, `demoassistencia` e `pedidos`.

A Vercel mostra os valores exatos do DNS na tela de domínios.

## Onde editar

- Textos, contato e links: `src/content.js`.
- Cores, tipografia e layout: `src/styles.css` (tokens no topo).
- Imagens: `public/img/` (capturas reais da demonstração da Assistência, em WebP).

## Pendências de conteúdo

- **Tastio Delivery:** a vitrine usa uma demonstração desenhada, com itens de exemplo, porque ainda não há uma loja de demonstração pública. Quando houver, trocar por capturas reais e linkar em `src/App.jsx`.
- **Cidade e ano** no rodapé (`src/components/Footer.jsx`): confirmar.
- **Termos e privacidade:** o site não coleta dados nem usa cookies (o formulário só abre o WhatsApp). Se passar a usar analytics, incluir aviso.
- **Prévia ao compartilhar (og:image):** em `index.html` aponta para a captura do painel; trocar por uma imagem 1200×630 própria.
