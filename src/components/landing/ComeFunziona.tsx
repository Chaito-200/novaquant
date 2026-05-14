import { TELEGRAM_URL } from "@/lib/constants";
import { UserPlus, Link2, TrendingUp, Wallet, Send } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "1. Apri un conto broker",
    desc: "Ti guidiamo nell'apertura di un conto presso un broker regolamentato. Il conto resta sempre tuo, intestato a te.",
  },
  {
    icon: Link2,
    title: "2. Colleghi il conto ai sistemi",
    desc: "Tramite copy trading, il tuo conto replica in automatico le operazioni dei nostri sistemi quantitativi. Nessun software da installare, nessuna decisione da prendere.",
  },
  {
    icon: TrendingUp,
    title: "3. I sistemi lavorano per te",
    desc: "Le strategie operano 24/7 su mercati e timeframe diversi, con stop loss, take profit e gestione del rischio già integrati.",
  },
  {
    icon: Wallet,
    title: "4. Profitti condivisi, perdite no",
    desc: "Trattieni il 70% dei profitti generati. Il restante 30% è la nostra performance fee — la incassiamo solo se guadagni anche tu.",
  },
];

export function ComeFunziona() {
  return (
    <section id="come-funziona" className="relative py-20 sm:py-32 border-t border-border/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">// Come funziona</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient leading-[1.15]">
            Un servizio di copy trading sui nostri sistemi quantitativi.
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Non vendiamo corsi, non gestiamo i tuoi soldi al posto tuo. I nostri algoritmi
            operano in automatico sul tuo conto broker — tu mantieni sempre il pieno controllo
            dei tuoi capitali.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {steps.map((s) => (
            <div key={s.title} className="card-elevated rounded-xl p-5 sm:p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Profit split highlight */}
        <div className="mt-8 sm:mt-10 card-elevated rounded-2xl p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">// Ripartizione profitti</p>
              <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-3">
                Il 70% dei profitti è tuo. Noi guadagniamo solo se guadagni anche tu.
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Niente abbonamenti mensili, niente costi fissi, niente segnali a pagamento.
                Una performance fee del 30% prelevata solo sui profitti reali generati dai sistemi.
                Se non guadagni, non paghi.
              </p>
            </div>
            <div className="flex gap-4 sm:gap-6 items-end">
              <div className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-gradient-blue font-mono leading-none">70%</p>
                <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">a te</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-muted-foreground font-mono leading-none">30%</p>
                <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">a noi</p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 pt-6 border-t border-border/50 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Vuoi sapere di più sul funzionamento? Scrivici sul canale.
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-95 transition"
            >
              <Send className="h-4 w-4" /> Parlaci su Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
