

## Aggiunta Caso Studio Ufficio Pio (IT + EN)

Creazione delle pagine di dettaglio per il caso Ufficio Pio in italiano e inglese, con aggiornamento delle rotte e dei dati centralizzati.

### Cosa cambia

1. **Nuova pagina IT** (`src/pages/cases/UfficioPio.tsx`) -- caso studio completo con SEO, hreflang e contenuti forniti
2. **Nuova pagina EN** (`src/pages/en/cases/UfficioPio.tsx`) -- versione inglese, usando `CaseStudyLayoutEN` (come gli altri casi EN)
3. **Aggiornamento dati IT** (`src/data/cases.ts`) -- il caso Ufficio Pio passa da `hasDetail: false` a `hasDetail: true` con `slug` e `url` corretti
4. **Aggiornamento dati EN** (`src/data/casesEN.ts`) -- stessa modifica per la versione inglese
5. **Nuove rotte** (`src/App.tsx`) -- aggiunta `/casi-studio/ufficio-pio` e `/en/case-studies/ufficio-pio` con relativi import

### Dettagli tecnici

- La versione EN usa `CaseStudyLayoutEN` (non `CaseStudyLayout`) per coerenza con Ricehouse, Randstad e Lely EN
- Nel data file, l'oggetto Ufficio Pio esistente viene aggiornato (non duplicato): `hasDetail: true`, `slug: "ufficio-pio"`, `url: "/casi-studio/ufficio-pio"` (IT) e `url: "/en/case-studies/ufficio-pio"` (EN)
- SEO completo con tag hreflang IT/EN bidirezionali
- Il caso apparira automaticamente nella sezione "Altri progetti" grazie alla navigazione ciclica esistente

