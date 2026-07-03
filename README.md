# Sito web — Voice Generator TTS

Sito statico pronto per **GitHub Pages**

## Struttura

```
Site/
├── index.html          Pagina principale (EN di default, IT dal pulsante in alto a destra)
├── privacy.html        Privacy Policy — DA COMPILARE (segnaposto EN + IT)
├── README.md           Questo file (non serve caricarlo, ma non dà fastidio)
└── assets/
    ├── icon.svg        Icona del sito — SOSTITUIBILE (vedi sotto)
    ├── css/style.css   Stili
    ├── js/main.js      Cambio lingua EN/IT (testi in entrambe le lingue)
    └── img/*.png       Screenshot dell'app (già ottimizzati per il web)
```

## TODO

1. **Icona** — sostituisci `assets/icon.svg` con la tua icona (stesso nome file, oppure aggiorna i riferimenti in `index.html` e `privacy.html`, cercando il commento `<!-- ICON: ... -->`). Attualmente è usato il glifo dell'icona dell'app come segnaposto.
2. **Link App Store** — in `index.html` ci sono **2 link** con `href="#"` marcati dal commento `<!-- APP STORE LINK: ... -->` (uno nell'hero, uno nella sezione finale). Sostituisci `#` con l'URL reale dell'app.
3. **Privacy Policy** — apri `privacy.html` e compila i due blocchi segnaposto (`data-lang-block="en"` e `data-lang-block="it"`), inclusa la data di ultimo aggiornamento.

