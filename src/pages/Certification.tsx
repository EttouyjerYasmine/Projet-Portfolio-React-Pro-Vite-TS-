import { Helmet } from "react-helmet-async";
import { certifications } from "@/data/certifications";
import { useState, useMemo } from "react";
import CertificationCard from "@/components/CertificationCard";

export default function Certification() {
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q],
  );

  return (
    <section>
      <Helmet>
        <title>Certifications – Portfolio</title>
        <meta
          name="description"
          content="Liste des certifications et badges professionnels obtenus par Yasmine Ettouyjer."
        />
      </Helmet>

      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <input
          placeholder="Filtrer (ex: AWS, Kubernetes)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="border rounded-xl px-3 py-2 w-72"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((c) => (
          <CertificationCard key={c.title + c.issueDate} c={c} />
        ))}
      </div>
    </section>
  );
}
