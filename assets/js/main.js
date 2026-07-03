/* ============================================================
   Voice Generator TTS — language toggle (EN default, IT secondary)
   The choice is stored in localStorage and applied on every page.
   ============================================================ */

(function () {
  "use strict";

  var STRINGS = {
    en: {
      "nav.features": "Features",
      "nav.screens": "Screenshots",
      "nav.privacy": "Privacy",
      "nav.support": "Support",

      "hero.badge": "100% Ad-Free · Offline · Private",
      "hero.title": "Turn text into natural speech. Keep it forever.",
      "hero.sub": "Voice Generator TTS converts anything you write into high-quality audio files you can play, organize and share. No ads, no account, no subscription — it works entirely offline.",
      "hero.cta": "Download on the App Store",
      "hero.cta2": "Explore the features",
      "hero.note": "Free. No hidden costs — every feature is included.",

      "stats.voices": "Voices",
      "stats.languages": "Languages",
      "stats.formats": "Audio formats",
      "stats.ads": "Ads, forever",

      "features.title": "Everything you need. Nothing you don't.",
      "features.sub": "A complete text-to-speech studio in your pocket — designed natively for iPhone and iPad.",
      "f1.title": "170+ curated voices",
      "f1.text": "38 languages and 50+ regional accents, with Premium and Enhanced quality tiers and instant per-voice preview. Fun novelty voices included.",
      "f2.title": "Fine-tune every detail",
      "f2.text": "Adjust rate, pitch and volume with live sliders, preview instantly, then save complete setups as presets you can reapply with a tap.",
      "f3.title": "Export real audio files",
      "f3.text": "M4A (AAC) for compact, MP3-like quality — or WAV, AIFF and CAF for lossless studio quality. Live progress, cancel anytime.",
      "f4.title": "A tidy built-in library",
      "f4.text": "Everything you create in one place: play, rename, delete, and share anywhere with AirDrop, Messages, Mail or save to Files.",
      "f5.title": "Truly private",
      "f5.text": "100% offline: your text never leaves your device. No data collection, no analytics, no third-party SDKs, no account.",
      "f6.title": "Designed for iOS",
      "f6.text": "Clean, native design for iPhone and iPad. Light and dark themes, your own accent color, full VoiceOver and Reduce Motion support.",

      "screens.title": "See it in action",
      "screens.sub": "Swipe through the app — from picking a voice to exporting your audio.",
      "shot.voices": "Browse 170+ voices",
      "shot.tuning": "Tune rate, pitch & volume",
      "shot.formats": "Pick your export format",
      "shot.files": "Your audio, organized",
      "shot.presets": "Save & reuse presets",

      "uses.title": "Perfect for",
      "uses.1": "Voiceovers for videos, reels and presentations",
      "uses.2": "Listening to articles, notes and study material",
      "uses.3": "Language learning and pronunciation practice",
      "uses.4": "Narrating your own stories and scripts",
      "uses.5": "Accessibility and spoken content",

      "pt.title": "Privacy, actually.",
      "pt.text": "No data collection. No analytics. No third-party SDKs. Everything — voices, audio files, presets, settings — stays on your device. Our privacy manifest declares exactly that.",
      "pt.link": "Read the Privacy Policy",

      "cta.title": "Download once, use forever.",
      "cta.sub": "No ads, ever. No account. No subscription.",

      "footer.contact": "Need help? Write to",
      "footer.rights": "All rights reserved."
    },

    it: {
      "nav.features": "Funzioni",
      "nav.screens": "Screenshot",
      "nav.privacy": "Privacy",
      "nav.support": "Supporto",

      "hero.badge": "100% senza pubblicità · Offline · Privata",
      "hero.title": "Trasforma il testo in voce naturale. E conservala per sempre.",
      "hero.sub": "Voice Generator TTS converte tutto ciò che scrivi in file audio di alta qualità da riprodurre, organizzare e condividere. Niente pubblicità, nessun account, nessun abbonamento — funziona completamente offline.",
      "hero.cta": "Scarica dall'App Store",
      "hero.cta2": "Scopri le funzioni",
      "hero.note": "Gratis. Nessun costo nascosto — ogni funzione è inclusa.",

      "stats.voices": "Voci",
      "stats.languages": "Lingue",
      "stats.formats": "Formati audio",
      "stats.ads": "Pubblicità, per sempre",

      "features.title": "Tutto ciò che serve. Niente di superfluo.",
      "features.sub": "Uno studio di sintesi vocale completo in tasca — progettato nativamente per iPhone e iPad.",
      "f1.title": "170+ voci curate",
      "f1.text": "38 lingue e oltre 50 accenti regionali, con livelli di qualità Premium ed Enhanced e anteprima istantanea per ogni voce. Incluse voci curiose e divertenti.",
      "f2.title": "Regola ogni dettaglio",
      "f2.text": "Modifica velocità, tono e volume con slider in tempo reale, ascolta subito l'anteprima e salva configurazioni complete come preset riapplicabili con un tap.",
      "f3.title": "Esporta veri file audio",
      "f3.text": "M4A (AAC) compatto con qualità simile a MP3 — oppure WAV, AIFF e CAF con qualità da studio senza perdite. Avanzamento in tempo reale, annullabile quando vuoi.",
      "f4.title": "Una libreria integrata e ordinata",
      "f4.text": "Tutto ciò che crei in un unico posto: riproduci, rinomina, elimina e condividi con AirDrop, Messaggi, Mail o salva su File.",
      "f5.title": "Davvero privata",
      "f5.text": "100% offline: il tuo testo non lascia mai il dispositivo. Nessuna raccolta dati, nessuna analytics, nessun SDK di terze parti, nessun account.",
      "f6.title": "Pensata per iOS",
      "f6.text": "Design pulito e nativo per iPhone e iPad. Tema chiaro e scuro, colore accento personalizzato, supporto completo a VoiceOver e Riduci movimento.",

      "screens.title": "Guardala in azione",
      "screens.sub": "Scorri tra le schermate — dalla scelta della voce all'esportazione dell'audio.",
      "shot.voices": "Sfoglia 170+ voci",
      "shot.tuning": "Regola velocità, tono e volume",
      "shot.formats": "Scegli il formato di esportazione",
      "shot.files": "I tuoi audio, in ordine",
      "shot.presets": "Salva e riusa i preset",

      "uses.title": "Perfetta per",
      "uses.1": "Voiceover per video, reel e presentazioni",
      "uses.2": "Ascoltare articoli, appunti e materiale di studio",
      "uses.3": "Imparare le lingue e allenare la pronuncia",
      "uses.4": "Narrare le tue storie e i tuoi copioni",
      "uses.5": "Accessibilità e contenuti letti ad alta voce",

      "pt.title": "Privacy, sul serio.",
      "pt.text": "Nessuna raccolta dati. Nessuna analytics. Nessun SDK di terze parti. Tutto — voci, file audio, preset, impostazioni — resta sul tuo dispositivo. Il nostro manifesto della privacy dichiara esattamente questo.",
      "pt.link": "Leggi l'informativa sulla privacy",

      "cta.title": "Scarica una volta, usa per sempre.",
      "cta.sub": "Senza pubblicità, mai. Nessun account. Nessun abbonamento.",

      "footer.contact": "Serve aiuto? Scrivi a",
      "footer.rights": "Tutti i diritti riservati."
    }
  };

  var STORAGE_KEY = "vgtts-lang";

  function currentLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "it" || saved === "en") return saved;
    } catch (e) { /* localStorage unavailable (private mode etc.) */ }
    return "en";
  }

  function apply(lang) {
    var dict = STRINGS[lang] || STRINGS.en;

    document.documentElement.lang = lang;

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key]) nodes[i].textContent = dict[key];
    }

    // Free-form per-language blocks (e.g. the privacy policy text)
    var blocks = document.querySelectorAll("[data-lang-block]");
    for (var j = 0; j < blocks.length; j++) {
      blocks[j].hidden = blocks[j].getAttribute("data-lang-block") !== lang;
    }

    // The button shows the language you would switch TO
    var btn = document.getElementById("lang-toggle");
    if (btn) btn.textContent = lang === "en" ? "IT" : "EN";
  }

  function setLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    apply(lang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(currentLang());
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        setLang(document.documentElement.lang === "en" ? "it" : "en");
      });
    }
  });
})();
