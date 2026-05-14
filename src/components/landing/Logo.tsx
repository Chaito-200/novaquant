import logo from "@/assets/novaquant-logo.jpg";

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={logo} alt="NovaQuant logo" className="h-full w-auto rounded-md" />
    </div>
  );
}
