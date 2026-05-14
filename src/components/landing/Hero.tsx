import { TELEGRAM_URL } from "@/lib/constants";
import { Send, ArrowRight } from "lucide-react";
import { HeroDashboard } from "./HeroDashboard";

export function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full hairline bg-surface/60 px-3 py-1 text-xs font-mono text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Systematic trading · Multi-strategy
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-gradient">
              Trading algoritmico costruito sui dati,<br />
              <span className="text-gradient-blue">non sulle promesse.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              NovaQuant è un progetto italiano di trading quantitativo. Sviluppiamo sistemi automatici
              multi-strategy con focus su gestione del rischio, diversificazione e monitoraggio continuo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3.5 font-medium glow-blue hover:opacity-95 transition"
              >
                <Send className="h-4 w-4" />
                Entra nel canale Telegram
              </a>
              <a
                href="#performance"
                className="inline-flex items-center gap-2 rounded-xl hairline bg-surface/60 px-6 py-3.5 font-medium hover:bg-surface transition"
              >
                Vedi le statistiche
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "Multi", l: "strategy" },
                { v: "24/7", l: "monitoring" },
                { v: "Real", l: "data" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-mono text-primary font-semibold">{s.v}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
