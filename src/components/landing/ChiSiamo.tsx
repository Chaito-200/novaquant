export function ChiSiamo() {
  return (
    <section id="chi-siamo" className="relative py-24 sm:py-32 border-t border-border/40">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div>
            <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">// Chi siamo</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient leading-tight">
              Appassionati di trading quantitativo e programmazione.
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              NovaQuant non è il progetto di un trader milionario. È il lavoro di persone
              che amano la programmazione, la statistica applicata ai mercati e la costruzione
              di sistemi automatici robusti.
            </p>
            <p>
              Il nostro focus non è promettere rendimenti garantiti — non esistono. Il nostro
              focus è sviluppare strategie, testarle, monitorarle e — quando è il momento —
              spegnerle. Senza emozioni, senza marketing.
            </p>
            <p className="text-foreground">
              Crediamo in un approccio <span className="text-primary">trasparente e win-win</span>:
              se i sistemi performano, ne beneficiamo tutti. Se smettono di funzionare, lo diciamo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
