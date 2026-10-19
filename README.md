# Cláudia Cordeiro — Estética & Cosmética | Premium Concept

Projeto demonstrativo React + Vite inspirado na **primeira referência visual premium**. Não utiliza o print do pôster como elemento do site. Logo SVG **aproximada/provisória**, baseada na referência enviada, sujeita à aprovação.

## Iniciar

```bash
npm install
npm run dev
```

## Publicar no Netlify

Build: `npm run build` | Pasta: `dist`. `netlify.toml` incluído.

## Personalizar

- `src/config.js`: canais, WhatsApp oficial, serviços e localização.
- `src/main.jsx`: textos, cartões, navegação e seções.
- `src/style.css`: design responsivo.
- `public/images/logo-vetorial-provisorio.svg`: marca demonstrativa.

**Importante:** As fotos carregadas de Unsplash são ilustrativas, não são fotos da clínica nem dos pacientes. Não publicar como site oficial sem licenças/autorização, aprovação dos textos e confirmação de serviços, WhatsApp, endereço e marca. Na ausência de WhatsApp verificado, os CTAs direcionam ao Linktree informado pelo usuário. O mapa mostra apenas o centro de Eusébio.


## Atualização v2 — Instagram e Quem Somos
- Instagram adicionado à navegação, ao topo (desktop), à primeira tela, à seção Quem Somos, à seção social e a um botão flutuante sempre visível. Link configurado em `src/config.js`.
- A seção `Quem Somos` agora reserva um retrato vertical da Cláudia, com texto provisório sem inventar formação ou trajetória.
- Para mostrar a foto verdadeira, salve uma imagem **autorizada** como `public/images/claudia-retrato.jpg`. Até lá, o site mostra um espaço elegante para a foto, sem usar print de pôster ou imagem de outra pessoa.
- Os botões de WhatsApp continuam abrindo o Linktree até validar o número oficial em `src/config.js`.
