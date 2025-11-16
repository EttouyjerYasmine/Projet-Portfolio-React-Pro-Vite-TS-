import React, { useState } from "react";

export default function ContactInfo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {open ? "Fermer les infos" : "Voir mes contacts"}
      </button>

      {open && (
        <div className="mt-3 border rounded p-4 bg-gray-50 shadow-md">
          <ul className="space-y-2 text-sm">
            <li><strong>Téléphone:</strong> +212 771-299-320</li>
            <li><strong>Email:</strong> ettouyjeryasmine@gmail.com</li>
            <li><strong>Adresse:</strong> Marrakech, Maroc</li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/yasmine-ettouyjer-605313323/" target="_blank" rel="noreferrer" className="underline text-blue-600">
                Voir mon profil
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/EttouyjerYasmine" target="_blank" rel="noreferrer" className="underline text-blue-600">
                Voir mon GitHub
              </a>
            </li>
            <li><strong>Autres:</strong> Informations professionnelles supplémentaires ici</li>
          </ul>
        </div>
      )}
    </div>
  );
}
