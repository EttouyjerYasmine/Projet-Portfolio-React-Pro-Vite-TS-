import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

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

      {/* Titre et description */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Mes Projets</h1>
        <p className="text-muted-foreground">
          Découvrez mes projets Web, Réseau et Réalité Augmentée, ainsi que mes réalisations professionnelles.
        </p>
        <Link
          to="/"
          className="inline-block mt-2 px-4 py-2 border rounded-lg hover:bg-gray-100 hover:text-gray-900 transition"
        >
          Retour à l’accueil
        </Link>
      </div>

      {/* Grille des projets */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="border rounded-2xl p-4 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{p.summary}</p>

            {/* Tags */}
            {p.tags && p.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="border rounded px-2 py-0.5 bg-gray-50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Liens */}
            <div className="mt-4 flex gap-3 text-sm">
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Démo
                </a>
              )}
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
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
