import { TELEGRAM_URL } from "@/lib/constants";
import { Send, Wallet, Activity, Handshake } from "lucide-react";

const pillars = [
  {
    icon: Activity,
    title: "Gestione attiva del portfolio",
    desc: "Monitoriamo i sistemi ogni giorno, ribilanciamo l'esposizione e disattiviamo le strategie che smettono di performare. Tu non devi fare nulla.",
  },
  {
    icon: Wallet,
    title: "Il capitale resta tuo",
    desc: "Operiamo via copy trading sul tuo conto broker. Niente versamenti a noi, niente gestione patrimoniale: in ogni momento controlli e ritiri i tuoi fondi.",
  },
  {
    icon: Handshake,
    title: "Modello win-win, non un abbonamento",
    desc: "Niente fee fisse, niente segnali a pagamento, niente corsi. Una performance fee solo sui profitti reali: se non guadagni tu, non guadagniamo noi.",
  },
];

export function ComeFunziona() {
  return (
    <section id="cosa-offriamo" className="relative py-20 sm:py-32 border-t border-border/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">// Cosa offriamo</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient leading-[1.15]">
            L'unico modello davvero <span className="text-gradient-blue">sostenibile</span> nel trading algoritmico.
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Un portfolio gestito attivamente sui nostri sistemi quantitativi, replicato in automatico
            sul tuo conto broker. Una sola fee, calcolata solo sui profitti generati.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {pillars.map((p) => (
            <div key={p.title} className="card-elevated rounded-xl p-5 sm:p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Profit split highlight */}
        <div className="card-elevated rounded-2xl p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">// Ripartizione profitti</p>
              <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-3">
                L'80% dei profitti è tuo. Il 20% è la nostra performance fee.
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Una formula win-win: noi guadagniamo solo quando guadagni anche tu. Nessun
                Expert Advisor da comprare, nessuna sala segnali, nessun corso. Solo gestione
                quantitativa attiva, allineata ai tuoi risultati.
              </p>
            </div>
            <div className="flex gap-4 sm:gap-6 items-end">
              <div className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-gradient-blue font-mono leading-none">80%</p>
                <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">a te</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-muted-foreground font-mono leading-none">20%</p>
                <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">a noi</p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 pt-6 border-t border-border/50 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Vuoi capire meglio come si applica al tuo caso? Scrivici sul canale.
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
