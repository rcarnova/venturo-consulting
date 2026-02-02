import ArticleLayout from "@/components/ArticleLayout";

const content = `"Pensavo lo facessi tu."

"Non sapevo di doverlo fare io."

"Ci sta lavorando qualcun altro, no?"

Se queste frasi circolano nella tua azienda, non hai un problema di comunicazione. Hai un problema di ownership.

## Il sintomo

Progetti che si bloccano. Decisioni che aspettano settimane. Nessuno si muove perché nessuno sa esattamente dove finisce il proprio ruolo e inizia quello dell'altro.

Risultato: paralisi mascherata da "lavoro collaborativo".

## Perché succede

Quando cresci da 20 a 80 persone, quello che funzionava prima (tutti fanno tutto) smette di funzionare. Ma nessuno vuole essere quello che "crea silos" o "irrigidisce la struttura".

Quindi si va avanti con ruoli vaghi e responsabilità sovrapposte.

## Come si risolve (senza diventare burocratici)

Non serve un organigramma da multinazionale. Serve chiarezza su tre cose:

### 1. Chi decide cosa

Non chi "contribuisce" o "è coinvolto". Chi **decide**.

Esempio pratico:

- Pricing prodotto → Product Lead decide, Sales e Finance consultati
- Assunzioni team X → Manager X decide, HR facilita processo
- Budget marketing → CMO decide entro budget approvato da CFO

### 2. Dove finisce il mio ruolo

La confusione nasce ai bordi, non al centro.

Esempio: "Chi gestisce il cliente dopo la firma del contratto?"

- Account Executive: fino al kick-off
- Customer Success: dal kick-off in poi
- Zona grigia: nessuna

### 3. Cosa succede se sbaglio

Se qualcuno decide autonomamente e sbaglia, cosa succede?

Se la risposta è "dipende", hai un problema.

## Il test pratico

Prendi l'ultimo progetto bloccato. Chiedi a 3 persone: "Chi deve decidere per sbloccare questo?"

Se ottieni 3 risposte diverse: problema di ownership.

Se ottieni 3 "non lo so": problema peggiore.

## Implementazione veloce

1. Identifica i 5 punti di blocco ricorrenti
2. Per ognuno: scrivi chi decide, chi consiglia, chi esegue
3. Comunicalo pubblicamente
4. Applica per 30 giorni
5. Aggiusta in base a quello che non funziona

## L'errore da evitare

Chiarezza ≠ Rigidità.

Non stai creando compartimenti stagni. Stai creando **responsabilità praticabili**.

La collaborazione funziona meglio quando è chiaro chi ha l'ultima parola.

> *La chiarezza dei ruoli non uccide la collaborazione. Uccide la confusione.*`;

const RuoliVaghi = () => {
  return (
    <ArticleLayout
      category="Organizzazione"
      title="Ruoli vaghi = Tutto rallenta"
      subtitle="Come chiarire responsabilità senza creare burocrazia"
      date="22 gen 2025"
      readTime="6 min"
      heroImage="https://via.placeholder.com/1200x500/3B82F6/FFFFFF?text=Organizzazione"
      content={content}
    />
  );
};

export default RuoliVaghi;
