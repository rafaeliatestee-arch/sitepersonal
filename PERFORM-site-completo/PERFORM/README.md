# PERFORM. — Personal Training Experience

Website conceitual premium, desenvolvido conforme o briefing fornecido: React + TypeScript + Vite, Tailwind CSS, GSAP + ScrollTrigger, Lenis, Framer Motion e Lucide Icons.

## Executar

Requer Node.js 20.19+ (ou Node.js 22) e acesso à internet na instalação de dependências.

```bash
npm install
npm run dev
```

Acesse o endereço local exibido no terminal (normalmente `http://localhost:5173`).

Para gerar uma versão de publicação:

```bash
npm run build
npm run preview
```

A pasta final para hospedagem será `dist/`. Também pode importar o projeto em ambientes que aceitam Vite/React, como Lovable, desde que mantenha as dependências.

## Personalização principal

Abra `src/data/site.ts` e edite:

- `trainer.name`, `trainer.bio`, `education`, `certifications`, `registration`, `experience` e `specialties`.
- `contact.whatsapp`: DDI e DDD, somente dígitos. Exemplo ilustrativo: `55` + DDD + celular.
- `contact.instagram`, `email`, `region` e `privacyPolicyUrl`.
- `photos`: URLs das fotografias do profissional, treino, serviços e fundo.
- `methods`, `services` e `testimonials`: textos, opções e depoimentos reais.

**Importante:** fotografias atuais são referências editoriais carregadas do Unsplash por URL externa; substitua por fotos profissionais devidamente autorizadas antes de lançar o site. Nenhuma certificação ou depoimento foi inventado. As estatísticas permanecem omitidas até terem fonte real.

## Como funciona o formulário

O formulário valida nome, telefone, objetivo, modalidade, período e consentimento. Ao confirmar, gera uma mensagem com os dados e abre o WhatsApp. Isso **não envia mensagem automaticamente** e **não confirma agendamento**. Se `contact.whatsapp` estiver vazio, o link abre o compartilhamento do WhatsApp sem destinatário pré-selecionado. Para receber contatos diretamente, configure o número real.

Não há backend ou armazenamento de leads neste exemplo. Para coleta automática, integre um serviço com tratamento correto de privacidade. O texto de privacidade no rodapé é **informativo de demonstração**, não substitui uma política jurídica apropriada. Informe também domínio, região, credenciais verificadas, fotos com autorização e redes sociais antes de publicar.

## Estrutura

- `src/components/` — seções isoladas, navegação e formulário.
- `src/data/site.ts` — configuração editável.
- `src/hooks/useMotion.ts` — parallax, GSAP, Lenis, animações e redução de movimento.
- `src/lib/contact.ts` — mensagem e URL WhatsApp.
- `src/styles.css` — tokens, direção de arte, composição e responsividade.
- `preview.html` — amostra HTML independente (sem build), para visualização rápida.

## SEO e publicação

O projeto inclui metadados básicos e `robots.txt`. A geração de `sitemap.xml`, domínio/canonical, imagens Open Graph, JSON-LD real, analytics com consentimento e política de privacidade definitiva depende dos dados reais do profissional e do domínio de implantação.

## Acessibilidade e animações

Há atalhos para conteúdo, foco visível, navegação por teclado, botão de menu com `aria-expanded`, controles acessíveis de depoimentos, `prefers-reduced-motion`, parallax limitado e layouts próprios para mobile. Teste o site com o conteúdo e as fotos definitivas antes de publicar.
