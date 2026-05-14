import logo from "@/assets/novaquant-logo.jpg";

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="NovaQuant"
      className={`${className} w-auto object-contain`}
      style={{ filter: "drop-shadow(0 0 12px oklch(0.65 0.22 255 / 0.25))" }}
    />
  );
}
