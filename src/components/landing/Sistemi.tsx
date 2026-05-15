import { ArrowUpRight } from "lucide-react";

const systems = [
  {
    name: "Aurora XAU",
    market: "XAUUSD · Gold",
    type: "Trend following · H1",
    metrics: { ret: "+18.4%", dd: "-5.2%", trades: "412", sharpe: "1.92" },
    color: "from-amber-500/20 to-transparent",
  },
  {
    name: "Vega NAS",
    market: "NAS100 · Nasdaq",
    type: "Mean reversion · M30",
    metrics: { ret: "+11.7%", dd: "-4.8%", trades: "638", sharpe: "1.65" },
    color: "from-primary/20 to-transparent",
  },
  {
    name: "Pulsar BTC",
    market: "BTCUSD · Crypto",
    type: "Breakout · H4",
    metrics: { ret: "+22.1%", dd: "-9.4%", trades: "184", sharpe: "1.41" },
    color: "from-orange-500/20 to-transparent",
  },
];

export function Sistemi() {
  return (
    <section id="sistemi" className="relative py-20 sm:py-32 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-xl">
            <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">// Sistemi</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient leading-[1.15]">
              Più sistemi, un unico portfolio.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm sm:text-base leading-relaxed">
            Strategie indipendenti su mercati diversi (oro, indici, crypto), aggregate in
            un unico portfolio. Quando una strategia rallenta, le altre compensano.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {systems.map((s) => (
            <article
              key={s.name}
              className={`relative card-elevated rounded-xl p-6 overflow-hidden ${s.featured ? "ring-1 ring-primary/40" : ""}`}
            >
              <div className={`absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br ${s.color} blur-3xl pointer-events-none`} />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold">{s.name}</h3>
                      {s.featured && (
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30">
                          Live
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono text-muted-foreground">{s.market}</p>
                  </div>
                  <button className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                    Dettagli <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <p className="text-sm text-muted-foreground mb-5">{s.type}</p>

                <div className="grid grid-cols-4 gap-3 pt-4 border-t border-border/60">
                  <Stat label="Return" value={s.metrics.ret} accent />
                  <Stat label="Max DD" value={s.metrics.dd} />
                  <Stat label="Trades" value={s.metrics.trades} />
                  <Stat label="Sharpe" value={s.metrics.sharpe} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground font-mono text-center">
          // Statistiche placeholder — i dati live sono disponibili sul canale Telegram
        </p>
      </div>
    </section>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{label}</p>
      <p className={`text-sm font-semibold font-mono ${accent ? "text-primary" : "text-foreground"}`}>{value}</p>
    </div>
  );
}
