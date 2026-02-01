
## Piano: Creare la Sezione "Chi Siamo"

Creeremo una nuova sezione "Chi Siamo" seguendo lo stile e le convenzioni delle altre sezioni esistenti, posizionandola dopo la sezione Case Study.

---

### Struttura della Sezione

La sezione sarà composta da due parti:

1. **Introduzione "Chi Siamo"** - Testo descrittivo centrato con titolo e due paragrafi
2. **Griglia Competenze** - 6 badge/card per le competenze elencate

---

### File da Creare

**`src/components/AboutSection.tsx`**

Nuovo componente con:
- ID sezione: `chi-siamo` (per navigazione)
- Container: `container-wide` come nelle altre sezioni
- Animazioni: `AnimatedSection` con pattern esistenti
- Layout:
  - Header centrato con titolo e sottotitolo
  - Due paragrafi descrittivi
  - Griglia competenze 2x3 (desktop) / 2x3 (tablet) / 1x6 (mobile)

---

### File da Modificare

**`src/pages/Index.tsx`**
- Importare `AboutSection`
- Aggiungere `<AboutSection />` dopo `<CasesSection />`

**`src/components/Header.tsx`**
- Aggiungere link di navigazione "Chi Siamo" che punta a `#chi-siamo`

---

### Design e Stile

La sezione userà:
- Sfondo: `bg-muted/30` per differenziarla leggermente (come LeversSection)
- Icone per le competenze da Lucide:
  - Coaching & facilitazione: `Users`
  - Design organizzativo: `Puzzle`
  - Comunicazione interna: `MessageCircle`
  - Data analysis culturale: `BarChart3`
  - Formazione leadership: `GraduationCap`
  - Progettazione editoriale: `PenTool`

Card competenze:
- Stile simile a `card-subtle`
- Icona + testo
- Effetto hover sottile

---

### Contenuto

**Titolo**: "Chi Siamo"

**Sottotitolo**: "Uno studio ibrido che conosce le organizzazioni dall'interno"

**Paragrafo 1**: "Non siamo osservatori esterni. Siamo persone che hanno vissuto le dinamiche organizzative da dentro, in ruoli operativi e strategici. Sappiamo cosa significa provare a cambiare una cultura mentre si gestisce il quotidiano."

**Paragrafo 2**: "Integriamo competenze diverse — coaching, facilitazione, design, comunicazione, analisi dati — perché la cultura non si cambia con un solo strumento. Lavoriamo su misura, con progetti che hanno sempre un inizio, uno sviluppo e un rinforzo continuo."

**Paragrafo 3**: "Il nostro metodo parte sempre dall'ascolto e dall'analisi, prosegue con una progettualità concreta, e si conclude con materiali e strumenti che l'organizzazione può continuare a usare."

**Competenze**:
- Coaching & facilitazione
- Design organizzativo
- Comunicazione interna
- Data analysis culturale
- Formazione leadership
- Progettazione editoriale

---

### Note Tecniche

- Il componente seguirà esattamente i pattern delle altre sezioni (CasesSection, HowWeWorkSection)
- Animazioni staggered per le competenze con delay incrementale
- Completamente responsive
- Accessibile con semantic HTML
