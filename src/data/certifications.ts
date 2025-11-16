// src/data/certifications.ts

export type Certification = {
  title: string;
  issuer: string;
  issueDate: string; // format YYYY-MM
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string; // chemin vers public/certs/*.webp
  imageAlt?: string;
  status?: "valid" | "expired" | "revoked";
  tags?: string[];
  skills?: string[];
};

export const certifications: Certification[] = [
  {
    title: "Fondamentaux de la programmation Java",
    issuer: "Mldieu.Toubkalit",
    issueDate: "2025-01",
    image: "/certs/certif java.png",
    imageAlt: "Badge Fondamentaux Java",
    status: "valid",
    tags: ["Java", "Programmation"],
    skills: ["Java", "Algorithmes", "Programmation orientée objet"],
  },
  {
    title: "Hibernate et JPA",
    issuer: "Mldieu.Toubkalit",
    issueDate: "2025-03",
    image: "/certs/certif jpa.png",
    imageAlt: "Badge Hibernate et JPA",
    status: "valid",
    tags: ["Java", "Hibernate", "JPA"],
    skills: ["ORM", "Base de données", "JPA", "Hibernate"],
  },
  {
    title: "Développement Front-End moderne avec React",
    issuer: "Mldieu.Toubkalit",
    issueDate: "2025-04",
    image: "/certs/react.jpg",
    imageAlt: "Badge React",
    status: "valid",
    tags: ["React", "JavaScript", "Frontend"],
    skills: ["React", "JSX", "Components", "Hooks", "State management"],
  },
];
