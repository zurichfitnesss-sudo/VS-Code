import { Phone, MapPin, Dumbbell } from "lucide-react";

export const PHONE = "+918618889800";
export const PHONE_DISPLAY = "+91 86188 89800";
export const WHATSAPP = "https://wa.me/918618889800";
export const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=Zurich+Fitness+Rajajinagar+9th+Main+Rd+4th+Block+Rajajinagar+Bengaluru+560010";

type Variant = "primary" | "whatsapp" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  // Primary: high-contrast gradient with glow
  primary: "bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-95 hover:shadow-[0_0_30px_oklch(0.64_0.22_32/0.7)]",
  // WhatsApp: brand green, strong but balanced
  whatsapp: "bg-[#25D366] text-white hover:brightness-105 hover:shadow-[0_6px_18px_rgba(37,211,102,0.18)]",
  // Outline (secondary): keep same height/padding but reduce visual weight
  outline: "border-2 border-primary/45 text-foreground bg-transparent hover:bg-primary/6",
  // Ghost (secondary): subtle, low-contrast action
  ghost: "bg-transparent border border-border/40 text-foreground/90 hover:border-primary/40",
};

export function CTAButton({ variant = "primary", href, children, className = "", icon: Icon, ...rest }: {
  variant?: Variant; href: string; children: React.ReactNode; className?: string; icon?: React.ElementType;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`w-full xs:w-auto inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 active:scale-95 ${styles[variant]} ${className}`}
      {...rest}
    >
      {Icon && <Icon className="h-[18px] w-[18px] flex-shrink-0" />}
      {children}
    </a>
  );
}

// WhatsApp SVG icon — proper green brand icon, no lucide
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function HeroCTAs() {
  return (
    <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
      <CTAButton variant="primary" href={`tel:${PHONE}`} icon={Phone}>Call Now</CTAButton>
      <CTAButton variant="whatsapp" href={WHATSAPP} icon={WhatsAppIcon} target="_blank" rel="noopener">WhatsApp</CTAButton>
      <CTAButton variant="outline" href={DIRECTIONS} icon={MapPin} target="_blank" rel="noopener">Get Directions</CTAButton>
      <CTAButton variant="ghost" href="#contact" icon={Dumbbell}>Book a Trial</CTAButton>
    </div>
  );
}
