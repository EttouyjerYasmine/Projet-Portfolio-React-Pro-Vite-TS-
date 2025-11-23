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
    issuer: "MLIAEdu - Toubkalit",
    issueDate: "2025-01",
    image: "/certs/certif java.png",
    imageAlt: "Badge Fondamentaux Java",
    status: "valid",
    tags: ["Java", "Programmation"],
    skills: ["Java", "Algorithmes", "Programmation orientée objet"],
    credentialUrl: "https://mliaedu.toubkalit.com/student/courses",
    credentialId: "TOUBKALIT-JAVA-2025-01",
  },
  {
    title: "Hibernate et JPA",
    issuer: "MLIAEdu - Toubkalit",
    issueDate: "2025-03",
    image: "/certs/certif jpa.png",
    imageAlt: "Badge Hibernate et JPA",
    status: "valid",
    tags: ["Java", "Hibernate", "JPA"],
    skills: ["ORM", "Base de données", "JPA", "Hibernate"],
    credentialUrl: "https://mliaedu.toubkalit.com/student/courses",
    credentialId: "TOUBKALIT-JPA-2025-03",
  },
  {
    title: "Développement Front-End moderne avec React",
    issuer: "MLIAEdu - Toubkalit",
    issueDate: "2025-04",
    image: "/certs/react.jpg",
    imageAlt: "Badge React",
    status: "valid",
    tags: ["React", "JavaScript", "Frontend"],
    skills: ["React", "JSX", "Components", "Hooks", "State management"],
    credentialUrl: "https://mliaedu.toubkalit.com/student/courses",
    credentialId: "TOUBKALIT-REACT-2025-04",
  },
  {
    title: "Master Ingénierie Informatique",
    issuer: "Université Cadi Ayyad",
    issueDate: "2024-09-01",
    expiryDate: "",
    credentialUrl: ""
  },
  {
    title: "Licence Informatique",
    issuer: "Université Cadi Ayyad",
    issueDate: "2023-07-01",
    expiryDate: "",
    credentialUrl: ""
  }
];

