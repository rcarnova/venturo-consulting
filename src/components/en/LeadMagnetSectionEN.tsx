import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    } catch {}
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  return (
    <section
      className="py-7 border-t border-b"
      style={{ backgroundColor: "#F7F7F7", borderColor: "#E5E5E5" }}
    >
      <div className="container-narrow">
        {isSuccess ? (
          <p className="font-display font-semibold text-foreground text-center text-sm">
            Check your email — the guide is on its way.
          </p>
        ) : (
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
            <div className="shrink-0">
              <span className="font-mono uppercase tracking-wider text-muted-foreground" style={{ fontSize: "11px" }}>
                Free guide
              </span>
              <h2 className="font-display font-semibold text-foreground leading-snug mt-1" style={{ fontSize: "18px" }}>
                10 questions on employer branding
              </h2>
            </div>

            <p className="text-muted-foreground whitespace-nowrap hidden lg:block" style={{ fontSize: "14px" }}>
              A practical tool for HR before launching a campaign.
            </p>
            <p className="text-muted-foreground lg:hidden" style={{ fontSize: "14px" }}>
              A practical tool for HR before launching a campaign.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 lg:ml-auto shrink-0">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-10 bg-background border-border text-foreground placeholder:text-muted-foreground text-sm w-full sm:w-52"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-10 bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold text-sm px-5 rounded-sm whitespace-nowrap"
              >
                {isSubmitting ? "..." : "Download"}
              </Button>
            </form>
          </div>
        )}
        {!isSuccess && (
          <p className="text-muted-foreground mt-2 lg:text-right" style={{ fontSize: "11px" }}>
            No spam.
          </p>
        )}
      </div>
    </section>
  );
};

export default LeadMagnetSectionEN;
