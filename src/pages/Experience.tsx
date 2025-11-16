import { experience } from "@/data/experience";
import ExperienceCard from "@/components/ExperienceCard";

export default function Experience() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Expériences Professionnelles</h2>

      <div className="mt-4 space-y-4">
        {experience.map((exp) => (
          <ExperienceCard key={exp.title} exp={exp} />
        ))}
      </div>
    </section>
  );
}
