// src/components/CertificationCard.tsx
import type { Certification } from "@/data/certifications";
import clsx from "clsx";

function formatDate(s: string) {
  const [year, month] = s.split("-");
  return `${month}/${year}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired =
    c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <article
      className={clsx(
        "border rounded-2xl p-4 hover:shadow transition",
        isExpired && "opacity-70",
      )}
      aria-label={`Certification ${c.title}`}
    >
      {c.image && (
        <img
          src={c.image}
          alt={c.imageAlt ?? c.title}
          width={256}
          height={256}
          loading="lazy"
          className="w-24 h-24 object-contain rounded mb-3"
        />
      )}

      <h3 className="font-semibold leading-snug">{c.title}</h3>

      <p className="text-sm text-muted-foreground">
        {c.issuer} • {formatDate(c.issueDate)}
        {c.expiryDate ? ` → ${formatDate(c.expiryDate)}` : ""}
        {c.credentialId ? ` • ID ${c.credentialId}` : ""}
      </p>

      {c.skills?.length ? (
        <p className="mt-2 text-sm">Compétences : {c.skills.join(", ")}</p>
      ) : null}

      <div className="mt-3 flex items-center gap-3 text-sm">
        {c.credentialUrl && (
          <a
            className="underline"
            href={c.credentialUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Voir le certificat ${c.title}`}
          >
            Voir le certificat
          </a>
        )}
        {isExpired && <span className="text-amber-600">Expirée</span>}
        {c.status === "revoked" && (
          <span className="text-red-600">Révoquée</span>
        )}
      </div>
    </article>
  );
}
