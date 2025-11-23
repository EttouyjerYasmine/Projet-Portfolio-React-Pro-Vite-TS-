import { Helmet } from "react-helmet-async";
import { education } from "@/data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="w-full max-w-6xl mx-auto">
      <Helmet>
        <title>Formations – Portfolio Professionnel</title>
        <meta
          name="description"
          content="Formations académiques et spécialisations suivies par Yasmine Ettouyjer."
        />
      </Helmet>

      <div className="mb-12 text-center space-y-4 animate-slideUp">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30"></div>
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/30 shadow-professional">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
        <h1 className="text-5xl font-bold gradient-text">Formations</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Formations académiques et spécialisations suivies
        </p>
      </div>

      <div className="space-y-6 animate-scaleIn">
        {education.map((e, index) => (
          <div
            key={e.title}
            className="bg-card border-2 border-border rounded-2xl p-8 card-hover shadow-professional bg-gradient-to-br from-card to-card/50"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="font-bold text-2xl mb-2">{e.title}</h3>
            <p className="text-base text-muted-foreground">
              {e.institution} — {e.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
