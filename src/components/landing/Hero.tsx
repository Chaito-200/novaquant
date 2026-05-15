import { TELEGRAM_URL } from "@/lib/constants";
import { Send, ArrowRight } from "lucide-react";
import { HeroDashboard } from "./HeroDashboard";

export function Hero() {
  return (
    <section className="relative pt-24 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full hairline bg-surface/60 px-3 py-1 text-[11px] sm:text-xs font-mono text-muted-foreground mb-5 sm:mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Trading algoritmico · Copy trading
            </div>
            <h1 className="text-[2rem] leading-[1.1] sm:text-5xl lg:text-6xl font-semibold text-gradient">
              Trading algoritmico costruito sui dati,{" "}
              <span className="text-gradient-blue">non sulle promesse.</span>
            </h1>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              NovaQuant è un progetto italiano di trading quantitativo. I nostri sistemi
              operano in automatico sul tuo conto broker tramite copy trading — tu mantieni
              sempre il controllo dei tuoi soldi, noi ci occupiamo del resto.
            </p>
            <div className="mt-7 sm:mt-8 flex flex-wrap gap-3">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-medium glow-blue hover:opacity-95 transition"
              >
                <Send className="h-4 w-4" />
                Entra nel canale Telegram
              </a>
              <a
                href="#cosa-offriamo"
                className="inline-flex items-center gap-2 rounded-xl hairline bg-surface/60 px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-medium hover:bg-surface transition"
              >
                Come funziona
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
              {[
                { v: "70/30", l: "ripartizione" },
                { v: "24/7", l: "monitoraggio" },
                { v: "Auto", l: "esecuzione" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-mono text-primary font-semibold text-sm sm:text-base">{s.v}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{s.l}</p>
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
