import { ExternalLink } from "lucide-react";

const equityPath = "M0,180 C50,170 100,165 150,150 C200,135 250,140 300,120 C350,100 400,108 450,85 C500,68 550,50 600,40 C650,30 700,28 750,18 C800,10 850,12 900,6";

export function Performance() {
  return (
    <section id="performance" className="relative py-24 sm:py-32 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">// Performance</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient leading-tight">
            Dati reali, non slide di marketing.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Pubblichiamo equity curve, metriche e statistiche dei sistemi. Lavoriamo per integrare
            il monitoraggio Myfxbook in modo che chiunque possa verificare i risultati in autonomia.
          </p>
        </div>

        <div className="card-elevated rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative grid lg:grid-cols-[2fr_1fr] gap-8">
            {/* chart */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Portfolio Equity</p>
                  <p className="text-3xl font-bold text-gradient-blue mt-1">+34.7%</p>
                </div>
                <div className="flex gap-1.5 text-xs">
                  {["1M", "3M", "6M", "YTD", "All"].map((t, i) => (
                    <button
                      key={t}
                      className={`px-2.5 py-1 rounded font-mono ${i === 3 ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative h-64 rounded-lg bg-background/40 hairline p-4">
                <svg viewBox="0 0 900 220" preserveAspectRatio="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="perfFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.65 0.22 255)" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="oklch(0.65 0.22 255)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line key={i} x1="0" y1={44 * i} x2="900" y2={44 * i} stroke="oklch(0.28 0.018 250 / 0.4)" strokeDasharray="2 4" />
                  ))}
                  <path d={`${equityPath} L900,220 L0,220 Z`} fill="url(#perfFill)" />
                  <path d={equityPath} fill="none" stroke="oklch(0.65 0.22 255)" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span>Gen</span><span>Mar</span><span>Mag</span><span>Lug</span><span>Set</span><span>Nov</span>
              </div>
            </div>

            {/* metrics */}
            <div className="space-y-3">
              {[
                { l: "Net Return YTD", v: "+34.7%", accent: true },
                { l: "Max Drawdown", v: "-7.2%" },
                { l: "Sharpe Ratio", v: "1.84" },
                { l: "Sortino Ratio", v: "2.41" },
                { l: "Win Rate", v: "58.3%" },
                { l: "Profit Factor", v: "1.67" },
                { l: "Total Trades", v: "2,418" },
                { l: "Avg Trade Duration", v: "4h 12m" },
              ].map((m) => (
                <div key={m.l} className="flex items-center justify-between py-2 border-b border-border/40 last:border-0">
                  <span className="text-sm text-muted-foreground">{m.l}</span>
                  <span className={`text-sm font-semibold font-mono ${m.accent ? "text-primary" : ""}`}>{m.v}</span>
                </div>
              ))}
              <a
                href="#"
                className="mt-2 inline-flex items-center gap-2 text-xs text-primary hover:text-primary/80 font-mono"
              >
                Statistiche complete su Myfxbook <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-muted-foreground text-center font-mono">
          // I valori mostrati sono placeholder. I dati live aggiornati sono pubblicati sul canale ufficiale.
        </p>
      </div>
    </section>
  );
}
