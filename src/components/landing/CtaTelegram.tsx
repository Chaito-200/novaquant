import { TELEGRAM_URL } from "@/lib/constants";
import { Send } from "lucide-react";

export function CtaTelegram() {
  return (
    <section className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="relative card-elevated rounded-3xl p-7 sm:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full hairline bg-background/60 px-3 py-1 text-[11px] sm:text-xs font-mono text-muted-foreground mb-5 sm:mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Canale ufficiale Telegram
            </div>
            <h2 className="text-[1.7rem] leading-[1.15] sm:text-5xl font-semibold text-gradient max-w-2xl mx-auto">
              Vuoi vedere come lavoriamo davvero?
            </h2>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Sul canale Telegram pubblichiamo aggiornamenti dei sistemi, statistiche live e
              come funziona davvero il copy trading sui nostri algoritmi. Niente hype, niente
              promesse — solo lavoro e dati.
            </p>
            <div className="mt-8 sm:mt-10 flex justify-center">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 rounded-xl bg-primary text-primary-foreground px-6 sm:px-7 py-3.5 sm:py-4 font-medium glow-blue hover:opacity-95 transition text-sm sm:text-base"
              >
                <Send className="h-5 w-5" />
                Entra nel canale Telegram
              </a>
            </div>
            <p className="mt-6 text-xs text-muted-foreground font-mono">
              Gratuito · Iscrizione libera · Nessun obbligo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
