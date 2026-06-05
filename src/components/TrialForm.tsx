import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^(\+91[\s-]?)?[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  goal: z.string().trim().min(2, "Please share your fitness goal").max(120),
  message: z.string().trim().max(500).optional().or(z.literal("")),
});

export function TrialForm() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      goal: String(fd.get("goal") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const text = `Hello Zurich Fitness,\n\nName: ${parsed.data.name}\nPhone: ${parsed.data.phone}\nGoal: ${parsed.data.goal}\nMessage: ${parsed.data.message || "-"}\n\nI would like to book a free trial session.`;
    const url = `https://wa.me/918618889800?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
    toast.success("Thank you! Your trial request has been received. Our team will contact you shortly.");
    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
  }

  const input = "w-full bg-input/60 border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/70 transition";

  return (
    <form onSubmit={onSubmit} className="bg-card/70 backdrop-blur border border-border rounded-2xl p-5 sm:p-8 shadow-card-premium">
      <h3 className="font-display text-2xl font-bold mb-1">Book Your Free Trial</h3>
      <p className="text-sm text-muted-foreground mb-6">Fill the form and we'll confirm your session on WhatsApp.</p>
      <div className="grid gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Name *</label>
          <input name="name" required className={input} placeholder="Your full name" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Phone *</label>
          <input name="phone" required inputMode="tel" maxLength={14} className={input} placeholder="10-digit mobile number" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Fitness Goal *</label>
          <input name="goal" required className={input} placeholder="Weight loss, muscle gain, fitness…" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Message</label>
          <textarea name="message" rows={3} maxLength={500} className={input} placeholder="Anything else we should know?" />
        </div>
        <button
          type="submit" disabled={submitting}
          className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground rounded-lg px-6 py-3.5 font-semibold shadow-glow hover:opacity-90 transition disabled:opacity-60"
        >
          <Send className="h-4 w-4" /> {submitting ? "Sending…" : "Send Inquiry"}
        </button>
      </div>
    </form>
  );
}
