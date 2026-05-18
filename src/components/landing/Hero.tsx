import { ArrowRight, ShieldCheck, Activity, Cpu } from "lucide-react";
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
              Il trading quantitativo, accessibile a chiunque
            </div>
            <h1 className="text-[2rem] leading-[1.1] sm:text-5xl lg:text-6xl font-semibold text-gradient">
              Trading algoritmico costruito sui dati,&nbsp;
              <br />
              <span className="text-gradient-blue">non sulle promesse.</span>
            </h1>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              NovaQuant è un progetto italiano di trading quantitativo. I nostri sistemi
              operano in automatico sul tuo conto broker tramite copy trading: tu mantieni
              sempre il controllo dei tuoi soldi, noi ci occupiamo del resto.
            </p>
            <div className="mt-7 sm:mt-8 flex flex-wrap gap-3">
              <a
                href="#sistemi"
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-medium glow-blue hover:opacity-95 transition"
              >
                I nostri sistemi
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#cosa-offriamo"
                className="inline-flex items-center gap-2 rounded-xl hairline bg-surface/60 px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-medium hover:bg-surface transition"
              >
                Come funziona
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg">
              {[
                { icon: ShieldCheck, t: "Stop loss su ogni trade" },
                { icon: Cpu, t: "Esecuzione 100% automatica" },
                { icon: Activity, t: "Performance verificabili live" },
              ].map((s) => (
                <div key={s.t} className="flex items-center gap-2.5 rounded-lg hairline bg-surface/40 px-3 py-2.5">
                  <s.icon className="h-4 w-4 text-primary flex-shrink-0" />
                  <p className="text-xs sm:text-[13px] text-foreground/90 leading-tight">{s.t}</p>
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
