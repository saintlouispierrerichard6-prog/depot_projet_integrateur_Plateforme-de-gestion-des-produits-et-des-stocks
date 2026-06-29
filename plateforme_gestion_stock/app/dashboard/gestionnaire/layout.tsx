export default function GestionnaireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">

      {/* ENTETE GESTIONNAIRE */}
      <header className="bg-blue-700 text-white p-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">Tableau de Bord Gestionnaire</h1>

        <button className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition">
          Déconnexion
        </button>
      </header>

      {/* CONTENU */}
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>

      {/* FOOTER GESTIONNAIRE */}
      <footer className="bg-blue-900 text-white p-4 text-center">
        © 2026 - Gestionnaire | Plateforme de Gestion des Produits
      </footer>

    </div>
  );
}
