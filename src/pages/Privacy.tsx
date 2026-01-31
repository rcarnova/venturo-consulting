import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[800px] mx-auto px-6 md:px-12 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Torna al sito
        </Link>

        <article className="prose prose-gray max-w-none">
          <h1 className="text-display text-3xl md:text-4xl mb-8">Informativa Privacy</h1>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Titolare del trattamento</h2>
            <p className="text-foreground leading-relaxed">
              <strong>Studio Miller</strong><br />
              Massimo Benedetti e Rosario Carnovale<br />
              P.IVA: 02662900022<br />
              Email: <a href="mailto:info@venturoconsulting.it" className="text-foreground underline hover:no-underline">info@venturoconsulting.it</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Dati raccolti</h2>
            <p className="text-foreground leading-relaxed mb-3">
              Attraverso il form di contatto presente su questo sito raccogliamo:
            </p>
            <ul className="list-disc pl-6 text-foreground space-y-1">
              <li>Nome e cognome</li>
              <li>Indirizzo email</li>
              <li>Messaggio e contenuto della richiesta</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Finalità del trattamento</h2>
            <p className="text-foreground leading-relaxed mb-3">
              I dati personali raccolti vengono trattati esclusivamente per:
            </p>
            <ul className="list-disc pl-6 text-foreground space-y-1">
              <li>Rispondere alle richieste di informazioni inviate volontariamente tramite il form di contatto</li>
              <li>Gestire la comunicazione con l'interessato in relazione alla richiesta specifica</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Base giuridica</h2>
            <p className="text-foreground leading-relaxed mb-3">
              Il trattamento si basa su:
            </p>
            <ul className="list-disc pl-6 text-foreground space-y-1">
              <li>Legittimo interesse del titolare a rispondere a richieste di contatto spontanee (art. 6, par. 1, lett. f del GDPR)</li>
              <li>Consenso esplicito dell'interessato fornito tramite compilazione e invio del form (art. 6, par. 1, lett. a del GDPR)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Conservazione dei dati</h2>
            <p className="text-foreground leading-relaxed">
              I dati personali vengono conservati per il tempo strettamente necessario a gestire la richiesta e comunque non oltre 12 mesi dalla data di ultimo contatto.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Destinatari dei dati</h2>
            <p className="text-foreground leading-relaxed mb-3">
              I dati personali non vengono comunicati a terzi, ad eccezione dei fornitori di servizi tecnici necessari alla gestione del sito:
            </p>
            <ul className="list-disc pl-6 text-foreground space-y-1 mb-3">
              <li><strong>Netlify</strong> (hosting del sito web) - USA, con garanzie GDPR</li>
              <li><strong>Resend</strong> (servizio di invio email) - USA, con garanzie GDPR</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              Questi soggetti operano come responsabili del trattamento sulla base di specifici accordi contrattuali.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Diritti dell'interessato</h2>
            <p className="text-foreground leading-relaxed mb-3">
              L'interessato ha diritto di:
            </p>
            <ul className="list-disc pl-6 text-foreground space-y-1 mb-4">
              <li>Accedere ai propri dati personali</li>
              <li>Ottenere la rettifica o la cancellazione degli stessi</li>
              <li>Richiedere la limitazione del trattamento</li>
              <li>Opporsi al trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
              <li>Proporre reclamo all'Autorità Garante per la protezione dei dati personali</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              Per esercitare questi diritti, è possibile contattare il Titolare all'indirizzo: <strong><a href="mailto:info@venturoconsulting.it" className="text-foreground underline hover:no-underline">info@venturoconsulting.it</a></strong>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Cookie</h2>
            <p className="text-foreground leading-relaxed">
              Questo sito non utilizza cookie di profilazione. Vengono utilizzati esclusivamente cookie tecnici necessari al funzionamento del sito.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Aggiornamenti</h2>
            <p className="text-foreground leading-relaxed">
              Questa informativa può essere aggiornata periodicamente. L'ultima versione è sempre disponibile su questa pagina.
            </p>
            <p className="text-foreground leading-relaxed mt-4">
              <strong>Ultimo aggiornamento:</strong> 30 gennaio 2025
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
