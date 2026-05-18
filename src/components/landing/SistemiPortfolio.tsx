import { useMemo, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ArrowUpRight, ExternalLink, Activity, CircleDot, Layers } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { TELEGRAM_URL } from "@/lib/constants";

type Status = "Live" | "Testing" | "Paused";

type System = {
  id: string;
  name: string;
  market: "XAUUSD" | "NAS100" | "BTCUSD" | "GER40";
  type: string;
  direction?: "Buy" | "Sell";
  timeframe: string;
  status: Status;
  weight: number;
  color: string;
  description: string;
};

const SYSTEMS: System[] = [
  { id: "xau-bo", name: "XAU Breakout Buy", market: "XAUUSD", type: "Breakout", direction: "Buy", timeframe: "H1", status: "Live", weight: 1, color: "oklch(0.78 0.16 240)", description: "Sistema breakout su oro. Apre posizioni sulla rottura di livelli chiave di volatilità con stop loss strutturale e trailing dinamico." },
  { id: "xau-mr", name: "XAU Mean Reversion Buy", market: "XAUUSD", type: "Mean Reversion", direction: "Buy", timeframe: "H1", status: "Live", weight: 1, color: "oklch(0.72 0.18 245)", description: "Strategia mean reversion su oro. Sfrutta gli eccessi di prezzo di breve periodo con take profit fissi e gestione del rischio prudente." },
  { id: "xau-tf", name: "XAU Trend Following Buy", market: "XAUUSD", type: "Trend Following", direction: "Buy", timeframe: "H1", status: "Live", weight: 1, color: "oklch(0.66 0.20 250)", description: "Sistema trend following su oro. Cavalca movimenti direzionali di medio periodo con trailing stop progressivo." },
  { id: "nas-bo-buy", name: "NAS100 Range Breakout Buy", market: "NAS100", type: "Range Breakout", direction: "Buy", timeframe: "H1", status: "Live", weight: 1, color: "oklch(0.74 0.15 220)", description: "Long-only su Nasdaq 100. Entra sulla rottura rialzista di range di sessione con stop loss e take profit definiti." },
  { id: "nas-bo-sell", name: "NAS100 Range Breakout Sell", market: "NAS100", type: "Range Breakout", direction: "Sell", timeframe: "H1", status: "Live", weight: 1, color: "oklch(0.62 0.17 225)", description: "Short-only su Nasdaq 100. Specchio del sistema buy, opera sulle rotture ribassiste con la stessa logica simmetrica." },
  { id: "btc-bo-buy", name: "BTCUSD Breakout Buy", market: "BTCUSD", type: "Breakout", direction: "Buy", timeframe: "H1", status: "Live", weight: 1, color: "oklch(0.70 0.16 255)", description: "Long-only su Bitcoin. Sfrutta i breakout di volatilità tipici delle fasi di espansione del prezzo." },
  { id: "btc-bo-sell", name: "BTCUSD Breakout Sell", market: "BTCUSD", type: "Breakout", direction: "Sell", timeframe: "H1", status: "Testing", weight: 1, color: "oklch(0.58 0.18 260)", description: "Short-only su Bitcoin. Attualmente in fase di testing prima del passaggio al portfolio live." },
  { id: "ger-bo-buy", name: "GER40 Range Breakout Buy", market: "GER40", type: "Range Breakout", direction: "Buy", timeframe: "H1", status: "Live", weight: 1, color: "oklch(0.68 0.10 235)", description: "Long-only sull'indice DAX. Opera sulla rottura del range di apertura con gestione del rischio integrata." },
  { id: "ger-bo-sell", name: "GER40 Range Breakout Sell", market: "GER40", type: "Range Breakout", direction: "Sell", timeframe: "H1", status: "Live", weight: 1, color: "oklch(0.56 0.10 240)", description: "Short-only sull'indice DAX. Versione speculare del sistema buy, completa il portfolio di sessione europea." },
];

const MARKETS = ["Portfolio", "XAUUSD", "NAS100", "BTCUSD", "GER40"] as const;
type Market = (typeof MARKETS)[number];

