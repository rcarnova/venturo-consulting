import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import AnimatedSection from "@/components/AnimatedSection";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Eye, Users, MessageCircle, Target } from "lucide-react";
import { Link } from "react-router-dom";

const LumenEN = () => {
  return (
    <>
      <SEO
        title="Lumen | Venturo Methodology — Illuminating organizational culture"
        description="Lumen doesn't measure organizational culture: it illuminates it. 8 narrative questions based on Edgar Schein's model to surface real culture, not stated culture."
        canonical="https://venturo.it/en/lumen"
        lang="en"
        alternateUrls={{ it: "https://venturo.it/lumen", en: "https://venturo.it/en/lumen" }}
      />
      <HeaderEN />

      {/* HERO */}
      <section className="pt-32 pb-24 bg-background">
        <div className="container-wide max-w-4xl">
          <AnimatedSection>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">Methodology</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              We don't measure culture.<br />
              <span className="text-primary">We illuminate it.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="space-y-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              <p>
                Organizational culture is like water for those swimming in it: invisible precisely because 
                it's everywhere. People breathe its unwritten rules every day, but struggle to name them — 
                let alone fill out a questionnaire about them.
              </p>
              <p>
                That's why Lumen doesn't use Likert scales. It doesn't produce aggregate indices. It doesn't 
                hand over a report full of percentages. Lumen uses narrative questions to surface stories — 
                and in stories, culture reveals itself on its own.
              </p>
              <p>
                The result is not a diagnosis. It's a mirror. A faithful image of how people actually 
                experience the organization, not how they think they should experience it.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SCHEIN BOX */}
      <section className="py-24 bg-muted/40">
        <div className="container-wide max-w-5xl">
          <AnimatedSection>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Theoretical foundation</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Edgar Schein's model</h2>
            <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
              Every organization has three cultural layers, stacked like concentric circles. 
              Most measurement tools only see the first. Lumen goes all the way to the third.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                num: "1",
                label: "Artifacts",
                desc: "What you can see: physical spaces, visible rituals, internal jargon, symbols, stories told to newcomers. Everything an outside observer would notice when walking into the office.",
                examples: ["Meetings standing or seated?", "High five or handshake?", "Who speaks in meetings?"],
              },
              {
                num: "2",
                label: "Espoused values",
                desc: "What is said: company mission, framed values, guidelines, HR policies. What the organization claims to be and believe.",
                examples: ["\"We're flat and agile\"", "\"We put people first\"", "\"We encourage autonomy\""],
              },
              {
                num: "3",
                label: "Basic assumptions",
                desc: "What is taken for granted: unconscious beliefs, unwritten rules that no one ever decided but everyone follows. The real cultural DNA, often invisible even to founders.",
                examples: ["Is failure met with help or punishment?", "Is admitting an error seen as weakness?", "Is doing well enough, or must you also be seen?"],
              },
            ].map((level, i) => (
              <AnimatedSection key={level.num} delay={i * 100}>
                <div className="bg-background border border-border rounded-xl p-8 h-full flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-mono font-bold flex items-center justify-center">
                      {level.num}
                    </span>
                    <h3 className="font-bold text-lg">{level.label}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{level.desc}</p>
                  <ul className="mt-auto space-y-1">
                    {level.examples.map((ex) => (
                      <li key={ex} className="text-xs font-mono text-muted-foreground italic">"{ex}"</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Methodological principle</p>
              <p className="text-foreground leading-relaxed">
                Traditional surveys reach the second level at most. People answer based on what they think 
                is correct to say, not based on what they actually experience. Lumen bypasses this filter 
                through narrative questions: when you tell a story, the truth emerges before you can censor it.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* LE DOMANDE */}
      <section className="py-24 bg-background">
        <div className="container-wide max-w-5xl">
          <AnimatedSection>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">The instrument</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">8 questions. No questionnaire.</h2>
            <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
              We don't ask "how satisfied are you?". We ask people to tell stories. 
              Three examples from the eight questions that make up Lumen.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "The friend at the bar",
                question: "Imagine running into a friend you haven't seen in months. They ask you what it's like working here. What do you tell them, in two minutes?",
                note: "Reveals perceived culture vs. declared culture. The informality of the scene dissolves the defensive filter.",
              },
              {
                title: "The permitted mistake",
                question: "Think about the last time something went wrong — a bad decision, a project that didn't work out. How did it end?",
                note: "Illuminates tolerance for failure and the real relationship with accountability.",
              },
              {
                title: "The new colleague",
                question: "If you had to explain to a new colleague the 'unwritten' things — the ones they'll never find in the manual — what would you tell them?",
                note: "Surfaces basic assumptions, Schein's third layer, the hardest to reach.",
              },
            ].map((q, i) => (
              <AnimatedSection key={q.title} delay={i * 100}>
                <div className="border border-border rounded-xl p-8 h-full flex flex-col gap-4 hover:border-primary/30 transition-colors">
                  <h3 className="font-bold text-base">{q.title}</h3>
                  <p className="italic text-muted-foreground text-sm leading-relaxed flex-1">"{q.question}"</p>
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-4 leading-relaxed">{q.note}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <p className="text-sm text-muted-foreground font-mono">
              + 5 more questions reveal: power dynamics, recognition mechanisms, 
              collective identity, relationship with change, quality of internal trust.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* IL PROCESSO */}
      <section className="py-24 bg-muted/40">
        <div className="container-wide max-w-5xl">
          <AnimatedSection>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From mirror to action</h2>
            <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
              Lumen doesn't stop at data collection. Each phase prepares the next, 
              until understanding becomes a concrete project.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              {
                icon: MessageCircle,
                num: "01",
                title: "Administration",
                desc: "Narrative interviews with a representative sample of the organization. No focus groups, no questionnaires: one-to-one conversations of 45 minutes each.",
              },
              {
                icon: Eye,
                num: "02",
                title: "Analysis",
                desc: "Thematic reading of transcripts. Emergence of recurring patterns, tensions, and spontaneous metaphors people use to describe their experience.",
              },
              {
                icon: Users,
                num: "03",
                title: "Workshop",
                desc: "Restitution to the leadership team. Not a report to read: a guided session to recognize yourself in the mirror and decide together what to do.",
              },
              {
                icon: Target,
                num: "04",
                title: "3-month project",
                desc: "Definition of 2–3 concrete interventions on the cultural levers that emerged. Small changes in rituals, language, processes that generate real shifts.",
              },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.num} delay={i * 100}>
                  <div className="bg-background border border-border rounded-xl p-8 h-full flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-primary">{step.num}</span>
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-base">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={400}>
            <div className="bg-background border border-border rounded-xl p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">The output</p>
              <p className="text-foreground leading-relaxed">
                Not an 80-page report that ends up in a drawer. Lumen produces a <strong>narrative mirror</strong>: 
                a 15–20 page document in which the organization's people can recognize their own voice, 
                their own stories, their own tensions — and finally understand why certain things never change, 
                despite good intentions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FORMATI */}
      <section className="py-24 bg-background">
        <div className="container-wide max-w-4xl">
          <AnimatedSection>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Delivery formats</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Two formats, one goal.</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={100}>
              <div className="border border-border rounded-xl p-8 h-full flex flex-col gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Format</p>
                  <h3 className="text-2xl font-bold">Essential</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground flex-1">
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 8–12 narrative interviews</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Full thematic analysis</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Narrative mirror (15 pp.)</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 1 restitution workshop (3h)</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Priority levers map</li>
                </ul>
                <p className="text-xs font-mono text-muted-foreground">Ideal for: first assessment, SMEs, teams of 20–80 people</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="border border-primary/50 bg-primary/5 rounded-xl p-8 h-full flex flex-col gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Format</p>
                  <h3 className="text-2xl font-bold">Extended</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground flex-1">
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 15–25 interviews (multiple clusters)</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Analysis by function / seniority</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Narrative mirror (25 pp.) + executive summary</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 2 workshops (restitution + co-design)</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 3-month intervention plan with narrative KPIs</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 90-day follow-up</li>
                </ul>
                <p className="text-xs font-mono text-muted-foreground">Ideal for: cultural transformation, M&A, 100+ people organizations</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/40">
        <div className="container-wide max-w-3xl text-center">
          <AnimatedSection>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">Next step</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to see what emerges<br />when people really talk?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              A 30-minute exploratory conversation is enough to understand whether Lumen 
              is the right tool for your organization — and in which format.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <a href="mailto:info@venturoconsulting.it">Let's talk</a>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/en/case-studies">See the projects</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FooterEN />
    </>
  );
};

export default LumenEN;
