import { CTAButton } from "./CTAButton";
import { useBookCall } from "./BookCallModal";

export function MobileStickyCTA() {
  const { open } = useBookCall();
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur border-t border-border">
      <CTAButton size="md" onClick={open} className="w-full">Book a Free Call</CTAButton>
    </div>
  );
}
