export function FxBlueWidget() {
  return (
    <section id="performance-live" className="relative py-10 sm:py-16 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">// Performance Live</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient leading-[1.15]">
            Dati aggiornati in tempo reale.
          </h2>
          <p className="mt-3 sm:mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Il tracking del portfolio su FXBlue. Nessuna slide di marketing: solo numeri verificabili da chiunque.
          </p>
        </div>

        <div className="card-elevated rounded-2xl p-2 sm:p-3 overflow-hidden">
          <div className="relative w-full" style={{ minHeight: "500px" }}>
            <iframe
              src="https://www.fxblue.com/fxblueview.aspx?id=NovaQuant"
              title="FXBlue NovaQuant Portfolio"
              className="w-full rounded-xl"
              style={{ border: "none", minHeight: "500px", height: "70vh", maxHeight: "900px" }}
              loading="lazy"
            >
              <a href="https://www.fxblue.com" target="_blank" rel="noopener">
                FX Blue - free tools and services for FX and CFD traders
              </a>
            </iframe>
          </div>
        </div>

        <p className="mt-4 text-xs text-muted-foreground font-mono text-center">
          // Dati forniti da FXBlue. L'iframe potrebbe richiedere il caricamento di script di terze parti.
        </p>
      </div>
    </section>
  );
}
