export function FxBlueWidget() {
  return (
    <section id="performance-live" className="relative py-10 sm:py-16 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-3 sm:px-8">
        <div className="max-w-3xl mb-8 sm:mb-10">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">// Performance Live</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient leading-[1.15]">
            Dati reali. Niente slide di marketing.
          </h2>
          <div className="mt-4 sm:mt-5 space-y-3 text-muted-foreground text-base sm:text-lg leading-relaxed">
            <p>
              Qui sotto trovi il tracking live del nostro portfolio su FXBlue. Non sono screenshot o numeri modificabili: sono i dati reali dei nostri sistemi algoritmici mentre lavorano in tempo reale sui mercati.
            </p>
            <p>
              Puoi navigare liberamente all'interno del widget per analizzare equity curve, drawdown, distribuzione dei trade e tutte le metriche che ti servono per fare una valutazione indipendente. Ogni strategia opera in modo complementare alle altre: il risultato che vedi è l'effetto combinato di un portfolio diversificato, con gestione del rischio integrata, stop loss e trailing stop attivi su ogni singola posizione.
            </p>
            <p className="text-foreground">
              Nessuna promessa, nessuna brochure: solo numeri verificabili da chiunque, in qualsiasi momento.
            </p>
          </div>
        </div>

        <div className="card-elevated rounded-2xl p-1 sm:p-3 overflow-hidden">
          <div className="relative w-full" style={{ minHeight: "600px" }}>
            <iframe
              src="https://www.fxblue.com/fxblueview.aspx?id=NovaQuant"
              title="FXBlue NovaQuant Portfolio"
              className="w-full rounded-xl"
              style={{ border: "none", minHeight: "600px", height: "85vh", maxHeight: "1000px" }}
              loading="lazy"
            />
          </div>
        </div>

        <p className="mt-4 text-xs text-muted-foreground font-mono text-center">
          // Dati forniti da FXBlue. L'iframe potrebbe richiedere il caricamento di script di terze parti.
        </p>
      </div>
    </section>
  );
}

