import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

export default function ContactInfo() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "+212 771-299-320",
      href: "tel:+212771299320",
    },
    {
      icon: Mail,
      label: "Email",
      value: "ettouyjeryasmine@gmail.com",
      href: "mailto:ettouyjeryasmine@gmail.com",
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "Marrakech, Maroc",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "yasmine-ettouyjer-605313323",
      href: "https://www.linkedin.com/in/yasmine-ettouyjer-605313323/",
      external: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "EttouyjerYasmine",
      href: "https://github.com/EttouyjerYasmine",
      external: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
      {contactInfo.map((info, index) => {
        const Icon = info.icon;
        const content = (
          <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:bg-accent transition-all card-hover group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground mb-1">{info.label}</p>
              <p className="text-sm font-medium text-foreground truncate">
                {info.value}
              </p>
            </div>
            {info.external && (
              <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            )}
          </div>
        );

        return info.href ? (
          <a
            key={index}
            href={info.href}
            target={info.external ? "_blank" : undefined}
            rel={info.external ? "noreferrer" : undefined}
            className="block"
          >
            {content}
          </a>
        ) : (
          <div key={index}>{content}</div>
        );
      })}
    </div>
  );
}
