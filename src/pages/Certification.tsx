import { Helmet } from "react-helmet-async";
import { certifications } from "@/data/certifications";
import { useState, useMemo } from "react";
import CertificationCard from "@/components/CertificationCard";
import { Search, Award, Download, FileDown, Filter } from "lucide-react";

export default function Certification() {
  const [q, setQ] = useState("");
  const [filterType, setFilterType] = useState<"all" | "downloadable" | "valid">("all");
  
  const list = useMemo(
    () => {
      let filtered = certifications.filter((c) =>
        [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
          .join(" ")
          .toLowerCase()
          .includes(q.toLowerCase()),
      );

      // Apply additional filters
      if (filterType === "downloadable") {
        filtered = filtered.filter((c) => c.image);
      } else if (filterType === "valid") {
        filtered = filtered.filter((c) => c.status === "valid" || !c.status);
      }

      return filtered.sort((a, b) => b.issueDate.localeCompare(a.issueDate));
    },
    [q, filterType],
  );

  const downloadableCerts = list.filter((c) => c.image);
  const allDownloadableCerts = certifications.filter((c) => c.image);

  return (
    <section className="w-full max-w-7xl mx-auto">
      <Helmet>
        <title>Certifications – Portfolio Professionnel</title>
        <meta
          name="description"
          content="Liste complète des certifications et badges professionnels obtenus par Yasmine Ettouyjer. Téléchargez vos certificats."
        />
      </Helmet>

      {/* Header Professionnel */}
      <div className="mb-16 text-center space-y-6 animate-slideUp">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/30 shadow-professional-lg">
              <Award className="w-10 h-10 text-primary" />
            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold gradient-text">
          Mes Certifications
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Découvrez toutes mes certifications professionnelles et téléchargez les certificats officiels en haute qualité.
        </p>
      </div>

      {/* Search Bar et Filtres Professionnels */}
      <div className="mb-10 space-y-4 animate-slideUp">
        <div className="relative max-w-3xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Rechercher une certification (ex: Java, React, Hibernate...)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground shadow-professional"
          />
        </div>
        
        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          <button
            onClick={() => setFilterType("all")}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm ${
              filterType === "all"
                ? "bg-primary text-primary-foreground shadow-professional"
                : "bg-card border border-border text-foreground hover:bg-accent"
            }`}
          >
            <Filter className="w-4 h-4 inline mr-2" />
            Toutes
          </button>
          <button
            onClick={() => setFilterType("downloadable")}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm ${
              filterType === "downloadable"
                ? "bg-primary text-primary-foreground shadow-professional"
                : "bg-card border border-border text-foreground hover:bg-accent"
            }`}
          >
            <Download className="w-4 h-4 inline mr-2" />
            Téléchargeables
          </button>
          <button
            onClick={() => setFilterType("valid")}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm ${
              filterType === "valid"
                ? "bg-primary text-primary-foreground shadow-professional"
                : "bg-card border border-border text-foreground hover:bg-accent"
            }`}
          >
            <Award className="w-4 h-4 inline mr-2" />
            Valides
          </button>
        </div>
      </div>

      {/* Stats Professionnelles */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slideUp">
        <div className="bg-card border-2 border-border rounded-2xl p-8 text-center shadow-professional hover:shadow-professional-lg transition-all card-hover bg-gradient-to-br from-card to-card/50">
          <div className="text-4xl font-bold text-primary mb-3">{list.length}</div>
          <div className="text-base font-medium text-muted-foreground">Certifications totales</div>
        </div>
        <div className="bg-card border-2 border-border rounded-2xl p-8 text-center shadow-professional hover:shadow-professional-lg transition-all card-hover bg-gradient-to-br from-card to-card/50">
          <div className="text-4xl font-bold text-primary mb-3">{downloadableCerts.length}</div>
          <div className="text-base font-medium text-muted-foreground">Certificats téléchargeables</div>
        </div>
        <div className="bg-card border-2 border-border rounded-2xl p-8 text-center shadow-professional hover:shadow-professional-lg transition-all card-hover bg-gradient-to-br from-card to-card/50">
          <div className="text-4xl font-bold text-green-500 mb-3">
            {list.filter((c) => c.status === "valid" || !c.status).length}
          </div>
          <div className="text-base font-medium text-muted-foreground">Certifications valides</div>
        </div>
        <div className="bg-card border-2 border-border rounded-2xl p-8 text-center shadow-professional hover:shadow-professional-lg transition-all card-hover bg-gradient-to-br from-card to-card/50">
          <div className="text-4xl font-bold text-blue-500 mb-3">
            {list.filter((c) => c.credentialUrl && (c.issuer.includes("Toubkalit") || c.issuer.includes("MLIAEdu"))).length}
          </div>
          <div className="text-base font-medium text-muted-foreground">Certificats vérifiables</div>
        </div>
      </div>

      {/* Results count */}
      {q && (
        <div className="mb-6 text-center animate-fade">
          <p className="text-muted-foreground">
            {list.length} certification{list.length > 1 ? "s" : ""} trouvée{list.length > 1 ? "s" : ""}
          </p>
        </div>
      )}

      {/* Certifications Grid */}
      {list.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scaleIn">
          {list.map((c) => (
            <CertificationCard key={c.title + c.issueDate} c={c} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 animate-fade">
          <Award className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <p className="text-xl font-semibold mb-2">Aucune certification trouvée</p>
          <p className="text-muted-foreground">
            Essayez de modifier vos critères de recherche
          </p>
        </div>
      )}

      {/* Section Téléchargement Professionnelle */}
      {allDownloadableCerts.length > 0 && (
        <div className="mt-20 pt-16 border-t-2 border-border/50 animate-slideUp">
          <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-10 border-2 border-primary/20 shadow-professional-lg">
            <div className="text-center mb-10">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30"></div>
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/30 shadow-professional">
                    <FileDown className="w-10 h-10 text-primary" />
                  </div>
                </div>
              </div>
              <h2 className="text-4xl font-bold gradient-text mb-4">
                Centre de Téléchargement
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Tous mes certificats sont disponibles en téléchargement. Cliquez sur le bouton "Télécharger" de chaque certification ci-dessus pour obtenir le fichier en haute qualité.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {allDownloadableCerts.map((cert) => (
                <div
                  key={cert.title}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate">{cert.title}</p>
                      <p className="text-xs text-muted-foreground truncate">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Astuce:</strong> Utilisez les filtres ci-dessus pour afficher uniquement les certificats téléchargeables
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
