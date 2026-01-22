import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Messaggio inviato!",
      description: "Ti ricontatteremo al più presto.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-charcoal">
      <div className="container-narrow">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-headline text-warm-white">
            Iniziamo a parlare
          </h2>
          <p className="text-lg text-warm-white/70 mt-4">
            Raccontaci la tua sfida. Nessun impegno, solo una conversazione per capire se possiamo aiutarti.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-5">
          <div>
            <Input
              type="text"
              placeholder="Il tuo nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-warm-white/10 border-warm-white/20 text-warm-white placeholder:text-warm-white/50 focus:border-primary h-12"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="La tua email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-warm-white/10 border-warm-white/20 text-warm-white placeholder:text-warm-white/50 focus:border-primary h-12"
            />
          </div>
          <div>
            <Textarea
              placeholder="Qual è la sfida culturale che state affrontando?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="bg-warm-white/10 border-warm-white/20 text-warm-white placeholder:text-warm-white/50 focus:border-primary resize-none"
            />
          </div>
          <Button 
            type="submit" 
            variant="hero" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Invio in corso..."
            ) : (
              <>
                Invia messaggio
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
