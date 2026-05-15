import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { ComeFunziona } from "@/components/landing/ComeFunziona";
import { Approccio } from "@/components/landing/Approccio";
import { Sistemi } from "@/components/landing/Sistemi";
import { FxBlueWidget } from "@/components/landing/FxBlueWidget";
import { CosaNonSiamo } from "@/components/landing/CosaNonSiamo";
import { ChiSiamo } from "@/components/landing/ChiSiamo";
import { PerChi } from "@/components/landing/PerChi";
import { CtaTelegram } from "@/components/landing/CtaTelegram";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Approccio />
      <Sistemi />
      <FxBlueWidget />
      <CosaNonSiamo />
      <ComeFunziona />
      <ChiSiamo />
      <PerChi />
      <CtaTelegram />
      <Footer />
    </main>
  );
}
