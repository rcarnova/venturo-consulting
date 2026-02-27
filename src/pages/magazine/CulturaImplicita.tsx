import { SEO } from "@/components/SEO";
import ArticleLayout from "@/components/ArticleLayout";
import culturaOrg from "@/assets/cultura-org.png";

const content = `"Qui si lavora così. Lo capirai stando."

Questa frase uccide più startup di qualsiasi pivot sbagliato.

## Il problema

Quando eri in 15, la cultura era implicita perché **eravate tutti lì dal primo giorno**. Avevate vissuto insieme le decisioni difficili. Sapevate cosa significa "lavorare bene qui" perché l'avevate costruito insieme.

Poi assumi la persona numero 50.

Lei non c'era quando avete deciso di rimandare il lancio per fare le cose bene. Non ha visto il founder dire no a un cliente che pagava tanto ma chiedeva cose contro i vostri principi.

Cosa dovrebbe "capire da sola"?

## Cosa succede quando non codifichi

Ogni manager interpreta a modo suo.

**Manager A:** "Innovazione significa provare cose nuove anche se rischiose"

**Manager B:** "Innovazione significa migliorare l'esistente senza rompere nulla"

Stessa parola. Due culture opposte.

Risultato: Il team del Manager A sperimenta e fallisce (e viene sgridato dal Manager B per "scarsa attenzione ai dettagli"). Il team del Manager B non propone niente di nuovo (e viene sgridato dal Manager A per "mancanza di iniziativa").

Tutti frustrati. Nessuno capisce le regole del gioco.

## Come si codifica (senza poster motivazionali)

I tuoi valori non sono:

- "Innovazione"
- "Collaborazione"
- "Orientamento al cliente"

Questi sono poster. Non cultura.

I tuoi valori sono:

- **Come reagisci quando qualcuno sbaglia pubblicamente**
- **Chi promuovi e perché**
- **Quali comportamenti tolleri anche se i numeri vanno bene**
- **Come gestisci i conflitti tra team**

### Esercizio pratico

Prendi i tuoi "valori aziendali". Per ognuno, scrivi:

1. **Cosa significa concretamente**

   "Innovazione" → "Testiamo almeno 3 esperimenti al mese, anche piccoli"

2. **Cosa NON significa**

   "Innovazione" ≠ "Cambiamo strategia ogni settimana"

3. **Come lo osservi**

   "Vedo innovazione quando: qualcuno propone un test, anche se può fallire"

4. **Cosa fai quando manca**

   "Se nessuno propone esperimenti da 2 mesi, facciamo retrospettiva"

## Il test dell'assunzione

Usa questo test: prendi l'ultimo colloquio.

Hai chiesto: "Raccontami un momento in cui hai dovuto scegliere tra X e Y"?

Dove X e Y sono situazioni che rivelano i tuoi valori:

- Velocità vs Qualità
- Trasparenza vs Diplomazia
- Autonomia vs Allineamento

Se non hai mai fatto queste domande, stai assumendo al buio.

## Come comunichi i valori

Non tramite:

- Email del founder
- Poster in ufficio
- Slide all-hands

Ma tramite:

- **Onboarding:** "Ecco 3 storie di come abbiamo gestito situazioni difficili"
- **Feedback:** "Questo comportamento è perfetto, ecco perché"
- **Promozioni:** "Ti promuoviamo perché incarni X in questo modo"
- **Exit:** "Questa persona non è più con noi perché Y era invalicabile"

## Quando è troppo tardi

Quando senti:

- "Qui si dice una cosa e se ne fa un'altra"
- "Non so mai cosa si aspettano da me"
- "Ogni manager ha regole diverse"

Se aspetti che "lo capiscano da soli", non lo capiranno mai.

## Inizia oggi

1. Scrivi 3 comportamenti non negoziabili
2. Per ognuno: 1 esempio concreto di cosa fai/non fai
3. Condividilo in onboarding
4. Usalo in feedback e valutazioni
5. Aggiorna ogni 6 mesi con esempi veri

> *La cultura non è quello che vuoi essere. È quello che fai quando nessuno ti guarda. E se non la rendi esplicita, ognuno vedrà qualcosa di diverso.*`;

const CulturaImplicita = () => {
  return (
    <>
      <SEO
        title="Cultura implicita = Cultura inesistente"
        description="Perché aspettarsi che 'lo capiscano da soli' non funziona. Codificare i valori aziendali e costruire un employer branding coerente."
        canonical="https://venturo.it/magazine/cultura-implicita-cultura-inesistente"
        lang="it"
      />
      <ArticleLayout
      category="Cultura"
      title="Cultura implicita = Cultura inesistente"
      subtitle="Perché aspettarsi che 'lo capiscano da soli' non funziona mai"
      date="29 gen 2025"
      readTime="7 min"
      heroImage={culturaOrg}
      content={content}
    />
    </>
  );
};

export default CulturaImplicita;
