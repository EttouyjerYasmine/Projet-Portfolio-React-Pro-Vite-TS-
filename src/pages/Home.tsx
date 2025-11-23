import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ContactInfo from "@/components/ContactInfo";
import { Code, Database, Network, Briefcase, Award, Mail, Box } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-hero">
      <Helmet>
        <title>{profile.name} — Portfolio Professionnel | Ingénieure en Informatique</title>
        <meta
          name="description"
          content="Portfolio professionnel de Yasmine Ettouyjer - Ingénieure en Informatique spécialisée en Développement, Réseau, AR/VR. Découvrez mes projets, certifications et compétences."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-28">
        {/* Hero Section Professionnel */}
        <section className="text-center space-y-8 animate-slideUp">
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-professional-lg ring-4 ring-primary/10 bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src="/mee.jpeg"
                  alt="Photo de Yasmine Ettouyjer"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background shadow-lg animate-float"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold gradient-text leading-tight">
              {profile.name}
            </h1>
            <p className="text-3xl md:text-4xl font-semibold text-muted-foreground">
              Ingénieure en Informatique
            </p>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed font-light">
              {profile.about}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Link
              to="/projects"
              className="btn-primary"
            >
              Mes Projets
            </Link>
            <Link
              to="/certifications"
              className="btn-secondary"
            >
              Mes Certifications
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Me Contacter
            </Link>
          </div>
        </section>

        {/* Compétences Professionnelles */}
        <section className="animate-slideUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Compétences Techniques
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expertise dans les technologies modernes et les meilleures pratiques du développement
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border-2 border-border rounded-2xl p-8 card-hover shadow-professional bg-gradient-to-br from-card to-card/50">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-professional">
                  <Code className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Développement</h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                Java, JPA/Hibernate, Jakarta JEE, React, Android, C#, HTML/CSS/JS
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-2xl p-8 card-hover shadow-professional bg-gradient-to-br from-card to-card/50">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-professional">
                  <Database className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Base de données</h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                MySQL, PostgreSQL
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-2xl p-8 card-hover shadow-professional bg-gradient-to-br from-card to-card/50">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-professional">
                  <Network className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Réseau</h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                Nagios, supervision services
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-2xl p-8 card-hover shadow-professional bg-gradient-to-br from-card to-card/50">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-professional">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Gestion de projet</h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                Git, Docker, Agile, IDOO
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-2xl p-8 card-hover shadow-professional bg-gradient-to-br from-card to-card/50">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-professional">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Bureautique</h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                Word, Excel
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-2xl p-8 card-hover shadow-professional bg-gradient-to-br from-card to-card/50">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-professional">
                  <Box className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">AR/VR</h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                Vuforia SDK, Unity, Android Studio, Détection d'images/objets 3D, Superposition virtuelle
              </p>
            </div>
          </div>
        </section>

        {/* Diplômes Professionnels */}
        <section className="animate-slideUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Formations Académiques
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Parcours académique et formations supérieures
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="px-8 py-6 rounded-2xl border-2 border-primary/30 bg-card shadow-professional hover:shadow-professional-lg transition-all hover:scale-105 card-hover bg-gradient-to-br from-card to-card/50 min-w-[280px]">
              <p className="font-bold text-xl mb-2">Licence Informatique</p>
              <p className="text-base text-muted-foreground">Université Cadi Ayyad</p>
            </div>
            <div className="px-8 py-6 rounded-2xl border-2 border-primary/30 bg-card shadow-professional hover:shadow-professional-lg transition-all hover:scale-105 card-hover bg-gradient-to-br from-card to-card/50 min-w-[280px]">
              <p className="font-bold text-xl mb-2">Master Ingénierie Informatique</p>
              <p className="text-base text-muted-foreground">Université Cadi Ayyad</p>
            </div>
          </div>
        </section>

        {/* Contact Professionnel */}
        <section className="border-t-2 border-border/50 pt-16 animate-slideUp">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Contact Professionnel
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              N'hésitez pas à me contacter pour toute opportunité professionnelle
            </p>
          </div>
          <div className="flex justify-center">
            <ContactInfo />
          </div>
        </section>
      </div>
    </div>
  );
}
