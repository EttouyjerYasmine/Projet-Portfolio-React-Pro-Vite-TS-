import { Helmet } from "react-helmet-async";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section>
      <Helmet>
        <title>Formations – Portfolio</title>
        <meta
          name="description"
          content="Formations académiques et spécialisations suivies par Yasmine Ettouyjer."
        />
      </Helmet>

      <h2 className="text-2xl font-semibold">Formations</h2>
      <ul className="mt-2 space-y-2">
        {education.map((e) => (
          <li key={e.title} className="border rounded p-3">
            <h3 className="font-semibold">{e.title}</h3>
            <p className="text-sm text-muted-foreground">
              {e.institution} — {e.year}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
