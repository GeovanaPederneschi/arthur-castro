# Site — Advocacia Tributária

Landing page + blog jurídico, construído em [Next.js](https://nextjs.org) (App Router + TypeScript + Tailwind CSS v4), pronto para deploy na [Vercel](https://vercel.com).

## O que tem aqui

- **Landing page** (`/`): hero, áreas de atuação, sobre, como funciona, FAQ, chamada do blog e seção de contato.
- **Botão flutuante de WhatsApp** em todas as páginas.
- **Formulário de contato** que monta a mensagem e abre o WhatsApp automaticamente.
- **Blog** (`/blog`) com um primeiro artigo otimizado para SEO: `/blog/problemas-tributarios-comuns` — "7 problemas tributários mais comuns (e como resolver cada um)".
- **SEO técnico**: metatags (title/description/OG/Twitter), `sitemap.xml` e `robots.txt` gerados automaticamente, dados estruturados (JSON-LD) para `Attorney`, `FAQPage`, `Article` e `BreadcrumbList`, e imagem de Open Graph gerada dinamicamente.

## Antes de publicar: personalize os dados

Todos os dados de contato, nome, telefone e domínio ficam centralizados em um único arquivo:

```
src/lib/site-config.ts
```

Troque os valores marcados com `TODO`:

- `lawyerName`, `oab` — nome completo e número da OAB.
- `url` — domínio final do site (depois de configurar na Vercel).
- `phoneDisplay`, `phoneE164`, `whatsappNumber`, `email` — dados de contato reais. O `whatsappNumber` deve ter só dígitos, no formato DDI+DDD+número (ex.: `5511987654321`).
- `city`, `state`, `addressLocality`, `addressRegion` — cidade/UF de atuação (importante para SEO local).
- `instagram`, `linkedin` — opcional.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Deploy na Vercel

1. Suba este repositório para o GitHub (ou GitLab/Bitbucket).
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório — a Vercel detecta o Next.js automaticamente, sem configuração adicional.
3. Depois do primeiro deploy, configure seu domínio próprio em **Project Settings → Domains** e atualize o campo `url` em `src/lib/site-config.ts` para esse domínio (isso ajusta o sitemap, o canonical e os dados estruturados).

## Adicionando novos posts no blog

1. Adicione uma entrada em `src/lib/blog-data.ts` (slug, título, resumo, data).
2. Crie a pasta `src/app/blog/<slug>/page.tsx` com o conteúdo do artigo (use `src/app/blog/problemas-tributarios-comuns/page.tsx` como modelo).
3. O novo post aparece automaticamente na listagem (`/blog`), na chamada da home e no `sitemap.xml`.

## Próximos passos recomendados para SEO

- Cadastrar o site no [Google Search Console](https://search.google.com/search-console) e enviar o `sitemap.xml`.
- Criar/otimizar o perfil no **Google Business Profile** com o mesmo nome, endereço e telefone (NAP) usados no site.
- Publicar novos posts no blog regularmente, focando em perguntas reais de clientes.
- Trocar os textos de exemplo por depoimentos e casos reais (sempre respeitando as normas de publicidade da OAB — Provimento 205/2021).
