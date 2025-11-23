import { Helmet } from "react-helmet-async";
import { experience } from "@/data/experience";
import ExperienceCard from "@/components/ExperienceCard";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section className="w-full max-w-6xl mx-auto">
      <Helmet>
        <title>Expériences Professionnelles – Portfolio</title>
        <meta
          name="description"
          content="Découvrez les expériences professionnelles et projets académiques de Yasmine Ettouyjer."
        />
      </Helmet>

      <div className="mb-12 text-center space-y-4 animate-slideUp">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h1 className="text-5xl font-bold gradient-text">
          Expériences Professionnelles
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Parcours professionnel et projets académiques réalisés
        </p>
      </div>

      <div className="space-y-6 animate-scaleIn">
        {experience.map((exp, index) => (
          <div
            key={exp.title}
            style={{ animationDelay: `${index * 0.1}s` }}
            className="animate-slideUp"
          >
            <ExperienceCard exp={exp} />
          </div>
        ))}
      </div>
    </section>
  );
}
