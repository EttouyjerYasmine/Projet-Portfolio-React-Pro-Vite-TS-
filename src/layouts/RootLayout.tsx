import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-100 p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">Bonjour Yasmine</h1>
        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">Accueil</Link>
          <Link to="/experience" className="hover:underline">Expériences</Link>
          <Link to="/education" className="hover:underline">Formations</Link>
          <Link to="/certifications" className="hover:underline">Certifications</Link>
          <Link to="/projects" className="hover:underline">Projets</Link>
        </nav>
      </header>

      {/* Contenu principal */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 p-4 text-center text-sm text-gray-500">
        &copy; 2025 Yasmine Ettouyjer
      </footer>
    </div>
  );
}
