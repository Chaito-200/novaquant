import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Approccio } from "@/components/landing/Approccio";
import { Sistemi } from "@/components/landing/Sistemi";
import { Performance } from "@/components/landing/Performance";
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
      <Performance />
      <ChiSiamo />
      <PerChi />
      <CtaTelegram />
      <Footer />
    </main>
  );
}