export function SistemiPortfolio() {
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState<Market>("Portfolio");
  const [openSystem, setOpenSystem] = useState<System | null>(null);
  const [openPortfolio, setOpenPortfolio] = useState(false);

  const isPortfolio = filter === "Portfolio";
  const filtered = useMemo(
    () => (isPortfolio ? SYSTEMS : SYSTEMS.filter((s) => s.market === filter)),
    [filter, isPortfolio],
  );

  return (
    <section id="sistemi" className="relative py-16 sm:py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">// Portfolio</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient leading-[1.15]">
            Un portfolio di sistemi, non un singolo bot.
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            NovaQuant è composto da più sistemi algoritmici indipendenti, ognuno con la sua logica
            e il suo mercato. Tutti i sistemi confluiscono in un unico portfolio aggregato,
            monitorato live tramite FX Blue.
          </p>
        </div>

        {/* Donut + summary */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-10 mb-10 sm:mb-14">
          <DonutCard
            systems={SYSTEMS}
            selected={selected}
            onSelect={(id) => setSelected((prev) => (prev === id ? null : id))}
          />
          <PortfolioSummary />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mr-1">
            Filtra
          </span>
          {MARKETS.map((m) => (
            <button
              key={m}
              onClick={() => {
                setFilter(m);
              }}
              className={`rounded-full px-3.5 py-1.5 text-xs font-mono transition-colors ${
                filter === m
                  ? "bg-primary/15 text-primary border border-primary/30"
                  : "hairline bg-surface/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {isPortfolio ? (
          <PortfolioAggregateCard onDetails={() => setOpenPortfolio(true)} />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {filtered.map((s) => (
              <SystemCard
                key={s.id}
                system={s}
                active={selected === s.id}
                onSelect={() => setSelected((prev) => (prev === s.id ? null : s.id))}
                onDetails={() => setOpenSystem(s)}
              />
            ))}
          </div>
        )}

        <p className="mt-5 text-xs text-muted-foreground font-mono">
          // {isPortfolio
            ? "Seleziona un mercato per esplorare i singoli sistemi. I backtest completi verranno collegati progressivamente."
            : "Clicca su uno spicchio o su una card per evidenziare il sistema. I backtest completi verranno collegati progressivamente."}
        </p>

        {/* Performance live block */}
        <PerformanceLive />

        {/* CTA */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3.5 text-sm sm:text-base font-medium glow-blue hover:opacity-95 transition"
          >
            Segui il portfolio su Telegram
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <SystemDetailsDialog system={openSystem} onClose={() => setOpenSystem(null)} />
      <PortfolioDetailsDialog open={openPortfolio} onClose={() => setOpenPortfolio(false)} />
    </section>
  );
}

function DonutCard({
  systems,
  selected,
  onSelect,
}: {
  systems: System[];
  selected: string | null;
  onSelect: (id: string) => void;
}) {
  const data = systems.map((s) => ({ ...s, value: s.weight }));

  return (
    <div className="card-elevated rounded-2xl p-5 sm:p-7 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="relative">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-1">
          // Composizione
        </p>
        <h3 className="text-lg font-semibold mb-4">Multi-Strategy Portfolio</h3>

        <div className="relative h-[320px] sm:h-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius="62%"
                outerRadius="98%"
                paddingAngle={2}
                stroke="oklch(0.18 0.02 250)"
                strokeWidth={2}
                onClick={(d: { id?: string }) => d?.id && onSelect(d.id)}
              >
                {data.map((d) => (
                  <Cell
                    key={d.id}
                    fill={d.color}
                    opacity={selected === null || selected === d.id ? 1 : 0.35}
                    style={{ cursor: "pointer", transition: "opacity 0.2s" }}
                  />
                ))}
              </Pie>
              <Tooltip content={<DonutTooltip />} />
            </PieChart>
          </ResponsiveContainer>

          {/* center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-6">
            <p className="text-3xl sm:text-4xl font-bold text-gradient-blue font-mono">9</p>
            <p className="text-[11px] sm:text-xs font-mono text-muted-foreground uppercase tracking-[0.18em] mt-0.5">
              sistemi
            </p>
            <p className="text-[9px] sm:text-[10px] font-mono text-muted-foreground/80 mt-2 whitespace-nowrap">
              XAU · NAS100 · BTC · GER40
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Ogni spicchio rappresenta un sistema indipendente del portfolio.
        </p>
      </div>
    </div>
  );
}

function DonutTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: System }> }) {
  if (!active || !payload?.length) return null;
  const s = payload[0].payload;
  return (
    <div className="rounded-lg border border-border/60 bg-background/95 backdrop-blur px-3 py-2 text-xs shadow-xl">
      <p className="font-semibold text-foreground">{s.name}</p>
      <p className="font-mono text-muted-foreground mt-0.5">
        {s.market} · {s.timeframe}
        {s.direction ? ` · ${s.direction}` : ""}
      </p>
    </div>
  );
}

function PortfolioSummary() {
  const stats = [
    { l: "Sistemi attivi", v: "9" },
    { l: "Mercati", v: "4" },
    { l: "Strategie", v: "3" },
    { l: "Monitoraggio", v: "24/7" },
  ];
  return (
    <div className="card-elevated rounded-2xl p-5 sm:p-7 relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="relative">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-1">
          // Overview
        </p>
        <h3 className="text-lg font-semibold mb-4">Diversificazione del portfolio</h3>

        <div className="grid grid-cols-2 gap-3 mb-5">
          {stats.map((s) => (
            <div key={s.l} className="hairline rounded-lg bg-surface/40 px-4 py-3">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
                {s.l}
              </p>
              <p className="text-2xl font-bold font-mono text-gradient-blue mt-1">{s.v}</p>
            </div>
          ))}
        </div>

        <ul className="space-y-2.5 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <CircleDot className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
            Strategie indipendenti su mercati e timeframe diversi.
          </li>
          <li className="flex items-start gap-2">
            <CircleDot className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
            Ogni sistema ha il suo backtest e le sue metriche.
          </li>
          <li className="flex items-start gap-2">
            <CircleDot className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
            Il portfolio aggregato è monitorato live su FX Blue.
          </li>
        </ul>
      </div>
    </div>
  );
}

function SystemCard({
  system,
  active,
  onSelect,
  onDetails,
}: {
  system: System;
  active: boolean;
  onSelect: () => void;
  onDetails: () => void;
}) {
  return (
    <article
      onClick={onSelect}
      className={`relative card-elevated rounded-xl p-5 cursor-pointer transition-all overflow-hidden ${
        active ? "ring-1 ring-primary/60 shadow-[0_0_0_3px_oklch(0.65_0.22_255/0.12)]" : "hover:border-border"
      }`}
    >
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: system.color }}
      />
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          <h4 className="text-sm sm:text-base font-semibold leading-tight truncate">
            {system.name}
          </h4>
          <p className="text-[11px] font-mono text-muted-foreground mt-1">
            {system.market} · {system.timeframe}
            {system.direction ? ` · ${system.direction}` : ""}
          </p>
        </div>
        <StatusBadge status={system.status} />
      </div>

      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border/50 mb-4">
        <Metric l="Return" v="—" />
        <Metric l="Max DD" v="—" />
        <Metric l="Sharpe" v="—" />
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onDetails();
        }}
        className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 font-mono transition-colors"
      >
        Vedi backtest <ArrowUpRight className="h-3.5 w-3.5" />
      </button>
    </article>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const styles =
    status === "Live"
      ? "bg-primary/10 text-primary border-primary/30"
      : status === "Testing"
      ? "bg-amber-500/10 text-amber-300 border-amber-500/30"
      : "bg-muted/30 text-muted-foreground border-border";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider ${styles}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

function Metric({ l, v }: { l: string; v: string }) {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-mono">{l}</p>
      <p className="text-sm font-mono font-semibold text-foreground/80 mt-0.5">{v}</p>
    </div>
  );
}

function PerformanceLive() {
  return (
    <div id="performance" className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-border/40">
      <div className="max-w-3xl mb-8">
        <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">
          // Portfolio Live
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold text-gradient leading-[1.15]">
          Dati reali. Niente slide di marketing.
        </h3>
        <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
          I backtest mostrano il comportamento storico dei singoli sistemi. FX Blue mostra il
          risultato aggregato del portfolio in tempo reale, verificabile da chiunque.
        </p>
      </div>

      <div className="card-elevated rounded-2xl overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-border/50 bg-surface/40">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Tracking live · FX Blue
            </span>
          </div>
          <a
            href="https://www.fxblue.com/fxblueview.aspx?id=NovaQuant"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 font-mono"
          >
            Apri su FX Blue <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="p-1 sm:p-3">
          <iframe
            src="https://www.fxblue.com/fxblueview.aspx?id=NovaQuant"
            title="FXBlue NovaQuant Portfolio"
            className="w-full rounded-xl bg-background"
            style={{ border: "none", minHeight: "600px", height: "85vh", maxHeight: "1000px" }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

function SystemDetailsDialog({
  system,
  onClose,
}: {
  system: System | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!system} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-2xl bg-background border-border">
        {system && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: system.color }}
                />
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                  {system.market} · {system.timeframe}
                  {system.direction ? ` · ${system.direction}` : ""}
                </span>
              </div>
              <DialogTitle className="text-xl font-semibold text-gradient">
                {system.name}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground leading-relaxed pt-1">
                {system.description}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { l: "Status", v: system.status },
                  { l: "Return", v: "—" },
                  { l: "Max DD", v: "—" },
                  { l: "Sharpe", v: "—" },
                ].map((m) => (
                  <div key={m.l} className="hairline rounded-lg bg-surface/40 px-3 py-2.5">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
                      {m.l}
                    </p>
                    <p className="text-sm font-mono font-semibold mt-0.5">{m.v}</p>
                  </div>
                ))}
              </div>

              <div className="hairline rounded-xl bg-surface/40 aspect-[16/9] flex items-center justify-center text-center p-6">
                <div>
                  <Activity className="h-8 w-8 text-primary/60 mx-auto mb-3" />
                  <p className="text-sm text-foreground/80 font-medium">
                    Report backtest in arrivo
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 max-w-sm">
                    I report completi (equity curve, drawdown, distribuzione dei trade)
                    verranno integrati progressivamente.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function PortfolioAggregateCard({ onDetails }: { onDetails: () => void }) {
  const markets = Array.from(new Set(SYSTEMS.map((s) => s.market)));
  return (
    <article className="relative card-elevated rounded-2xl p-6 sm:p-8 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.78 0.16 240), oklch(0.66 0.20 250), oklch(0.58 0.18 260))",
        }}
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="h-4 w-4 text-primary" />
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                Portfolio aggregato · {SYSTEMS.length} sistemi
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-semibold leading-tight text-gradient">
              NovaQuant Multi-Strategy Portfolio
            </h4>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl leading-relaxed">
              Risultato aggregato di tutti i sistemi del portfolio: tutte le strategie, tutti i
              mercati, un'unica curva di equity.
            </p>
          </div>
          <StatusBadge status="Live" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-border/50 mb-6">
          <BigMetric l="Return" v="—" accent />
          <BigMetric l="Max DD" v="—" />
          <BigMetric l="Sharpe" v="—" />
          <BigMetric l="Sistemi" v={String(SYSTEMS.length)} />
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          {markets.map((m) => (
            <span
              key={m}
              className="hairline rounded-full bg-surface/40 px-2.5 py-1 text-[10px] font-mono text-muted-foreground"
            >
              {m}
            </span>
          ))}
        </div>

        <button
          onClick={onDetails}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:text-primary/80 font-mono transition-colors"
        >
          Vedi backtest <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}

function BigMetric({ l, v, accent }: { l: string; v: string; accent?: boolean }) {
  return (
    <div className="hairline rounded-lg bg-surface/40 px-4 py-3">
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">{l}</p>
      <p
        className={`text-xl sm:text-2xl font-bold font-mono mt-1 ${
          accent ? "text-gradient-blue" : "text-foreground"
        }`}
      >
        {v}
      </p>
    </div>
  );
}

function PortfolioDetailsDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-2xl bg-background border-border">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Layers className="h-4 w-4 text-primary" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              Portfolio aggregato · {SYSTEMS.length} sistemi
            </span>
          </div>
          <DialogTitle className="text-xl font-semibold text-gradient">
            NovaQuant Multi-Strategy Portfolio
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed pt-1">
            Risultati aggregati dell'intero portfolio. Tutte le strategie, tutti i mercati, una
            sola curva di equity. I backtest completi verranno integrati progressivamente.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "Status", v: "Live" },
              { l: "Return", v: "—" },
              { l: "Max DD", v: "—" },
              { l: "Sharpe", v: "—" },
            ].map((m) => (
              <div key={m.l} className="hairline rounded-lg bg-surface/40 px-3 py-2.5">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
                  {m.l}
                </p>
                <p className="text-sm font-mono font-semibold mt-0.5">{m.v}</p>
              </div>
            ))}
          </div>

          <div className="hairline rounded-xl bg-surface/40 aspect-[16/9] flex items-center justify-center text-center p-6">
            <div>
              <Activity className="h-8 w-8 text-primary/60 mx-auto mb-3" />
              <p className="text-sm text-foreground/80 font-medium">
                Report backtest del portfolio in arrivo
              </p>
              <p className="text-xs text-muted-foreground mt-1 max-w-sm">
                Equity curve, drawdown e distribuzione dei trade aggregati verranno integrati
                progressivamente.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}