interface ExperienceProps {
  exp: {
    title: string;
    company: string;
    year: string;
    description: string;
  };
}

export default function ExperienceCard({ exp }: ExperienceProps) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{exp.title}</h3>

      <p className="text-sm text-muted-foreground">
        {exp.company} — {exp.year}
      </p>

      <p className="mt-2 text-sm leading-relaxed">{exp.description}</p>
    </div>
  );
}
