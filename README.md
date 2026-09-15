# Site — IEADAM Novo Israel 3

Site simples em HTML/CSS/JS puro (sem servidor, sem build) pronto para hospedar no GitHub Pages.

## Estrutura

```
site/
├── index.html      → conteúdo do site
├── style.css       → estilo/visual
├── script.js       → menu mobile + botão "copiar" do Pix
├── images/         → fotos (nomes já usados no site)
│   ├── hero-bg.jpg     (foto de fundo do topo)
│   ├── sobre.jpg       (foto da seção "Quem somos")
│   ├── foto1.jpg  ... foto6.jpg   (grade de eventos)
└── videos/
    ├── video1.mp4, video1-poster.jpg
    └── video2.mp4, video2-poster.jpg
```

## Como trocar as fotos e vídeos

Só substitua os arquivos **mantendo exatamente o mesmo nome**. Por exemplo:
para trocar a primeira foto da grade de eventos, apague `images/foto1.jpg`
e coloque sua foto real com o nome `foto1.jpg` na mesma pasta.

Para os vídeos, coloque o arquivo `.mp4` real em `videos/video1.mp4` e
`videos/video2.mp4`. Os arquivos `video1-poster.jpg` / `video2-poster.jpg`
são só a "capa" (thumbnail) mostrada antes de dar play — troque também se
quiser uma capa personalizada.

Quer adicionar mais fotos ou vídeos além desses? Copie um bloco `<div class="media-item">...</div>`
dentro de `index.html` (procure por `<!-- VÍDEO 1 -->` ou os `foto1.jpg`) e
duplique com o novo nome de arquivo.

## Dados já configurados no site

- **Cultos:** terças, quintas e domingos, às 19h
- **Endereço:** Rua dos Profetas, 33 — Bairro Novo Israel (mapa incorporado do Google Maps)
- **Pastores:** Alexandre Santos e Lara Lopes (com link pro Instagram de cada um)
- **Instagram da igreja:** @novoisrael_03
- **Pix:** (92) 9 8599-2115 — Larissa Lopes, via Mercado Pago

Se algum desses dados mudar, é só editar o texto direto no `index.html`
(está tudo em português, fácil de achar com Ctrl+F).

## Como colocar no ar com GitHub Pages

1. Crie um repositório novo no GitHub (ex: `novoisrael3`).
2. Envie todos os arquivos desta pasta (`index.html`, `style.css`, `script.js`,
   `images/`, `videos/`) para a raiz do repositório.
   - Pelo site do GitHub: botão **Add file → Upload files**, arraste tudo e
     clique em **Commit changes**.
3. No repositório, vá em **Settings → Pages**.
4. Em **Branch**, escolha `main` e a pasta `/ (root)`, depois **Save**.
5. Espere 1–2 minutos e o GitHub mostra o link do site, algo como:
   `https://seu-usuario.github.io/novoisrael3/`

Pronto — qualquer alteração futura (trocar foto, mudar horário) é só editar
o arquivo e fazer commit de novo; o site atualiza sozinho em alguns minutos.
