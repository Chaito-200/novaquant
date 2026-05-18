import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "In cosa consiste il servizio NovaQuant?",
    answer:
      "NovaQuant è un progetto di trading algoritmico quantitativo basato su un portfolio di sistemi automatici sviluppati, testati e monitorati internamente. I sistemi operano su diversi mercati, come XAUUSD, Nasdaq, BTCUSD e GER40, utilizzando logiche differenti come breakout, mean reversion e trend following. L'obiettivo non è utilizzare un singolo 'bot magico', ma costruire un insieme di strategie diversificate che lavorano insieme all'interno di un unico portfolio.",
  },
  {
    question: "Come funziona il vostro copy trading?",
    answer:
      "Gli utenti possono collegare il proprio conto al portfolio NovaQuant tramite il broker partner utilizzato dal progetto. Le operazioni eseguite dai sistemi vengono replicate automaticamente sul conto dell'utente in proporzione al capitale allocato. Tutto il processo avviene tramite infrastrutture del broker e piattaforme dedicate al copy trading. NovaQuant non gestisce direttamente i fondi degli utenti.",
  },
  {
    question: "Cosa ci guadagnate offrendo questo servizio?",
    answer:
      "A differenza di molti progetti che guadagnano principalmente tramite CPA, commissioni sui lotti o abbonamenti mensili, NovaQuant utilizza un modello basato sulla performance fee. Questo significa che il progetto guadagna solo se anche gli utenti generano profitti. È un approccio win-win: il nostro interesse è mantenere il portfolio sostenibile, monitorato e profittevole nel tempo, non aumentare artificialmente il volume di trading.",
  },
  {
    question: "Utilizzate martingala, grid system o strategie ad alto rischio?",
    answer:
      "No. NovaQuant è totalmente contrario a martingala, grid system e strategie che aumentano progressivamente l'esposizione per recuperare perdite. Ogni sistema utilizza stop loss e take profit definiti, con logiche di risk management precise. Tutte le strategie vengono progettate per mantenere un approccio sostenibile e controllato nel tempo.",
  },
  {
    question: "Utilizzate un solo Expert Advisor?",
    answer:
      "No. Il portfolio NovaQuant è composto da più sistemi automatici indipendenti, sviluppati per lavorare su mercati e comportamenti differenti. Ogni sistema viene creato internamente, testato tramite backtest e analisi statistiche, monitorato quotidianamente, e aggiornato o sostituito se necessario. La logica del progetto non è trovare 'il bot perfetto', ma costruire un portfolio diversificato di strategie quantitative.",
  },
  {
    question: "I miei fondi sono bloccati o gestiti direttamente da voi?",
    answer:
      "No. I fondi restano sempre sul conto personale dell'utente presso il broker. NovaQuant non ha accesso diretto al capitale e non può effettuare prelievi. L'utente può interrompere il copy trading o prelevare i propri fondi in qualsiasi momento direttamente tramite il broker.",
  },
  {
    question: "Come posso iniziare?",
    answer:
      "Puoi iniziare entrando nel canale Telegram ufficiale di NovaQuant, dove pubblichiamo aggiornamenti, statistiche, monitoraggio del portfolio e risultati dei sistemi. Successivamente potrai contattarci per ricevere tutte le informazioni necessarie sulla procedura di registrazione al broker partner e sull'attivazione del copy trading.",
  },
  {
    question: "Diventerò ricco utilizzando questo servizio?",
    answer:
      "No, e chi promette questo tipo di risultati probabilmente non sta facendo informazione seria. Il trading comporta rischio e nessun sistema può garantire profitti costanti o rendimenti irrealistici. NovaQuant non è pensato per chi cerca scorciatoie, guadagni facili o metodi 'infallibili'. L'obiettivo del progetto è costruire un approccio quantitativo, disciplinato e sostenibile nel tempo, accettando che esistano anche periodi negativi e drawdown.",
  },
  {
    question: "Dove posso vedere i risultati e le statistiche?",
    answer:
      "NovaQuant pubblica statistiche, monitoraggi e aggiornamenti tramite piattaforme esterne come FX Blue e tramite il canale Telegram ufficiale. Inoltre, il sito mostra progressivamente performance live del portfolio, dati aggregati, backtest dei singoli sistemi, metriche statistiche e aggiornamenti sullo stato dei sistemi. L'obiettivo è mostrare dati reali e verificabili, non semplici screenshot o marketing.",
  },
  {
    question: "I sistemi vengono monitorati anche dopo essere andati live?",
    answer:
      "Assolutamente sì. Uno degli aspetti principali del progetto è il monitoraggio continuo dei sistemi. I mercati cambiano nel tempo, quindi ogni strategia viene controllata costantemente per verificarne robustezza, comportamento e sostenibilità. Se un sistema mostra anomalie o perdita di robustezza, può essere modificato, sospeso o sostituito.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-20 sm:py-32 border-t border-border/40">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">
            // FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient leading-[1.15]">
            Domande frequenti
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Tutto quello che devi sapere su NovaQuant, in modo trasparente e diretto.
          </p>
        </div>

        <div className="card-elevated rounded-2xl p-5 sm:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border/50 last:border-b-0"
              >
                <AccordionTrigger className="py-5 text-sm sm:text-base text-foreground hover:no-underline hover:text-primary transition-colors [&>svg]:text-muted-foreground">
                  <span className="flex items-center gap-3 pr-4">
                    <HelpCircle className="h-4 w-4 text-primary/70 flex-shrink-0 hidden sm:block" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed pl-0 sm:pl-7 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
