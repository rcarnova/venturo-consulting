
# Sfondo astratto "illuminazione" sotto l'hero

Aggiungo uno sfondo astratto dietro al titolo "Ogni organizzazione ha un perché. Noi lo rendiamo visibile." che evochi visivamente il concetto di illuminare — coerente con la metodologia Lumen e con l'aesthetic monocromatica del sito.

## Concept visivo

Un fascio di luce diffuso che entra dall'angolo in alto a destra e si dissolve verso il centro/basso, lasciando il testo perfettamente leggibile sulla sinistra. Realizzato come **SVG inline + radial gradient CSS** (no immagine raster) per:
- caricamento istantaneo, zero impatto LCP
- nitidezza su qualsiasi schermo / retina
- coerenza con la palette monocromatica + accento neon yellow #E1FF00 molto attenuato

Composizione:
- Radial gradient di base: alone luminoso bianco-caldo che irradia dall'alto-destra
- Linee/raggi sottili in SVG (opacità 4–8%) che simulano il "light leak" tipo Caravaggio/cinematografico
- Velo di neon yellow (#E1FF00) all'8–10% di opacità solo nel cuore del fascio, per un richiamo sottile al brand
- Vignette nera ai bordi inferiori per ancorare il testo
- Tutto dietro al contenuto (`-z-10` / `z-0` con testo in `z-10`)

Mobile: fascio ridotto e centrato in alto, intensità minore per non distrarre dal titolo.

Animazione: lentissimo "breathing" (opacità 0.85↔1.0 in 8s, `prefers-reduced-motion` rispettato) per dare vita senza essere invadenti.

## Implementazione

**File modificato:** `src/components/HeroSection.tsx`
- Aggiungo un `<div aria-hidden>` posizionato `absolute inset-0` dentro alla `<section>`, prima del contenuto
- Contiene: 1 layer radial-gradient via Tailwind arbitrary values + 1 SVG inline con `<radialGradient>` e raggi `<line>` sfumati
- Testo wrappato in `relative z-10` (già presente sul container interno, confermo)

**File modificato:** `src/index.css`
- Aggiungo keyframe `lumenBreath` (opacity loop) racchiuso in `@media (prefers-reduced-motion: no-preference)`

**Versione EN:** stessa modifica simmetrica in `src/components/en/HeroSectionEN.tsx`.

## Cosa NON cambia
- Tipografia, colori del testo, spacing, CTA, scroll indicator, animazioni esistenti del titolo
- SEO, struttura semantica, performance budget (zero richieste di rete aggiuntive)
- Nessuna immagine raster da generare/ospitare
