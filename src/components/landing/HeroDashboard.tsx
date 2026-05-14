import { TrendingUp, Activity, Shield } from "lucide-react";

const equityPath = "M0,140 C40,135 80,128 120,118 C160,108 200,112 240,100 C280,88 320,82 360,68 C400,55 440,48 480,38 C520,30 560,22 600,15";

function Sparkline({ color = "var(--primary)", up = true }: { color?: string; up?: boolean }) {
  const path = up
    ? "M0,30 L20,25 L40,28 L60,18 L80,15 L100,8"
    : "M0,15 L20,20 L40,12 L60,22 L80,18 L100,25";
  return (
    <svg viewBox="0 0 100 35" className="w-full h-8">
      <path d={path} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function HeroDashboard() {
  return (
    <div className="relative card-elevated rounded-2xl p-4 sm:p-6 overflow-hidden">
      {/* glow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 blur-3xl rounded-full pointer-events-none" />

      {/* header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" />
          <span className="text-xs font-mono text-muted-foreground tracking-wider">PORTFOLIO · LIVE</span>
        </div>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        </div>
      </div>

      {/* main metric + chart */}
      <div className="grid grid-cols-3 gap-4 mb-5">
        <div className="col-span-1">
          <p className="text-xs text-muted-foreground mb-1">Equity</p>
          <p className="text-2xl sm:text-3xl font-bold text-gradient-blue">+34.7%</p>
          <p className="text-xs text-muted-foreground mt-1 font-mono">YTD · live</p>
        </div>
        <div className="col-span-2 relative h-24">
          <svg viewBox="0 0 600 160" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id="equityFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.65 0.22 255)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="oklch(0.65 0.22 255)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={`${equityPath} L600,160 L0,160 Z`} fill="url(#equityFill)" />
            <path d={equityPath} fill="none" stroke="oklch(0.65 0.22 255)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="600" cy="15" r="4" fill="oklch(0.65 0.22 255)" />
            <circle cx="600" cy="15" r="8" fill="oklch(0.65 0.22 255)" opacity="0.3" className="animate-pulse-glow" />
          </svg>
        </div>
      </div>

      {/* market cards */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {[
          { sym: "XAUUSD", label: "Gold", val: "+12.4%", up: true },
          { sym: "NAS100", label: "Nasdaq", val: "+9.8%", up: true },
          { sym: "BTCUSD", label: "Bitcoin", val: "+12.5%", up: true },
        ].map((m) => (
          <div key={m.sym} className="rounded-lg bg-background/40 hairline p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono text-muted-foreground">{m.sym}</span>
              <span className="text-[10px] text-emerald-400">●</span>
            </div>
            <Sparkline up={m.up} />
            <p className="text-sm font-semibold text-foreground mt-1">{m.val}</p>
          </div>
        ))}
      </div>

      {/* footer stats */}
      <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-border/60">
        <div>
          <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase tracking-wider mb-1">
            <TrendingUp className="h-3 w-3" /> Sharpe
          </div>
          <p className="font-semibold text-sm">1.84</p>
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase tracking-wider mb-1">
            <Shield className="h-3 w-3" /> Max DD
          </div>
          <p className="font-semibold text-sm">-7.2%</p>
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase tracking-wider mb-1">
            <Activity className="h-3 w-3" /> Trades
          </div>
          <p className="font-semibold text-sm font-mono">2,418</p>
        </div>
      </div>
    </div>
  );
}
