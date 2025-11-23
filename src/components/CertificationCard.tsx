// src/components/CertificationCard.tsx
import type { Certification } from "@/data/certifications";
import clsx from "clsx";
import { Download, ExternalLink, Award } from "lucide-react";

function formatDate(s: string) {
  const parts = s.split("-");
  const year = parts[0];
  const month = parts[1] || "01";
  const monthNames = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
  const monthIndex = parseInt(month) - 1;
  return `${monthNames[monthIndex] || month}/${year}`;
}

async function handleDownload(imagePath: string, title: string) {
  if (!imagePath) return;
  
  try {
    // Fetch the image as a blob
    const response = await fetch(imagePath);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = url;
    const fileExtension = imagePath.split('.').pop() || 'png';
    link.download = `${title.replace(/\s+/g, "_")}_Certificat.${fileExtension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Erreur lors du téléchargement:', error);
    // Fallback to direct download
    const link = document.createElement("a");
    link.href = imagePath;
    link.download = `${title.replace(/\s+/g, "_")}_Certificat.${imagePath.split('.').pop()}`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired =
    c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <article
      className={clsx(
        "group relative bg-card border-2 border-border rounded-2xl p-6 card-hover",
        "shadow-professional hover:shadow-professional-lg transition-all duration-300",
        "bg-gradient-to-br from-card to-card/50 backdrop-blur-sm",
        isExpired && "opacity-70",
      )}
      aria-label={`Certification ${c.title}`}
    >
      {/* Badge d'état professionnel */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 items-end">
        {c.status === "valid" && (
          <div className="relative">
            <div className="absolute inset-0 bg-green-500 rounded-full blur-md opacity-50 animate-pulse"></div>
            <div className="relative w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-card shadow-lg"></div>
          </div>
        )}
        {c.credentialUrl && (c.issuer.includes("Toubkalit") || c.issuer.includes("MLIAEdu")) && (
          <div className="px-2 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 shadow-sm">
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">✓ Vérifiable</span>
          </div>
        )}
      </div>

      {/* Image du certificat avec effet professionnel */}
      {c.image && (
        <div className="mb-5 flex justify-center">
          <div className="relative group/image">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-xl blur-xl opacity-50 group-hover/image:opacity-75 transition-opacity"></div>
            <div className="relative w-40 h-40 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-3 shadow-professional border border-primary/20">
              <img
                src={c.image}
                alt={c.imageAlt ?? c.title}
                width={256}
                height={256}
                loading="lazy"
                className="w-full h-full object-contain rounded-lg group-hover/image:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      )}

      {/* Icône par défaut si pas d'image - design amélioré */}
      {!c.image && (
        <div className="mb-5 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-xl opacity-50"></div>
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/30 shadow-professional">
              <Award className="w-12 h-12 text-primary" />
            </div>
          </div>
        </div>
      )}

      {/* Titre avec style professionnel */}
      <h3 className="font-bold text-xl leading-tight mb-3 text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
        {c.title}
      </h3>

      {/* Émetteur et date avec style amélioré */}
      <div className="flex flex-wrap items-center gap-2 text-sm mb-4">
        <span className="font-semibold text-foreground">{c.issuer}</span>
        <span className="text-muted-foreground">•</span>
        <span className="text-muted-foreground font-medium">{formatDate(c.issueDate)}</span>
        {c.expiryDate && (
          <>
            <span className="text-muted-foreground">→</span>
            <span className="text-muted-foreground">{formatDate(c.expiryDate)}</span>
          </>
        )}
      </div>

      {/* ID de certification */}
      {c.credentialId && (
        <p className="text-xs text-muted-foreground mb-3 font-mono">
          ID: {c.credentialId}
        </p>
      )}

      {/* Compétences */}
      {c.skills && c.skills.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-medium text-muted-foreground mb-2">Compétences:</p>
          <div className="flex flex-wrap gap-1.5">
            {c.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
              >
                {skill}
              </span>
            ))}
            {c.skills.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                +{c.skills.length - 3}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Tags */}
      {c.tags && c.tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-1.5">
          {c.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full border border-border bg-background text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions avec design professionnel */}
      <div className="mt-5 pt-5 border-t border-border/50 flex flex-wrap items-center gap-3">
        {c.image && (
          <button
            onClick={() => handleDownload(c.image!, c.title)}
            className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-professional hover:shadow-professional-lg hover:scale-105 active:scale-95"
            aria-label={`Télécharger le certificat ${c.title}`}
          >
            <Download className="w-4 h-4" />
            Télécharger
          </button>
        )}
        {c.credentialUrl && (
          <a
            href={c.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl border-2 border-border hover:bg-accent hover:text-accent-foreground hover:border-primary/50 transition-all shadow-sm hover:shadow-md"
            aria-label={`Vérifier le certificat ${c.title} sur ${c.issuer}`}
            title={`Vérifier la validité sur ${c.issuer}`}
          >
            <ExternalLink className="w-4 h-4" />
            {c.issuer.includes("Toubkalit") || c.issuer.includes("MLIAEdu") ? "Vérifier" : "Voir en ligne"}
          </a>
        )}
      </div>

      {/* Statut avec badge professionnel */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {isExpired && (
          <span className="px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-medium text-xs border border-amber-300 dark:border-amber-700">
            Expirée
          </span>
        )}
        {c.status === "revoked" && (
          <span className="px-3 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-medium text-xs border border-red-300 dark:border-red-700">
            Révoquée
          </span>
        )}
        {!isExpired && c.status !== "revoked" && (
          <span className="px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium text-xs border border-green-300 dark:border-green-700">
            ✓ Valide
          </span>
        )}
      </div>
    </article>
  );
}
