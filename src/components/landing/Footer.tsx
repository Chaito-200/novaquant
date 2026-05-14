import { Logo } from "./Logo";
import { TELEGRAM_URL } from "@/lib/constants";
import { Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <Logo className="h-7" />
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-primary transition">
              <Send className="h-4 w-4" /> Telegram
            </a>
            <a href="#performance" className="hover:text-foreground transition">Performance</a>
            <a href="#sistemi" className="hover:text-foreground transition">Sistemi</a>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 text-xs text-muted-foreground leading-relaxed space-y-3">
          <p className="font-mono uppercase tracking-wider text-foreground/80">// Disclaimer sul rischio</p>
          <p>
            Il trading sui mercati finanziari comporta un rischio significativo di perdita di capitale e non è adatto a tutti gli investitori.
            Le performance passate non sono indicative dei risultati futuri. I contenuti pubblicati da NovaQuant hanno finalità informative
            ed educative e non costituiscono consulenza finanziaria, raccomandazione personalizzata né sollecitazione all'investimento.
          </p>
          <p className="pt-2 text-muted-foreground/70">
            © {new Date().getFullYear()} NovaQuant. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
