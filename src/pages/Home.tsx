import { useState } from "react";
import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ContactInfo from "@/components/ContactInfo";

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);

  const projects = [
    {
      title: "Plateforme de gestion des dons",
      description: "Application web pour gérer les dons et les bénéficiaires avec suivi et reporting."
    },
    {
      title: "Plateforme de gestion de bibliothèque",
      description: "Système complet pour gérer livres, emprunts, retours et utilisateurs en HTML, CSS et JavaScript."
    },
    {
      title: "Supervision réseau",
      description: "Supervision de plus de 5 services (HTTP, SNMP, etc.) avec Nagios, alertes et monitoring."
    },
    {
      title: "Projet Réalité Augmentée",
      description: "Application AR interactive avec Vuforia pour visualiser des modèles 3D."
    },
    {
      title: "Portfolio personnel",
      description: "Site web responsive en HTML, CSS et JavaScript pour présenter mes compétences et projets."
    },
    {
      title: "Mini-jeu interactif",
      description: "Jeu web simple développé en JavaScript et CSS pour démontrer la logique et l’interactivité."
    },
    {
      title: "Formulaire dynamique",
      description: "Page web avec validation et calcul automatique utilisant HTML, CSS et JavaScript."
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-900">
      {/* SEO */}
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta
          name="description"
          content="Portfolio : Développement, Réseaux, DevOps et Bureautique"
        />
      </Helmet>

      <div className="max-w-4xl mx-auto p-6 space-y-12">
        {/* Section Présentation */}
        <section className="text-center space-y-4">
          <h1 className="text-5xl font-bold">{profile.name}</h1>
          <p className="text-xl text-muted-foreground">{profile.role}</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">{profile.about}</p>
        </section>

        {/* Section Photo */}
        <section className="flex justify-center">
          <div className="w-64 h-64 rounded-2xl overflow-hidden border shadow-lg">
            <img
              src="/mee.jpg"
              alt="Photo de Yasmine"
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
            />
          </div>
        </section>

        {/* Section Projets */}
<section className="text-center space-y-4">
  <h2 className="text-3xl font-semibold">Mes projets</h2>
  <p className="text-muted-foreground max-w-xl mx-auto">
    Découvrez mes projets professionnels et académiques, y compris des plateformes web, des projets réseau et des applications de réalité augmentée.
  </p>
  <Link
    to="/projects"
    className="mt-4 inline-block px-6 py-2 border rounded-lg hover:bg-gray-100 hover:text-gray-900 transition"
  >
    Voir mes projets
  </Link>
</section>


        {/* Section Certifications */}
        <section className="text-center">
          <h3 className="text-xl font-semibold mb-2">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="rounded-full border px-3 py-1">Licence Informatique — Cadi Ayyad</span>
            <span className="rounded-full border px-3 py-1">Master Ingénierie Informatique — Cadi Ayyad</span>
          </div>
        </section>

        {/* Section Compétences */}
        <section>
          <h3 className="text-xl font-semibold mb-2 text-center">Compétences Développement</h3>
          <ul className="list-disc list-inside max-w-2xl mx-auto space-y-1 text-sm">
            <li>
              <strong>Développement :</strong> Java, Hibernate & JPA, Jakarta JEE, C#, React, Android, HTML, CSS, JavaScript
            </li>
            <li>
              <strong>Base de données :</strong> MySQL, PostgreSQL
            </li>
            <li>
              <strong>Réseau & Supervision :</strong> Nagios, Administration de services réseau
            </li>
            <li>
              <strong>DevOps / Gestion de projet :</strong> Git, Docker, Agile, IDOO
            </li>
            <li>
              <strong>Bureautique :</strong> Word, Excel, outils de productivité
            </li>
          </ul>
        </section>

        {/* Section Contact professionnel */}
        <section className="border-t pt-6 space-y-3">
          <h3 className="text-xl font-semibold text-center">Contact professionnel</h3>
          <div className="flex justify-center">
            <ContactInfo />
          </div>
        </section>
      </div>
    </div>
  );
}
