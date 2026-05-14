import { Database, Layers, ShieldCheck, LineChart, Activity, Code2 } from "lucide-react";

const items = [
  { icon: Database, title: "Decisioni basate sui dati", desc: "Ogni sistema nasce da analisi quantitativa, backtest rigorosi e validazione statistica. Niente intuizioni, niente sale segnali." },
  { icon: Layers, title: "Portfolio multi-strategy", desc: "Diverse strategie su mercati e timeframe diversi. La diversificazione è il primo strumento di gestione del rischio." },
  { icon: ShieldCheck, title: "Risk management first", desc: "Stop loss, position sizing e drawdown control non sono opzionali. Sono la base di ogni sistema che pubblichiamo." },
  { icon: LineChart, title: "Monitoraggio continuo", desc: "I sistemi vengono osservati, misurati e — quando necessario — disattivati. Niente strategie 'fire and forget'." },
  { icon: Code2, title: "Approccio systematic", desc: "Regole codificate, esecuzione automatica. Rimuoviamo l'emozione dal processo decisionale." },
  { icon: Activity, title: "Trasparenza reale", desc: "Equity curve, metriche e statistiche disponibili in tempo reale. I dati parlano prima di noi." },
];

export function Approccio() {
  return (
    <section id="approccio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">// Approccio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient leading-tight">
            Un'alternativa concreta a sale segnali, martingala e copy trading aggressivi.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            NovaQuant nasce dalla passione per il trading quantitativo e la programmazione.
            L'obiettivo è semplice: costruire sistemi robusti, monitorarli nel tempo e mostrare i risultati per quello che sono.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <div key={it.title} className="card-elevated rounded-xl p-6 group hover:border-primary/40 transition-colors">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
