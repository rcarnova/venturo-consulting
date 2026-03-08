import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AnimatedSection from "../AnimatedSection";

const LeadMagnetSectionEN = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // silently handle
    }

    setIsSuccess(true);
    setIsSubmitting(false);
  };

  const bullets = [
    "The right questions before investing in communication",
    "A checklist to evaluate internal and external consistency",
    "A tool to bring to your HR and Marketing meeting",
  ];

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <AnimatedSection className="lg:col-span-3">
            <span className="text-eyebrow text-muted-foreground font-mono uppercase tracking-wider">
              Free guide
            </span>
            <h2 className="text-section mt-4 font-display font-bold leading-tight">
              10 questions every company should ask before launching an employer branding campaign
            </h2>
            <p className="text-body text-muted-foreground mt-5 max-w-xl">
              A practical tool for those building their identity as an employer. Download it for free.
            </p>
            <ul className="mt-8 space-y-3">
              {bullets.map((text, i) => (
                <li
                  key={i}
                  className="text-body text-foreground/80 pl-4 border-l-2 border-foreground/20"
                >
                  {text}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-2" animation="scale" delay={200}>
            <div className="rounded-lg border border-border bg-secondary p-6 md:p-8 shadow-sm">
              {isSuccess ? (
                <p className="text-subtitle font-display font-semibold text-foreground text-center py-8">
                  Check your email — the guide is on its way.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 bg-background border-border text-foreground placeholder:text-muted-foreground"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold text-base px-8 py-6 h-auto shadow-medium hover:shadow-elevated"
                  >
                    {isSubmitting ? "Sending..." : "Download the guide"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center pt-1">
                    No spam. Only useful content.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSectionEN;
