import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { ComeFunziona } from "@/components/landing/ComeFunziona";
import { Approccio } from "@/components/landing/Approccio";
import { SistemiPortfolio } from "@/components/landing/SistemiPortfolio";
import { CosaNonSiamo } from "@/components/landing/CosaNonSiamo";
import { ChiSiamo } from "@/components/landing/ChiSiamo";
import { PerChi } from "@/components/landing/PerChi";
import { Faq } from "@/components/landing/Faq";
import { CtaTelegram } from "@/components/landing/CtaTelegram";
import { Footer } from "@/components/landing/Footer";
import { Reveal } from "@/components/landing/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Reveal><Approccio /></Reveal>
      <Reveal><SistemiPortfolio /></Reveal>
      <Reveal><CosaNonSiamo /></Reveal>
      <Reveal><ComeFunziona /></Reveal>
      <Reveal><ChiSiamo /></Reveal>
      <Reveal><PerChi /></Reveal>
      <Reveal><Faq /></Reveal>
      <Reveal><CtaTelegram /></Reveal>
      <Footer />
    </main>
  );
}
