import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";
import { Code, ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto p-6 space-y-8">
      <Helmet>
        <title>Projets – Portfolio</title>
        <meta
          name="description"
          content="Découvrez les projets de développement et les réalisations techniques."
        />
      </Helmet>

      {/* Titre et description Professionnels */}
      <div className="text-center space-y-4 mb-16 animate-slideUp">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30"></div>
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/30 shadow-professional">
              <Code className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold gradient-text">Mes Projets</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Découvrez mes projets Web, Réseau et Réalité Augmentée, ainsi que mes réalisations professionnelles.
        </p>
      </div>

      {/* Grille des projets Professionnelle */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-scaleIn">
        {projects.map((p, index) => (
          <article
            key={p.title}
            className="group bg-card border-2 border-border rounded-2xl p-6 card-hover shadow-professional bg-gradient-to-br from-card to-card/50"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">{p.summary}</p>

            {/* Tags Professionnels */}
            {p.tags && p.tags.length > 0 && (
              <div className="mt-4 mb-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full border border-border bg-background text-foreground font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Liens Professionnels */}
            <div className="mt-5 pt-5 border-t border-border/50 flex gap-3">
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  Démo
                </a>
              )}
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl border-2 border-border hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
