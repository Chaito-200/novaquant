import { X, Check } from "lucide-react";

const notUs = [
  { t: "Non vendiamo Expert Advisor", d: "Non trovi i nostri sistemi in download su forum o marketplace. Restano sotto il nostro controllo." },
  { t: "Non siamo una sala segnali", d: "Niente messaggi tipo \"compra ora\" o \"vendi qui\". L'esecuzione è completamente automatica." },
  { t: "Niente martingala o griglie", d: "Nessuna strategia che raddoppia le posizioni in perdita per recuperare. È matematica che prima o poi esplode." },
  { t: "Niente promesse di rendimento", d: "Non garantiamo guadagni, non vendiamo \"sogni\". Mostriamo dati e lasciamo che parlino da soli." },
  { t: "Niente corsi o coaching", d: "Non ti vendiamo formazione da 1.000€ con la promessa di diventare trader in 30 giorni." },
  { t: "Niente leva folle", d: "Lavoriamo con leve sostenibili e dimensionamento controllato. La sopravvivenza viene prima del rendimento." },
];

const us = [
  { t: "Stop loss su ogni trade", d: "Ogni operazione ha un livello di uscita predefinito. Il rischio per trade è sempre limitato e noto in anticipo." },
  { t: "Take profit e trailing stop", d: "Le uscite in profitto sono codificate. Niente trade lasciati aperti \"per vedere come va\"." },
  { t: "Risk management quantitativo", d: "Position sizing, esposizione massima, drawdown control. Regole scritte, non sensazioni." },
  { t: "Diversificazione reale", d: "Strategie diverse, su mercati diversi, con timeframe diversi. La diversificazione è il vero scudo." },
];

export function CosaNonSiamo() {
  return (
    <section id="cosa-non-siamo" className="relative py-20 sm:py-32 border-t border-border/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">// Cosa NON siamo</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient leading-[1.15]">
            Tutto ciò che NovaQuant <span className="text-gradient-blue">non è</span> — perché conta più di quello che è.
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Il mondo del trading retail è pieno di scorciatoie che non funzionano. Ti diciamo
            apertamente cosa evitiamo, così sai cosa aspettarti.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {notUs.map((i) => (
            <div key={i.t} className="rounded-xl border border-destructive/20 bg-destructive/[0.03] p-5">
              <div className="flex items-start gap-3">
                <div className="h-7 w-7 flex-shrink-0 rounded-lg bg-destructive/15 text-destructive inline-flex items-center justify-center mt-0.5">
                  <X className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base mb-1">{i.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{i.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card-elevated rounded-2xl p-6 sm:p-8">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-4">// Cosa facciamo invece</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
            {us.map((i) => (
              <div key={i.t} className="flex items-start gap-3">
                <div className="h-7 w-7 flex-shrink-0 rounded-lg bg-primary/15 text-primary inline-flex items-center justify-center mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base mb-1">{i.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{i.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
