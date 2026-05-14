import { Logo } from "./Logo";
import { TELEGRAM_URL } from "@/lib/constants";
import { Send } from "lucide-react";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Logo className="h-7" />
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#approccio" className="hover:text-foreground transition-colors">Approccio</a>
          <a href="#sistemi" className="hover:text-foreground transition-colors">Sistemi</a>
          <a href="#performance" className="hover:text-foreground transition-colors">Performance</a>
          <a href="#chi-siamo" className="hover:text-foreground transition-colors">Chi siamo</a>
        </nav>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity glow-blue"
        >
          <Send className="h-4 w-4" />
          <span className="hidden sm:inline">Telegram</span>
        </a>
      </div>
    </header>
  );
}
