import { Check, X } from "lucide-react";

const no = [
  "Cerchi guadagni facili o rapidi",
  "Vuoi rendimenti garantiti ogni mese",
  "Non accetti drawdown o periodi negativi",
  "Cerchi 'segnali' senza capire cosa stai facendo",
];
const yes = [
  "Cerchi un approccio realistico ai mercati",
  "Vuoi vedere dati, statistiche e metriche reali",
  "Comprendi che il rischio è parte del processo",
  "Apprezzi metodo, trasparenza e long-term thinking",
];

export function PerChi() {
  return (
    <section className="relative py-20 sm:py-32 border-t border-border/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">// Per chi è</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient leading-[1.15]">
            NovaQuant non è per tutti — ed è giusto così.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="card-elevated rounded-xl p-7">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-8 w-8 rounded-lg bg-destructive/15 text-destructive inline-flex items-center justify-center">
                <X className="h-4 w-4" />
              </div>
              <h3 className="font-semibold">Non fa per te se</h3>
            </div>
            <ul className="space-y-3">
              {no.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-muted-foreground">
                  <X className="h-4 w-4 text-destructive/70 flex-shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-elevated rounded-xl p-7 ring-1 ring-primary/30">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-8 w-8 rounded-lg bg-primary/15 text-primary inline-flex items-center justify-center">
                <Check className="h-4 w-4" />
              </div>
              <h3 className="font-semibold">Fa per te se</h3>
            </div>
            <ul className="space-y-3">
              {yes.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-foreground">
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
