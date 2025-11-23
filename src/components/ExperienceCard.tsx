import { Briefcase, Calendar, Building2 } from "lucide-react";

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
    <div className="group relative bg-card border border-border rounded-xl p-6 card-hover">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <Briefcase className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {exp.title}
          </h3>
          <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              <span className="font-medium">{exp.company}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{exp.year}</span>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
        </div>
      </div>
    </div>
  );
}
